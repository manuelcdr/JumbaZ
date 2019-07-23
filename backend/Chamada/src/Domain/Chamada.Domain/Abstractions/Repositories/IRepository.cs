namespace Chamada.Abstractions.Repositories
{
  public interface IRepositoryFull<T> : IRepositoryRead<T>, IRepositoryWrite<T>
    {
    }
}
