import { Titles } from "./Titles";

export default {
    title: 'Talks/Titles',
    component: Titles,
    tags: ['autodocs'],
    argTypes: {},
}

export const Title = {
    args: {
        text: "O x do MDX",
        size: 20,
        color: "#262626"
    }
}