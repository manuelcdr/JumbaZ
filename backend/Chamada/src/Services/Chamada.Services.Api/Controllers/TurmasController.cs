using AutoMapper;
using Chamada.Abstractions.Services;
using Chamada.Domain.Abstractions.Repositories;
using Chamada.Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using TyperCore;
using TyperCore.Attributes;

namespace Chamada.Services.Api.Controllers
{
    [Route("api")]
    public class TurmasController : ControllerBase
    {
        private readonly IGenericRepositoryRead repositoryRead;
        private readonly IGenericDomainService service;
        private readonly IMapper mapper;
        //private readonly IUnitOfWork uoW;

        public TurmasController(
          IGenericRepositoryRead repositoryRead,
          IGenericDomainService service,
          IMapper mapper)
          : base()
        {
            this.repositoryRead = repositoryRead;
            this.service = service;
            this.mapper = mapper;
        }

        [HttpGet("turma/{id}")]
        public IActionResult Get(string id)
        {
            Typer.SetCurrentTyper(typeof(Turma));
            var turma = repositoryRead.GetSingle(id) as Turma;
            if (turma == null)
                return NotFound(id);

            Typer.SetCurrentTyper(typeof(Aluno));
            var alunos = repositoryRead.Search<Aluno>(x => x.TurmaId == id);
            turma.SetAlunos(alunos);

            Typer.SetCurrentTyper(typer: typeof(Domain.Entities.Chamada));
            var chamadas = repositoryRead.Search<Domain.Entities.Chamada>(x => x.TurmaId == id);
            turma.SetChamadas(chamadas);

            Typer.SetCurrentTyper(typeof(Turma));
            var tipoModelTurma = Typer.GetRefTyper("ViewModel", TyperAction.GetSingle);
            var model = mapper.Map(turma, typeof(Turma), tipoModelTurma);

            return ResponseApi(model);
        }

    }
}
