using AutoMapper;
using Chamada.Domain.Abstractions.Entities;
using Chamada.Abstractions.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using TyperCore;
using TyperCore.Attributes;
using TyperCore.Attributes.Mvc;
using TyperCore.Extensions;
using Chamada.Domain.Abstractions.Repositories;
using System.Text.Json;
using Newtonsoft.Json;
using System.Linq;
using Chamada.Domain.Services;
using Chamada.Services.Api30.Data;
using System;

namespace Chamada.Services.Api30.Controllers
{
    [ApiController]
    [Route("api/v2")]
    public class GenericControllerV2 : ControllerBase
    {

        [HttpGet("")]
        public IActionResult Index()
        {
            return Ok("api inicializada");
        }

        [HttpGet("{objectName}")]
        public IActionResult Get(string objectName, [FromServices] SqlServerGenericRepository repository, [FromServices] Typer typer)
        {
            ModelState.Clear();

            if (!typer.TrySetCurrentTyper(objectName))
                return BadRequest();

            var entidades = repository.GetAll();

            if (entidades == null)
                return ResponseApi(null);

            return ResponseApi(entidades);
        }

        [ObjectNameFilter("turma")]
        [HttpGet("{objectName}/{id}")]
        public IActionResult Get(string objectName, Guid id, [FromServices] SqlServerGenericRepository repository, [FromServices] Typer typer)
        {
            ModelState.Clear();

            if (!typer.TrySetCurrentTyper(objectName))
                return BadRequest();

            var model = repository.GetSingle(id);

            if (model == null)
                return NotFound(id);

            return ResponseApi(model);
        }

        [HttpPost("{objectName}")]
        public IActionResult Post(string objectName, [FromBody] object jsonValues, [FromServices] SqlServerGenericRepository repository, [FromServices] Typer typer)
        {
            ModelState.Clear();

            if (!typer.TrySetCurrentTyper(objectName))
                return BadRequest();

            var stringJsonObject = JsonConvert.SerializeObject(jsonValues);
            var model = JsonConvert.DeserializeObject(stringJsonObject, typer.CurrentTyper);

            if (TryValidateModel(model))
            {
                repository.Add(model);
            }

            return ResponseApi(model);
        }

        [HttpPost("{objectName}/lot")]
        public IActionResult PostLot(string objectName, [FromBody] object value, [FromServices] SqlServerGenericRepository repository, [FromServices] Typer typer)
        {
            ModelState.Clear();

            if (!typer.TrySetCurrentTyper(objectName))
                return BadRequest();

            var models = BindListModel(value, typer.CurrentTyper);

            foreach (var model in models)
            {
                if (!TryValidateModel(model))
                    return ResponseApi(models);

                repository.Add(model);
            }

            return Ok(models);
        }

        [HttpPut("{objectName}/{id}")]
        public IActionResult Put(string objectName, string id, [FromBody] object value, [FromServices] SqlServerGenericRepository repository, [FromServices] Typer typer)
        {
            ModelState.Clear();

            if (!typer.TrySetCurrentTyper(objectName))
                return BadRequest();

            var model = BindModel(value, typer.CurrentTyper);

            if (TryValidateModel(model))
            {
                repository.Update(model);
            }

            return ResponseApi(model);
        }

        [HttpPut("{objectName}/lot")]
        public IActionResult Put(string objectName, [FromBody] object value, [FromServices] SqlServerGenericRepository repository, [FromServices] Typer typer)
        {
            ModelState.Clear();

            if (!typer.TrySetCurrentTyper(objectName))
                return BadRequest();

            var models = BindListModel(value, typer.CurrentTyper);

            foreach (var model in models)
            {
                if (!TryValidateModel(model))
                    return ResponseApi(models);

                repository.Update(model);
            }

            return ResponseApi(models);
        }

        [HttpDelete("{objectName}/{id}")]
        public IActionResult Delete(string objectName, Guid id, [FromServices] SqlServerGenericRepository repository, [FromServices] Typer typer)
        {
            if (!typer.TrySetCurrentTyper(objectName))
                return BadRequest();

            repository.Delete(id);

            return ResponseApi(id);
        }
    }
}
