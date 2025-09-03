using System;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities.Commands;

public class EditActivity : IRequest<string>
{
    public class Command : IRequest<string>
    { 
        public required Activity Activity { get; set; }
    }

    public class Handler (AppDbContext context, IMapper mapper): IRequestHandler<Command, string>
    {  
        public async Task<string> Handle(Command request, CancellationToken cancellationToken)
        {
            var activity = await context.Activities.FindAsync(new object[] { request.Activity.Id }, cancellationToken);
            if (activity == null) throw new Exception($"Activity with ID {request.Activity.Id} not found.");

            activity.Title = request.Activity.Title;
            activity.Description = request.Activity.Description;
            activity.Date = request.Activity.Date;

            await context.SaveChangesAsync(cancellationToken);
            return activity.Id;
        }
    }
}
