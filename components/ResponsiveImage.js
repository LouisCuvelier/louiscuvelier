import Image from "next/image";

export default function ResponsiveImage(props) {
  return (
    <Image
      {...props}
      className={"border-offset-2 border-2 border-slate-700 rounded"}
    />
  );
}
