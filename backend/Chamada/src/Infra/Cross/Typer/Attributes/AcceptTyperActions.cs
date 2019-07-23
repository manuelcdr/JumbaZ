using System;

namespace TyperCore.Attributes
{
    public class AcceptTyperActionsAttribute : Attribute
    {
        public TyperAction Actions { get; private set; }

        public AcceptTyperActionsAttribute(bool none = false)
        {
            if (none)
            {
                Actions |= TyperAction.None;
            }
            else
            {
                foreach (var action in Enum.GetValues(typeof(TyperAction)))
                {
                    if (action.Equals(TyperAction.None))
                        continue;

                    Actions |= (TyperAction)action;
                }
            }
        }

        public AcceptTyperActionsAttribute(params TyperAction[] actions)
        {
            foreach (var action in actions)
            {
                Actions |= action;
            }
        }
    }

    [Flags]
    public enum TyperAction
    {
        None        = 0,
        GetSingle   = 1 << 0,
        GetAll      = 1 << 1,
        Insert      = 1 << 2,
        Update      = 1 << 3,
        Delete      = 1 << 4,
        Activate    = 1 << 5,
        Deactivate  = 1 << 6,
        GetActives  = 1 << 7
    }
}
