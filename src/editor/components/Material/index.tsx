import { useMemo } from "react";
import { useCmpConfigStore } from "../../store/component-config";

export default function Material() {
  const { componentConfig } = useCmpConfigStore();

  const components = useMemo(
    () => Object.values(componentConfig),
    [componentConfig]
  );

  return (
    <div>
      {components.map((item) => {
        return (
          <div
            className="
              border-dashed
              border-[1px]
              border-[#000] 
              m-[10px] 
              bg-white 
              cursor-move 
              inline-block 
              py-[8px] px-[10px]
              hover:bg-[#ccc]"
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
}
