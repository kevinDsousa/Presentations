import { FrameVideo } from "./FrameVideo";
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FrameVideo> = {
    title: 'Talks/FrameVideo',
    component: FrameVideo,
    tags: ['autodocs'],
    argTypes: {},
}

export default meta;
type Story = StoryObj<typeof FrameVideo>;

export const React_Documentary: Story = {
    args: {
        src: "https://www.youtube.com/embed/8pDqJVdNa44",
        title: "React.js The documentary",
        width: 300,
        height: 200,
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    }
}

export const Vue_Documentary: Story = {
    args: {
        src: "https://www.youtube.com/embed/OrxmtDw4pVI",
        title: "Vue.js: The Documentary",
        width: 300,
        height: 200,
    }
}

export const GraphQL_Documentary: Story = {
    args: {
        src: "https://www.youtube.com/embed/783ccP__No8",
        title: "GraphQL: The Documentary",
        width: 300,
        height: 200,
    }
}

