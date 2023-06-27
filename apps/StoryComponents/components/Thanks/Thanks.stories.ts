import { Thanks } from "./Thanks";

export default {
    title: 'Talks/Thanks',
    component: Thanks,
    tags: ['autodocs'],
    argTypes: {},
}

export const Thanks_abraao = {
    args: {
        ProfileValues: {
            src: "https://github.com/AbraaoAlves.png",
            size: 60,
            circle: true,
            text: "Abraão Alves"
        },
        TitlesProps: {
            sizeTitle: 30,
            textTitle: "Ex dono do bigode de respeito"
        }
    }
}

export const Thanks_Gleidson = {
    args: {
        ProfileValues: {
            src: "https://github.com/gleidsonteixeira.png",
            size: 60,
            circle: true,
            text: "Gleidson Teixeira"
        },
        TitlesProps: {
            sizeTitle: 30,
            textTitle: "Ranger vermelho nas horas vagas"
        }
    }
}

export const Thanks_Ronier = {
    args: {
        ProfileValues: {
            src: "https://github.com/ronierlima.png",
            size: 60,
            circle: true,
            text: "Ronier Lima"
        },
        TitlesProps: {
            sizeTitle: 30,
            textTitle: "Carreirinha Carreirinha Carreirinha"
        }
    }
}