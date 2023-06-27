import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

export const Type_button = {
  args: {
    texto: 'Type Button',
    type: 'button',
    size: 'small',
    onClick: () => alert("teste com botão do tipo Button")
  },
};

export const Type_submit = {
  args: {
    texto: 'Type Submit',
    type: 'submit',
    size: 'medium',
    onClick: () => alert("teste com botão do tipo Submit")
  },
};

export const Type_reset = {
  args: {
    texto: 'Type Reset',
    type: 'reset',
    size: 'large',
    onClick: () => alert("teste com botão do tipo Reset")
  },
};
