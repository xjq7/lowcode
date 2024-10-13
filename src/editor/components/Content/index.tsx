import React from "react";
import { Component, useCmpsStore } from "../../store/components";
import { useCmpConfigStore } from "../../store/component-config";

export default function Content() {
  const { components } = useCmpsStore();
  const { componentConfig } = useCmpConfigStore();
  const handleMouseOver = () => {};
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

  return (
    <div onMouseOver={handleMouseOver}>
      {/* <pre>{JSON.stringify(components, null, 2)}</pre> */}
      {renderComponent(components)}
    </div>
  );
}
