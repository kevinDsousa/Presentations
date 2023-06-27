import { Input } from './Input';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Input> = {
    title: 'Components/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {},
}

export default meta;
type Story = StoryObj<typeof Input>;

export const Input_Text: Story = {
    args: {
       type: 'text',
       id: 'textoInput',
       name: 'nameInput',
       placeholder: 'Escreva aqui',
    }
}

export const Input_Email: Story = {
    args: {
       type: 'email',
       id: 'textoInput',
       name: 'nameInput',
       placeholder: 'email',
    }
}

export const Input_Password: Story = {
    args: {
       type: 'password',
       id: 'textoInput',
       name: 'nameInput',
       placeholder: 'password',
    }
}

export const Input_Telefone: Story = {
    args: {
       type: 'tel',
       id: 'textoInput',
       name: 'nameInput',
       placeholder: 'Seu telefone',
    }
}

export const Input_Time: Story = {
    args: {
       type: 'time',
       id: 'textoInput',
       name: 'nameInput',
    }
}

export const Input_URL: Story = {
    args: {
       type: 'url',
       id: 'textoInput',
       name: 'nameInput',
    }
}

export const Input_Color: Story = {
    args: {
       type: 'color',
       id: 'textoInput',
       name: 'nameInput',
    }
}

export const Input_Number: Story = {
    args: {
       type: 'number',
       id: 'textoInput',
       name: 'nameInput',
       placeholder: 'Digite um número',
    }
}

export const Input_Radio: Story = {
    args: {
       type: 'radio',
       id: 'textoInput',
       name: 'nameInput',
    }
}