using System;
using System.Collections.Generic;
using System.Security.Claims;

namespace Chamada.Domain.Abstractions.Entities
{
    public interface IUser
    {
        Guid Id { get; }
        string Name { get; }
        string Email { get; }
        Guid GetUserId();
        bool IsAuthenticated();
        IEnumerable<Claim> GetClaims();
    }
}
