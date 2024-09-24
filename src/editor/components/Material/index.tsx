import { useMemo } from "react";
import { useCmpConfigStore } from "../../store/component-config";
import MaterialItem from "./MaterialItem";

export default function Material() {
  const { componentConfig } = useCmpConfigStore();

  const components = useMemo(
    () => Object.values(componentConfig),
    [componentConfig]
  );

  return (
    <div>
      {components.map((item) => {
        return <MaterialItem name={item.name} />;
      })}
    </div>
  );
}
