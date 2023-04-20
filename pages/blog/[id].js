import { getAllPostIds, getPostData } from "../../lib/posts";
import Layout from "../../components/layouts/Layout";
import Date from "../../components/layouts/Date";
import { Text } from "../../components/Typography";
import { MDXProvider } from "@mdx-js/react";

const ResponsiveImage = (props) => (
  <Image alt={props.alt} layout="responsive" {...props} />
);

const components = {
  img: ResponsiveImage,
  p: Text,
};

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
      mdxSource: await serialize(postData.data);
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <article className={"max-w-screen-sm mx-auto"}>
        <header>
          <h1 className={"text-5xl font-sans"}>{postData.title}</h1>
          <div className={"text-xs font-sans uppercase tracking-widest mt-2"}>
            <span>
              Publié le{" "}
              <Date isPubDate={true} dateString={postData.publicationDate} />
            </span>
            <span className={"px-1"}>–</span>
            <span>
              Mis à jour le{" "}
              <Date isPubDate={false} dateString={postData.updateDate} />
            </span>
          </div>
        </header>
        <p className={"text-xl mt-8 leading-normal"}>{postData.description}</p>
        <MDXProvider components={components}>
          <div {...postData}></div>
        </MDXProvider>
      </article>
    </Layout>
  );
}
