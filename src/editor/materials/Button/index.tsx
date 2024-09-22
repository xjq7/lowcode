import { Button as AntdButton } from 'antd';
import { useDrag } from 'react-dnd';
import { ButtonType } from 'antd/es/button';

interface Props {
  text?: string;
  id: string;
  styles: Record<string, object>;
  type: ButtonType;
}

export default function Button(props: Props) {
  const { id, text, type, styles = {} } = props;
  console.log(props);

  const [, drag] = useDrag({
    type: 'Button',
    item: {
      type: 'Button',
      dragType: 'move',
      id,
    },
  });

  return (
    <AntdButton ref={drag} data-component-id={id} type={type} style={styles}>
      {text}
    </AntdButton>
  );
}
