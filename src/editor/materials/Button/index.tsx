import { Button as AntdButton } from "antd";
import { ButtonType } from "antd/es/button";

interface Props {
  text?: string;
  id: string;
  styles: Record<string, object>;
  type: ButtonType;
}

export default function Button(props: Props) {
  const { id, text, type, styles = {} } = props;

  return (
    <AntdButton data-component-id={id} type={type} style={styles}>
      {text}
    </AntdButton>
  );
}
