using System;
using Application.Activities.DTOs;
using FluentValidation;

namespace Application.Activities.Validators;

public class BaseActivityValidator<T, TDto> : AbstractValidator<T> 
    where TDto : BaseActivityDto
{
    public BaseActivityValidator(Func<T, TDto> selector)
    {
       RuleFor(x => selector(x).Title)
         .NotEmpty()
         .WithMessage("It is required")
           .MaximumLength(100);

      RuleFor(x => selector(x).Description)
         .NotEmpty()
         .WithMessage("It is required")
          .MaximumLength(100);

      RuleFor(x => selector(x).Date)
          .GreaterThan(DateTime.Now)
          .WithMessage("Date must be in the future");

      RuleFor(x => selector(x).Category)
          .NotEmpty()
          .WithMessage("It is required");

      RuleFor(x => selector(x).City)
          .NotEmpty()
          .WithMessage("It is required");

      RuleFor(x => selector(x).Venue)
          .NotEmpty()
          .WithMessage("It is required");

      RuleFor(x => selector(x).Latitude)
       .NotEmpty()
          .InclusiveBetween(-90, 90);

      RuleFor(x => selector(x).Longitude)
       .NotEmpty()
      .InclusiveBetween(-180, 180);
    
   }
}
