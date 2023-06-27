import { Profile } from "../../components/Profile";
import cicero from "../../images/cicero.png";
import meme2 from "../../images/meme2.gif"

export default {
  title: "ReactCeará/Profile",
  component: Profile,
  tags: ["autodocs"],
  args: {
    circle: true,
  },
};

/**
 * Renderizando fotos de perfil
 */
export const Profile_ex01 = {
  args: {
    src: "https://github.com/mikaelmonteirodev.png",
    circle: true,
    height: 200,
    width: 200,
  },
};

export const Profile_ex02 = {
  args: {
    src: "https://github.com/joellacerda.png",
    height: 200,
    width: 200,
  },
};

/**
 * Renderizando imagens simples
 */

export const Profile_ex03 = {
  args: {
    src: cicero,
    height: 600,
    width: 400,
    circle: false,
  },
};


/**
 * Renderizando arquivos gif
 */
export const Profile_ex04 = {
  args: {
    src: meme2,
    height: 200,
    width: 400,
    circle: false,
  },
};
