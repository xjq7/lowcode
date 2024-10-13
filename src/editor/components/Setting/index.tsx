import { useCmpsStore } from "../../store/components";

export default function Setting() {
  const { components } = useCmpsStore();
  return (
    <div>
      <pre>{JSON.stringify(components, null, 2)}</pre>
    </div>
  );
}
