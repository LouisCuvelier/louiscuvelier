import getBase64 from "../utils/getBase64";
import AnimatedImage from "./AnimatedImage";

export default async function ResponsiveImage(props) {
  const base64 = await getBase64(props.src);

  return <AnimatedImage {...props} base64={base64} />;
}
