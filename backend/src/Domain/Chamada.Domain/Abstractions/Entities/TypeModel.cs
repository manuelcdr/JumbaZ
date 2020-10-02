using System;

namespace Chamada.Domain.Abstractions.Entities
{
  public abstract class TypeModel : DefaultModel, IType
    {
        protected TypeModel() { }

        public TypeModel(string id, string descricao)
        {
            Id = id;
            Description = descricao;
        }

        public string Description { get; set; }
    }

    public abstract class DeactivatedTypeModel : TypeModel, IType, IDeactivated
    {
        protected DeactivatedTypeModel() { }

        public DeactivatedTypeModel(string id, string descricao, bool ativo = true)
            :base(id, descricao)
        {
            Id = id;
            Description = descricao;
            Active = ativo;
        }

        public bool Active { get; protected set; }

        public void Activate()
        {
            Active = true;
        }

        public void Deactivate()
        {
            Active = false;
        }
    }

    //public abstract class TypeEntity<T> : TypeEntity<T, Guid> where T : class
    //{
    //    public TypeEntity(){ }

    //    public TypeEntity(Guid id, string descricao)
    //        :base(id, descricao) { }
    //}

    //public abstract class TipoDesativavelEntity<T> : TipoDesativavelEntity<T, Guid> where T : class
    //{
    //    public TipoDesativavelEntity() { }

    //    public TipoDesativavelEntity(Guid id, string descricao, bool ativo = true)
    //        : base(id, descricao, ativo) { }
    //}
}
