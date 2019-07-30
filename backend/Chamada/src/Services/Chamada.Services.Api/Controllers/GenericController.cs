using AutoMapper;
using Chamada.Domain.Abstractions.Entities;
using Chamada.Abstractions.Services;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;
using TyperCore;
using TyperCore.Attributes;
using TyperCore.Attributes.Mvc;
using TyperCore.Extensions;
using Chamada.Domain.Abstractions.Repositories;

namespace Chamada.Services.Api.Controllers
{
   [Route("api")]
   public class GenericController : ControllerBase
   {
      private readonly IGenericRepositoryRead repositoryRead;
      private readonly IGenericDomainService service;
      //private readonly IUnitOfWork uoW;

      public GenericController(
          IGenericRepositoryRead repositoryRead,
          IGenericDomainService service
          /*IUnitOfWork uoW*/)
          : base()
      {
         this.repositoryRead = repositoryRead;
         this.service = service;
         //this.uoW = uoW;
      }

      [HttpGet("")]
      public IActionResult Index()
      {
         return Ok("api inicializada");
      }

      [HttpGet("{objectName}")]
      public IActionResult Get(string objectName)
      {
         ModelState.Clear();

         if (!Typer.TrySetCurrentTyper(objectName))
            return BadRequest();

         var entidades = repositoryRead.GetAll(Typer.GetObjectReference());

         if (entidades == null)
            return ResponseApi(null);

         var tipoModel = Typer.GetRefTyper("ViewModel", TyperAction.GetAll);

         if (tipoModel == null)
            return ResponseApi(entidades);

         var models = Mapper.Map(entidades, entidades.GetType(), typeof(IEnumerable<>).MakeGenericType(tipoModel));
         return ResponseApi(models);
      }

      [ObjectNameFilter("turma")]
      [HttpGet("{objectName}/{id}")]
      public IActionResult Get(string objectName, string id)
      {
         ModelState.Clear();

         if (!Typer.TrySetCurrentTyper(objectName))
            return BadRequest();

         var tipoModel = Typer.GetRefTyper("ViewModel", TyperAction.GetSingle);

         var entidade = repositoryRead.GetSingle(id, Typer.GetObjectReference() as IDefaultModel);

         if (tipoModel == null)
            return ResponseApi(entidade);

         if (entidade == null)
            return NotFound(id);

         var model = Mapper.Map(entidade, entidade.GetType(), tipoModel);
         return ResponseApi(model);
      }

      [HttpPost("{objectName}")]
      public IActionResult Post(string objectName, [FromBody] object value)
      {
         ModelState.Clear();

         if (!Typer.TrySetCurrentTyper(objectName))
            return BadRequest();

         var tipoModel = Typer.GetRefTyper("ViewModel", TyperAction.Insert);

         if (tipoModel == null)
            return NotFound();

         var stringJsonObject = JsonConvert.SerializeObject(value);
         var model = JsonConvert.DeserializeObject(stringJsonObject, tipoModel);

         if (TryValidateModel(model))
         {
            var entity = Mapper.Map(model, tipoModel, Typer.CurrentTyper) as IDefaultModel;
            service.Add(entity);
            //uoW.SaveChanges();
         }

         return ResponseApi(model);
      }

      [HttpPost("{objectName}/lot")]
      public IActionResult PostLot(string objectName, [FromBody] object value)
      {
         ModelState.Clear();

         if (!Typer.TrySetCurrentTyper(objectName))
            return BadRequest();

         var tipoModel = Typer.GetRefTyper("ViewModel", TyperAction.Insert);

         if (tipoModel == null)
            return NotFound();

         var models = BindModel(value, tipoModel) as IEnumerable<object>;

         foreach (var model in models)
         {
            if (!TryValidateModel(model))
               return ResponseApi(models);

            var entity = Typer.CurrentTyper.CreateInstance();
            Mapper.Map(model, entity, tipoModel, Typer.CurrentTyper);
            service.Add(entity as IDefaultModel);
         }

         //uoW.SaveChanges();
         return Ok(models);
      }

      [HttpPut("{objectName}/{id}")]
      public IActionResult Put(string objectName, string id, [FromBody] object value)
      {
         ModelState.Clear();

         if (!Typer.TrySetCurrentTyper(objectName))
            return BadRequest();

         var tipoModel = Typer.GetRefTyper("ViewModel", TyperAction.Update);

         if (tipoModel == null)
            return NotFound();

         var model = BindModel(value, tipoModel);

         if (TryValidateModel(model))
         {
            var entity = repositoryRead.GetSingle(id, Typer.GetObjectReference() as IDefaultModel) as IDefaultModel;
            Mapper.Map(model, entity, tipoModel, Typer.CurrentTyper);
            service.Update(entity);
            //uoW.SaveChanges();
         }

         return ResponseApi(model);
      }

      [HttpPut("{objectName}/lot")]
      public IActionResult Put(string objectName, [FromBody] object value)
      {
         ModelState.Clear();

         if (!Typer.TrySetCurrentTyper(objectName))
            return BadRequest();

         var tipoModel = Typer.GetRefTyper("ViewModel", TyperAction.Update);

         if (tipoModel == null)
            return NotFound();

         var models = BindModel(value, tipoModel) as IEnumerable<object>;

         foreach (var model in models)
         {
            if (!TryValidateModel(model))
               return ResponseApi(models);

            var entity = repositoryRead.GetSingle((model as IDefaultModel).Id, Typer.GetObjectReference() as IDefaultModel) as IDefaultModel;
            Mapper.Map(model, entity, tipoModel, Typer.CurrentTyper);
            service.Update(entity);
            //uoW.SaveChanges();
         }

         return ResponseApi(models);
      }

      [HttpDelete("{objectName}/{id}")]
      public IActionResult Delete(string objectName, string id)
      {
         ModelState.Clear();

         if (!Typer.TrySetCurrentTyper(objectName))
            return BadRequest();

         service.Delete(id);
         //uoW.SaveChanges();
         return ResponseApi(id);
      }
   }
}
