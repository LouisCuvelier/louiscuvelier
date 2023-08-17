import Image from "next/image";

export default function ResponsiveImage(props) {
  return (
    <Image
      {...props}
      placeholder="blur"
      className={"border-offset-2 border-2 border-slate-700 rounded"}
    />
  );
}
