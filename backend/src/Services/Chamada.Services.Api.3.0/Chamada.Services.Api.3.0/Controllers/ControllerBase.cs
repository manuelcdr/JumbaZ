using Chamada.Services.Api30.Extensions;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Primitives;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Dynamic;

namespace Chamada.Services.Api30.Controllers
{
  public abstract class ControllerBase : Controller
    {
        protected object BindModel(IFormCollection form, Type type)
        {
            var obj = new ExpandoObject();

            foreach (var key in form.Keys)
            {
                StringValues value;
                form.TryGetValue(key, out value);
                obj.TryAdd(key, value.ToString());
            }

            var stringJsonObject = JsonConvert.SerializeObject(obj);
            var model = JsonConvert.DeserializeObject(stringJsonObject, type);

            return model;
        }

        protected object BindModel(object obj, Type type)
        {
            var stringJsonObject = JsonConvert.SerializeObject(obj);
            var model = JsonConvert.DeserializeObject(stringJsonObject, type);

            return model;
        }

        protected IEnumerable<object> BindListModel(object obj, Type type)
        {
            var stringJsonObject = JsonConvert.SerializeObject(obj);
            var objs = JsonConvert.DeserializeObject(stringJsonObject, typeof(List<object>)) as List<object>;

            var models = new List<object>();
            foreach(var obj2 in objs)
            {
                var model = BindModel(obj2, type);
                models.Add(model);
            }

            return models;
        }

        protected IActionResult ResponseApi(object obj = null)
        {
            if (!ModelState.IsValid)
                return Fail(obj);

            return Success(obj);
        }

        protected IActionResult Success(object obj = null)
        {
            var objectReturn = new
            {
                success = true,
                data = obj
            };

            return Ok(objectReturn);
        }

        protected IActionResult Fail(object obj = null)
        {

            var objectReturn = new
            {
                success = false,
                fail = true,
                errors = ModelState.GetErrors(),
                data = obj
            };

            return Ok(objectReturn);
        }

    }
}
