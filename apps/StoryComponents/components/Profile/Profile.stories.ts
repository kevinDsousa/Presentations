import { Profile } from './Profile';

export default {
    title: 'Talks/Profile',
    component: Profile,
    tags: ['autodocs'],
    argTypes: {},
}

/**
 * Aplicando todos os elementos possíveis
 */
export const Kevin_Profile = {
    args: {
        textProfile: "Kevin Diego",
        src: "https://github.com/kevinDsousa.png",
        size: 100,
        circle: true,
        qrCode: "https://raw.githubusercontent.com/kevinDsousa/Presentations/main/packages/mdx_apresentation/kevincode.png",
        sizeQrCode: 100,
        textQrCode: "Escanear para ganhar um amigo",
        listItens: ["Analista de redes FTTH", "Digital college", "Transição de carreira"]
    }
}

/**
 * Aplicando os argumentos sem o QRcode e sem borda arredondada
 */
export const Mikael_Profile = {
    args: {
        textProfile: "Mikael Monteiro",
        src: "https://github.com/mikaelmonteirodev.png",
        size: 150,
        listItens: ["Full stack developer", "Digital college", "Analista de sistemas da computação"]
    }
}

/**
 * Aplicando somente a imagem com bordas arrendondadas
 */
export const Deborah_Profile = {
    args: {
        textProfile: "Deborah Nascimento",
        src: "https://github.com/Deborahhm.png",
        size: 180,
        circle: true,
        listItens: ["Universidade Federal RN", "Digital college", "Full stack developer"]
    }
}

/**
 * Aplicando somente as imagens, sendo possível que a propriedade QRcode possa ser uma outra imagem
 */
export const Alana_Profile = {
    args: {
        textProfile: "Alana Filgueiras",
        src: "https://github.com/alanafilgueiras.png",
        size: 180,
        qrCode: "https://github.com/Digital-College-BR.png",
        sizeQrCode: 180,
    }
}

