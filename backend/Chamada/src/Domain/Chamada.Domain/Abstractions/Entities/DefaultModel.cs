using System;

namespace Chamada.Domain.Abstractions.Entities
{
  public abstract class DefaultModel : IDefaultModel
  {
    protected DefaultModel() { }

    protected DefaultModel(string id)
    {
      Id = id;
    }

    public void SetId(string id)
    {
      Id = id;
    }

    public string Id { get; set; }

    public override bool Equals(object obj)
    {
      var compareTo = obj as DefaultModel;

      if (ReferenceEquals(this, compareTo)) return true;
      if (ReferenceEquals(null, compareTo)) return false;

      return Id.Equals(compareTo.Id);
    }

    public override int GetHashCode()
    {
      return (GetType().GetHashCode() * 907) + Id.GetHashCode();
    }

    public static bool operator ==(DefaultModel a, DefaultModel b)
    {
      if (ReferenceEquals(a, null) && ReferenceEquals(b, null))
        return true;

      if (ReferenceEquals(a, null) || ReferenceEquals(b, null))
        return false;

      return a.Equals(b);
    }

    public static bool operator !=(DefaultModel a, DefaultModel b)
    {
      return !(a == b);
    }
  }


  public abstract class DefaultDeactivatedModel : DefaultModel, IDeactivated
  {
    public DefaultDeactivatedModel() : base() { }

    public DefaultDeactivatedModel(string id) : base(id) { }

    public bool Active { get; set; }

    public void Activate()
    {
      Active = true;
    }

    public void Deactivate()
    {
      Active = false;
    }
  }
}
