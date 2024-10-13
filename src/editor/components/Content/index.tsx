import React, { useState } from "react";
import { Component, useCmpsStore } from "../../store/components";
import { useCmpConfigStore } from "../../store/component-config";

export default function Content() {
  const { components } = useCmpsStore();
  const { componentConfig } = useCmpConfigStore();

  const [hoverComponentId, setHoverComponentId] = useState<string>();
  console.log(components);

  const renderComponent = (cmps: Component[]): React.ReactNode => {
    return cmps.map((cmp: Component) => {
      const config = componentConfig[cmp.name] || {};

      if (!config.component) {
        return null;
      }

      return React.createElement(
        config.component,
        {
          ...config.defaultProps,
          ...cmp.props,
          id: cmp.id,
          key: cmp.id,
        },
        renderComponent(cmp.children || [])
      );
    });
  };

  const handleMouseOver = (e) => {
    const path = e.nativeEvent.composedPath();

    for (let i = 0; i < path.length; i++) {
      const ele = path[i] as HTMLElement;

      if (ele.dataset) {
        const componentId = ele.dataset.componentId;

        if (componentId) {
          setHoverComponentId(componentId);
          return;
        }
      }
    }
  };

  return (
    <div onMouseOver={handleMouseOver}>
      {hoverComponentId}
      {/* <pre>{JSON.stringify(components, null, 2)}</pre> */}
      {renderComponent(components)}
    </div>
  );
}
