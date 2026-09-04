// src/components/ui/Popover/PopoverTrigger.jsx

import { usePopover } from "./Popover";

const PopoverTrigger = ({ children }) => {
  const { setOpen } = usePopover();

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {children}
    </div>
  );
};

export default PopoverTrigger;