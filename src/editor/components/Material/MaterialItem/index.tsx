import { useDrag } from "react-dnd";

interface Props {
  name: string;
}

export default function MaterialItem(props: Props) {
  const { name } = props;

  const [, drag] = useDrag({
    type: name,
    item: {
      type: name,
    },
  });

  return (
    <div
      ref={drag}
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
      {name}
    </div>
  );
}
