using MongoDB.Bson;

namespace Chamada.Domain.Abstractions.Entities
{
   public interface IValueObject { }

   public interface IEntity { }

   public interface IModel { }

   public interface IType
   {
      string Description { get; set; }
   }

   public interface IId
   {
      string Id { get; set; }
   }

   public interface IDeactivated
   {
      bool Active { get; set; }

      void Deactivate();

      void Activate();
   }

   public interface IRelashionshipModel { }

   public interface IDefaultModel : IModel, IId
   {
      void SetId(string id);
   }

}
