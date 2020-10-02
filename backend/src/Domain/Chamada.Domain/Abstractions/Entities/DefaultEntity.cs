using System;

namespace Chamada.Domain.Abstractions.Entities
{
  public abstract class DefaultEntity : DefaultModel, IDefaultEntity
  {
    protected DefaultEntity() : base() { }

    protected DefaultEntity(string id) : base(id) { }

  }

  //public abstract class DefaultEntity<T> : DefaultEntity<T, Guid>, IDefaultEntity  where T : class
  //{
  //  protected DefaultEntity()
  //  : base(Guid.NewGuid())
  //  //: base(SequentialGuidGenerator.Generate())
  //  {
  //  }

  //  public DefaultEntity(Guid id)
  //      : base(id)
  //  {
  //  }
  //}
}
