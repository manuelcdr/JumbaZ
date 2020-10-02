namespace Chamada.Domain.Abstractions.Entities
{
  public abstract class DeactivatedModel : DefaultModel, IDeactivated
    {
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
}
