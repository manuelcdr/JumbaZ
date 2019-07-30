﻿using AutoMapper;
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
      //private readonly IUnitOfWork uoW;

      public TurmasController(
          IGenericRepositoryRead repositoryRead,
          IGenericDomainService service)
          : base()
      {
         this.repositoryRead = repositoryRead;
         this.service = service;
      }

      [HttpGet("turma/{id}")]
      public IActionResult Get(string id)
      {
         Typer.SetCurrentTyper(typeof(Turma));
         var turma = repositoryRead.GetSingle(id, new Turma());
         if (turma == null)
            return NotFound(id);

         Typer.SetCurrentTyper(typeof(Aluno));
         var alunos = repositoryRead.Search<Aluno>(x => x.Active == true && x.TurmaId == id);
         turma.SetAlunos(alunos);

         Typer.SetCurrentTyper(typeof(Turma));
         var tipoModelTurma = Typer.GetRefTyper("ViewModel", TyperAction.GetSingle);
         var model = Mapper.Map(turma, typeof(Turma), tipoModelTurma);

         return ResponseApi(model);
      }

   }
}