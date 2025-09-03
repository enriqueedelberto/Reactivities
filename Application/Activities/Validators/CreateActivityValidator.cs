using System;
using Application.Activities.Commands;
using FluentValidation;

namespace Application.Activities.Validators;

public class CreateActivityValidator: AbstractValidator<CreateActivity.Command>
{
    public CreateActivityValidator()
    {
        RuleFor(x => x.ActivityDto.Title)
           .NotEmpty()
           .WithMessage("It is required");

        RuleFor(x => x.ActivityDto.Description)
           .NotEmpty()
           .WithMessage("It is required");
  }
}
