import { PropsWithChildren } from 'react';

type Props = object;

export default function Container(props: PropsWithChildren<Props>) {
  const { children } = props;
  return (
    <div className="border-[1px] border-[#000] min-h-[100px]">{children}</div>
  );
}
