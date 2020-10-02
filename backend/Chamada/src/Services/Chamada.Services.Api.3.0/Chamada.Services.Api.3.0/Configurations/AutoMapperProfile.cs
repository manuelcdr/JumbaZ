using AutoMapper;
using System.Linq;
using TyperCore;
using TyperCore.Extensions;

namespace Chamada.Services.Api30.Configurations
{
  public class AutoMapperProfile : Profile
  {

    public AutoMapperProfile()
        : base()
    {
      MapearTodos();
    }

    private void MapearTodos()
    {
      foreach (var model in Typer.GetRefTypers("ViewModel"))
      {
        var typers = model.GetTypers();

        if (typers == null || typers.Count() == 0)
          continue;

        foreach (var typer in typers)
        {
          CreateMap(model, typer);
          CreateMap(typer, model);
        }
      }
    }
  }
}
