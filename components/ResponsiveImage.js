import Image from "next/image";
import getBase64 from "../lib/getBase64";

export default async function ResponsiveImage(props) {
  const base64 = await getBase64(props.src);

  return (
    <Image
      {...props}
      placeholder={"blur"}
      blurDataURL={base64}
      className={"border-offset-2 mx-auto border-2 border-slate-700 rounded"}
    />
  );
}
