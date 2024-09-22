import { create } from 'zustand';

export interface Component {
  id: string;
  name: string;
  desc: string;
  props: Record<string, any>;
  children?: Component[];
  pid?: string;
}

interface State {
  components: Component[];
}

interface Action {
  addCmp: (cmp: Component, pid?: string) => void;
  delCmp: (cmpId: string) => void;
  updateCmpProps: (cmpId: string, props: Record<string, object>) => void;
}

export const useCmpsStore = create<State & Action>((set, get) => ({
  components: [{ id: '1', name: 'page', props: {}, desc: '页面' }],
  addCmp(cmp, pid) {
    return set((state) => {
      if (pid) {
        const parentCmp = getCmpById(pid, state.components);
        if (parentCmp) {
          if (parentCmp.children) {
            parentCmp.children.push(cmp);
          } else {
            parentCmp.children = [cmp];
          }
        }

        cmp.pid = pid;
        return { components: [...state.components] };
      }

      return { components: [...state.components, cmp] };
    });
  },
  delCmp(cmpId) {
    if (!cmpId) return;

    const { components } = get();
    const cmp = getCmpById(cmpId, components);

    if (cmp && cmp.pid) {
      const parentCmp = getCmpById(cmp.pid, components);

      if (parentCmp) {
        parentCmp.children = parentCmp.children?.filter(
          (item) => item.id !== cmpId
        );

        set({ components: [...components] });
      }
    }
  },
  updateCmpProps(cmpId, props) {
    set((state) => {
      const cmp = getCmpById(cmpId, state.components);

      if (cmp) {
        cmp.props = { ...cmp.props, ...props };
      }

      return { components: [...state.components] };
    });
  },
}));

export function getCmpById(
  id: string | null,
  cmps: Component[]
): Component | null {
  if (!id) {
    return null;
  }

  for (const cmp of cmps) {
    if (cmp.id === id) return cmp;
    if (cmp.children && cmp.children.length) {
      const res = getCmpById(id, cmp.children);
      if (res) return res;
    }
  }
  return null;
}
