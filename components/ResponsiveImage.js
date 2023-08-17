import ExportedImage from "next-image-export-optimizer";

export default function ResponsiveImage(props) {
  return (
    <ExportedImage
      {...props}
      placeholder="blur"
      className={"border-offset-2 border-2 border-slate-700 rounded"}
    />
  );
}
