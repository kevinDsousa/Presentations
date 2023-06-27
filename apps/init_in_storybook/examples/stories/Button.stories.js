import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
    onClick: () => alert("teste com botão do tipo Button")
  },
};

export const Secondary = {
  args: {
    label: 'Button',
    onClick: () => alert("teste com botão do tipo Button")
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
    onClick: () => alert("teste com botão do tipo Button")
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
    onClick: () => alert("teste com botão do tipo Button")
  },
};
