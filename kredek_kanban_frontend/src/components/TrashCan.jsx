import { useState } from "react";
import { PiTrashFill } from "react-icons/pi";
import { RiFileShredLine } from "react-icons/ri";

function TrashCan({ setCards }) {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl
        ${
          active
            ? "border-red-800 bg-red-800/20 text-red-500"
            : "border-neutral-500 bg-neutral-500/20 text-neutral-500"
        }`}
    >
      {active ? <RiFileShredLine /> : <PiTrashFill />}
    </div>
  );
}
export default TrashCan;
