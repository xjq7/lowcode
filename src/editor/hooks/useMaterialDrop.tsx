import { useDrop } from "react-dnd";
import { useCmpConfigStore } from "../store/component-config";
import { useCmpsStore } from "../store/components";
import { nanoid } from "nanoid";

export interface ItemType {
  type: string;
  dragType?: "move" | "add";
  id: string;
}

export default function useMaterialDrop(accept: string[], id: string) {
  const { componentConfig } = useCmpConfigStore();
  const { addCmp } = useCmpsStore();

  const [{ canDrop }, drop] = useDrop(() => ({
    accept,
    drop(item: ItemType, monitor) {
      const didDrop = monitor.didDrop();
      if (didDrop) {
        return;
      }

      const props = componentConfig[item.type].defaultProps;
      addCmp(
        {
          id: nanoid(),
          name: item.type,
          props,
        },
        id
      );
    },
    collect(monitor) {
      return {
        canDrop: monitor.canDrop(),
      };
    },
  }));

  return { canDrop, drop };
}
