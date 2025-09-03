using System.Reflection;
using Application.Activities.Queries;
using Application.Core;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Persistence;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<AppDbContext>(opt =>
{
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});

builder.Services.AddCors();

// Registers MediatR and scans for handlers in the assembly containing GetActivityList.Handler
builder.Services.AddMediatR(x => x.RegisterServicesFromAssemblyContaining<GetActivityList.Handler>());

builder.Services.AddAutoMapper(cfg =>
{
    // Option 1: Explicitly add a profile
        cfg.AddProfile(new MappingProfiles()); 

        // Option 2: Scan the current assembly for profiles
        cfg.AddMaps(Assembly.GetExecutingAssembly()); 

        // Option 3: Scan a specific assembly for profiles
        cfg.AddMaps(typeof(MappingProfiles).Assembly); 
});

var app = builder.Build();

// Configure the HTTP request pipeline.
//Use CORS
app.UseCors(policy =>
{
    policy.AllowAnyMethod()
          .AllowAnyHeader()
          .WithOrigins("http://localhost:5173", "https://localhost:5173");
});

// app.UseHttpsRedirection();

// app.UseAuthorization();

app.MapControllers();

using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;

try
{
    var context = services.GetRequiredService<AppDbContext>();
    await context.Database.MigrateAsync();
    await DbInitializer.SeedData(context);
}
catch (Exception ex)
{
    var logger = services.GetRequiredService<ILogger<Program>>();
    logger.LogError(ex, "Error during the migration"); 
}

app.Run();
