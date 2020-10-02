using Chamada.Services.Api30.Data;
using Chamada.Services.Api30.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Chamada.Services.Api30.Controllers
{
    [ApiController]
    [Route("api/students")]
    public class StudentController : ControllerBase
    {
        private readonly DataContext context;

        public StudentController(DataContext context)
        {
            this.context = context;
        }

        [HttpGet("")]
        public IActionResult Get()
        {
            return Ok(context.Students.AsNoTracking());
        }

        [HttpGet("{id}")]
        public IActionResult Get(Guid id)
        {
            var result = context.Students
                .AsNoTracking()
                .Where(x => x.Id == id).FirstOrDefault();

            if (result == null)
                return NotFound(id);

            return Ok(result);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Student model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            context.Add(model);
            context.SaveChanges();

            return Ok(model);
        }

        [HttpPut]
        public IActionResult Put([FromBody] Student model)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            context.Update(model);
            context.SaveChanges();

            return Ok(model);
        }
    }
}
