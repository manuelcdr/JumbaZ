namespace TyperCore.Attributes.Mvc
{
    public class ObjectNameFilterAttribute : ArgumentFilterAttribute
    {
        public ObjectNameFilterAttribute(params string[] objectNames) 
            : base("objectName", objectNames)
        {
        }
    }
}
