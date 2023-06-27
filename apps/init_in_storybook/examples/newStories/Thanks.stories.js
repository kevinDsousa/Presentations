import { Thanks } from "../../components/Thanks";
import azul from "../../images/azul.gif";
import vermelho from "../../images/vermelho.gif";
import preto from "../../images/preto.gif"

export default {
  title: "ReactCeará/Thanks",
  component: Thanks,
  tags: ["autodocs"],
  args: {
    abraao: "https://github.com/AbraaoAlves.png",
    gleidson:
      "https://upload.wikimedia.org/wikipedia/pt/a/a6/In_Space_Andros_1998.jpg",
    ronier: "https://github.com/ronierlima.png",
  },
};

export const Thanks_não_morfado = {
    args: {
      abraao: "https://github.com/AbraaoAlves.png",
      gleidson:"https://github.com/gleidsonteixeira.png",
      ronier: "https://github.com/ronierlima.png",
    },
  };

export const Thanks_morfado = {
  args: {
    abraao: preto,
    gleidson: vermelho,
    ronier: azul,
  },
};
