import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeImgSize from "rehype-img-size";
import CustomLink from "../components/CustomLink";
import Heading from "../components/Heading";
import Figure from "../components/Figure";
import List from "../components/List";
import Text from "../components/Text";
import ResponsiveImage from "../components/ResponsiveImage";
import rehypeFigure from "rehype-figure";
import rehypeSanitize from "rehype-sanitize";
import rehypePrism from "rehype-prism-plus";
import readingTime from "reading-time";

function getDirectoryPath(directory) {
  return path.join(process.cwd(), `data/${directory}`);
}

export function getSortedPostsData(directory, direction = "asc") {
  // Get file names under /posts
  const fileNames = fs.readdirSync(getDirectoryPath(directory));
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/(\.md|\.mdx)$/, "");

    // Read markdown file as string
    const fullPath = path.join(getDirectoryPath(directory), fileName);
    const fileContent = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContent);

    // Combine the data with the id
    return {
      id,
      readingTime: readingTime(fileContent),
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (direction === "desc") {
      if (a.publicationDate > b.publicationDate) {
        return 1;
      } else {
        return -1;
      }
    } else {
      if (a.publicationDate < b.publicationDate) {
        return 1;
      } else {
        return -1;
      }
    }
  });
}

export function getPreviousAndNextPost(actualId, directory, direction = "asc") {
  const sortedPosts = getSortedPostsData(directory, direction);
  const index = sortedPosts.findIndex((post) => post.id === actualId);
  return {
    prev: { ...sortedPosts[index - 1] },
    next: { ...sortedPosts[index + 1] },
  };
}

export function getAllPostIds(directory) {
  const fileNames = fs.readdirSync(getDirectoryPath(directory));
  return fileNames.map((fileName) => ({
    id: fileName.replace(/(\.md|\.mdx)$/, ""),
  }));
}

export async function getPostData(id, directory) {
  const components = {
    img: ResponsiveImage,
    figure: Figure.Core,
    figcaption: Figure.Caption,
    p: Text,
    h2: Heading.H2,
    h3: Heading.H3,
    h4: Heading.H4,
    a: CustomLink,
    ul: List.UL,
    ol: List.OL,
  };

  const fullPath = fs.existsSync(`${getDirectoryPath(directory)}${id}.mdx`)
    ? path.join(getDirectoryPath(directory), `${id}.mdx`)
    : path.join(getDirectoryPath(directory), `${id}.md`);

  const fileContent = fs.readFileSync(fullPath, "utf8");

  const mdxContent = await compileMDX({
    source: fileContent,
    components: components,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [
          [rehypeSanitize],
          [rehypeImgSize, { dir: "public" }],
          [rehypeFigure, { className: "my-5" }],
          [rehypePrism, { showLineNumbers: true }],
        ],
      },
    },
  });

  return {
    readingTime: readingTime(fileContent),
    ...mdxContent,
  };
}
