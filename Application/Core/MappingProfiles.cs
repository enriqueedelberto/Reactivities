using System;
using Application.Activities.DTOs;
using Application.Profiles.DTOs;
using AutoMapper;
using Domain;

namespace Application.Core;

public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        CreateMap<Activity, Activity>();
        CreateMap<CreateActivityDto, Activity>();
        CreateMap<Activity, ActivityDto>()
          .ForMember(dest => dest.HostDisplayName, opt => opt.MapFrom(src =>
               src.Attendees.FirstOrDefault(x => x.IsHost)!.User.DisplayName))
          .ForMember(dest => dest.HostId, opt => opt.MapFrom(src =>
               src.Attendees.FirstOrDefault(x => x.IsHost)!.User.Id));

        CreateMap<ActivityAttendee, UserProfile>()
            .ForMember(d => d.DisplayName, opt => opt.MapFrom(s => s.User.DisplayName))
            .ForMember(d => d.Bio, opt => opt.MapFrom(s => s.User.Bio))
            .ForMember(d => d.ImageUrl, opt => opt.MapFrom(s => s.User.ImageUrl))
             .ForMember(d => d.Id, opt => opt.MapFrom(s => s.User.Id));

        CreateMap<User, UserProfile>();
    }
}
