import { PropsWithChildren } from "react";
import useMaterialDrop from "../../hooks/useMaterialDrop";

type Props = {
  id: string;
};

export default function Container(props: PropsWithChildren<Props>) {
  const { id, children } = props;

  const { canDrop, drop } = useMaterialDrop(["Button", "Container"], id);

  return (
    <div
      data-component-id={id}
      ref={drop}
      className={`p-[5px] min-h-[100px] ${
        canDrop ? "border-[2px] border-[blue]" : "border-[1px] border-[#000]"
      }`}
    >
      {children}
    </div>
  );
}
