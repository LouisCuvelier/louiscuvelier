import ExportedImage from "next-image-export-optimizer";

export default function ResponsiveImage(props) {
  return (
    <ExportedImage
      {...props}
      className={"border-offset-2 mx-auto border-2 border-slate-700 rounded"}
    />
  );
}
