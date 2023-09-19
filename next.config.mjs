import withPlaiceholder from "@plaiceholder/next";

const nextConfig = {
  experimental: {
    mdxRs: true
  },
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: '/bonne-dose-finale',
        destination: '/blog/bonne-dose-finale',
        permanent: true,
      },
      {
        source: '/parfaitement-gerer-e-reputation',
        destination: '/blog/parfaitement-gerer-e-reputation',
        permanent: true,
      },
      {
        source: '/notifications-maitresses-votre-attention',
        destination: '/blog/notifications-maitresses-votre-attention',
        permanent: true,
      },
    ]
  },
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default withPlaiceholder(nextConfig);