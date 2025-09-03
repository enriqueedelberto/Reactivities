using Application.Activities.Commands;
using Application.Activities.DTOs;
using Application.Activities.Queries;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Persistence;

namespace API.Controllers;

public class ActivitiesController : BaseApiController
{

    [HttpGet]
    public async Task<ActionResult<List<Activity>>> GetActivities()
    {
        return await Mediator.Send(new GetActivityList.Query());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> GetActivityDetail(string id)
    {
        //Use existing mediator
        return HandleResult(await Mediator.Send(new GetActivityDetail.Query { Id = id })); 
    }

    [HttpPost]
    public async Task<ActionResult<string>> CreateActivity(CreateActivityDto activityDto)
    {
        return await Mediator.Send(new CreateActivity.Command { ActivityDto = activityDto });
    }

    [HttpPut]
    public async Task<ActionResult<string>> EditActivity(Activity activity)
    {
        return await Mediator.Send(new EditActivity.Command { Activity = activity });
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteActivity(string id)
    {
        await Mediator.Send(new DeleteActivity.Command { Id = id });
        return NoContent();
    }
}
