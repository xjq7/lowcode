import React, { useEffect } from "react";
import { nanoid } from "nanoid";
import { Component, useCmpsStore } from "../../store/components";
import { useCmpConfigStore } from "../../store/component-config";

export default function Content() {
  const { components, addCmp } = useCmpsStore();
  const { componentConfig } = useCmpConfigStore();
  const handleMouseOver = () => {};

  useEffect(() => {
    const id1 = nanoid();
    const id2 = nanoid();
    addCmp({ id: id1, name: "Page", desc: "", props: {} });
    addCmp({ id: id2, name: "Button", desc: "", props: { text: "111" } }, id1);
  }, []);

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
