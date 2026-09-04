// src/components/ui/Popover/Popover.jsx

import { createContext, useContext, useState } from "react";

const PopoverContext = createContext();

export const usePopover = () => useContext(PopoverContext);

const Popover = ({
  children,
  open: controlledOpen,
  onOpenChange,
}) => {
  const [internalOpen, setInternalOpen] = useState(false);

  const open =
    controlledOpen !== undefined
      ? controlledOpen
      : internalOpen;

  const setOpen = onOpenChange || setInternalOpen;

  return (
    <PopoverContext.Provider
      value={{
        open,
        setOpen,
      }}
    >
      <div className="relative">
        {children}
      </div>
    </PopoverContext.Provider>
  );
};

export default Popover;