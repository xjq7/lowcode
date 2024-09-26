import { useDrop } from "react-dnd";
import { useCmpConfigStore } from "../store/component-config";

export interface ItemType {
  type: string;
  dragType?: "move" | "add";
  id: string;
}

export default function useMaterialDrop(accept: string[], id: string) {
  const { componentConfig } = useCmpConfigStore();

  const [{}] = useDrop(() => ({
    accept,
    drop(item: ItemType, monitor) {
      const didDrop = monitor.didDrop();
      if (didDrop) {
        return;
      }

      if (item.dragType === "move") {
      }
    },
  }));

  return [can];
}
