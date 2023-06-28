import { QRcode } from "../../components/QRcode";
import myStory from "../../images/myStory.png";
import StoryDocs from "../../images/StoryDocs.png";

export default {
  title: "ReactCeará/QRcode",
  component: QRcode,
  tags: ["autodocs"],
  args: {
    circle: true,
  },
};

export const QR_Docs = {
  args: {
    src: StoryDocs,
    height: 200,
    width: 200,
    border: '#FF4785'
  },
};

export const myStorybook = {
    args: {
      src: myStory,
      height: 200,
      width: 200,
      border: '#07B3D4'
    },
  };
