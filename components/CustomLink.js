import Link from "next/link";

export default function CustomLink(props) {
  const isInternalLink =
    props.href && (props.href.startsWith("/") || props.href.startsWith("#"));

  return (
    <Link
      {...props}
      className={"link link-primary"}
      {...(!isInternalLink
        ? { target: "_blank", rel: "noopener noreferrer" }
        : "")}
    >
      {props.children}
    </Link>
  );
}
