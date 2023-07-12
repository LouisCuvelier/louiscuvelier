import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import Image from "next/image";
import rehypeFigure from "rehype-figure";
import rehypeImgSize from "rehype-img-size";
import Link from "next/link";

const postsDirectory = path.join(process.cwd(), "data/blog");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/(\.md|\.mdx)$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.publicationDate < b.publicationDate) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/(\.md|\.mdx)$/, ""),
      },
    };
  });
}

export async function getPostData(id) {
  const ResponsiveImage = (props) => (
    <Image
      {...props}
      className={"border-offset-2 border-2 border-slate-700 rounded"}
    />
  );

  const Text = (props) => (
    <p className={"body body-2 mt-9"}>{props.children}</p>
  );

  const Heading = {
    H2: (props) => <h2 className={"title title-3 mt-10"}>{props.children}</h2>,
    H3: (props) => <h3 className={"title title-4 mt-10"}>{props.children}</h3>,
    H4: (props) => <h4 className={"title title-5 mt-10"}>{props.children}</h4>,
    H5: (props) => (
      <h5 className={"title title-5-light mt-10"}>{props.children}</h5>
    ),
  };

  const List = {
    UL: (props) => (
      <ul className={"list-ul body body-2 mt-5 space-y-5"}>{props.children}</ul>
    ),
    OL: (props) => (
      <ul className={"list-ol body body-2 space-y-5 mt-5"}>{props.children}</ul>
    ),
  };

  const Figure = {
    Core: (props) => (
      <figure
        className={
          "bg-hatch rounded-[76%_24%_68%_32%_/_29%_67%_33%_71%] p-5 mt-5 -m-5"
        }
      >
        {props.children}
      </figure>
    ),
    Caption: (props) => (
      <figcaption className={"caption caption-2 text-center mt-3"}>
        {props.children}
      </figcaption>
    ),
  };

  const CustomLink = (props) => {
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
  };

  const components = {
    img: ResponsiveImage,
    figure: Figure.Core,
    figcaption: Figure.Caption,
    p: Text,
    h2: Heading.H2,
    h3: Heading.H3,
    h4: Heading.H4,
    h5: Heading.H5,
    a: CustomLink,
    ul: List.UL,
    ol: List.OL,
  };

  const fullPath = path.join(postsDirectory, `${id}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return await compileMDX({
    source: fileContents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          [rehypeImgSize, { dir: "public" }],
          [rehypeFigure, { className: "my-5" }],
        ],
      },
    },
    components: components,
  });
}
