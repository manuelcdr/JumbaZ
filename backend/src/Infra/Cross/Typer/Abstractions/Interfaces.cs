namespace TyperCore.Abstractions
{
    public interface ITyperEntity { }
    public interface ITyperRef { }
    public interface ITyperRef<TEntity> : ITyperRef where TEntity : ITyperEntity { }
    public interface ITyperEntity<TEntity> : ITyperEntity where TEntity : class { }
}
