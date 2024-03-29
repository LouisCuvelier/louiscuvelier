export default function getMetadata({
  url,
  title = "",
  description,
  ogImageTitle = title,
  ogImageSurtitle = "",
  ogImageDate = "",
  ogImageReadingTime = "",
  article = {},
}) {
  return {
    alternates: {
      canonical: url,
    },
    authors: [{ name: "Louis Cuvelier" }],
    ...(title !== "" && { title }),
    description,
    openGraph: {
      type: "website",
      ...(title !== "" && { title }),
      description,
      url,
      authors: ["Louis Cuvelier"],
      images: [
        `/api/og?title=${ogImageTitle}&surtitle=${ogImageSurtitle}&date=${ogImageDate}&readingTime=${ogImageReadingTime}`,
      ],
      ...article,
    },
    twitter: {
      card: "summary_large_image",
      ...(title !== "" && { title }),
      description,
      images: [
        `/api/og?title=${ogImageTitle}&surtitle=${ogImageSurtitle}&date=${ogImageDate}&readingTime=${ogImageReadingTime}`,
      ],
    },
  };
}
