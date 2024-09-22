import { create } from 'zustand';
import Container from '../materials/Container';
import Button from '../materials/Button';

export interface ComponentConfig {
  name: string;
  defaultProps: Record<string, any>;
  component: any;
}

interface State {
  componentConfig: Record<string, ComponentConfig>;
}

interface Action {
  registerComponent: (name: string, componentConfig: ComponentConfig) => void;
}

export const useCmpConfigStore = create<State & Action>((set) => ({
  componentConfig: {
    Container: {
      name: 'Container',
      defaultProps: {},
      component: Container,
    },
    Button: {
      name: 'Button',
      defaultProps: {
        type: 'primary',
        text: '按钮',
      },
      component: Button,
    },
  },
  registerComponent(name, componentConfig) {
    return set((state) => {
      return {
        ...state,
        componentConfig: {
          ...state.componentConfig,
          [name]: componentConfig,
        },
      };
    });
  },
}));
