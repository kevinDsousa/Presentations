import { Kevin } from "../../components/Kevin";
import kevincode from "../../images/kevincode.png"

export default {
  title: "ReactCeará/Kevin",
  component: Kevin,
  tags: ["autodocs"],
  args: {
    circle: true,
  },
};

export const Kevin_ex01 = {
  args: {
    size: 200,
    circle: true,
    qrCode: kevincode,
    sizeQrCode: 200,
  },
};
