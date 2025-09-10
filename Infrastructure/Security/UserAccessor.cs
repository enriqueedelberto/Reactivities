using System.Security.Claims;
using Application.Interfaces;
using Domain;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Persistence;

namespace Infrastructure.Security;

public class UserAccessor(IHttpContextAccessor httpContextAccessor, AppDbContext dbContext) 
   : IUserAccessor
{
    public async Task<User> GetUserAsync()
    {
        return await dbContext.Users.FindAsync(GetUserId())
               ?? throw new UnauthorizedAccessException("No user is logged in");
    }

    public string GetUserId()
    {
        return httpContextAccessor.HttpContext?.User.FindFirstValue(ClaimTypes.NameIdentifier)
               ?? throw new Exception("User not found");
    }

    public async Task<User> GetUserWithPhotosAsync()
    {
        var userId = GetUserId();
        return await dbContext.Users
            .Include(x => x.Photos)
            .FirstOrDefaultAsync()
             ?? throw new UnauthorizedAccessException("No user is logged in");
    }
}
