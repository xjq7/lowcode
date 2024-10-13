import { PropsWithChildren } from "react";
import useMaterialDrop from "../../hooks/useMaterialDrop";

interface CommonCmpProps extends PropsWithChildren {
  id: string;
}

export default function Page(props: CommonCmpProps) {
  const { id, children } = props;

  const { canDrop, drop } = useMaterialDrop(["Button", "Container"], id);

  return (
    <div
      ref={drop}
      className="p-[5px] h-[100vh] box-border"
      style={{ border: canDrop ? "2px solid blue" : "none" }}
    >
      {children}
    </div>
  );
}
