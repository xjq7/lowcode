import { PropsWithChildren } from "react";
import { useDrop } from "react-dnd";

export default function Page(props: PropsWithChildren) {
  const { children } = props;

  const [{ canDrop }, drop] = useDrop(() => ({
    accept: ["Button", "Container"],
    drop(item) {
      console.log(item);
    },
    collect(monitor) {
      return {
        canDrop: monitor.canDrop(),
      };
    },
  }));

  return (
    <div ref={drop} style={{ border: canDrop ? "2px solid blue" : "none" }}>
      {children}
    </div>
  );
}
