const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["var(--font-qanelas-soft)", ...defaultTheme.fontFamily.sans],
        body: ["var(--font-roc-grotesk)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    plugin(function ({ addComponents, theme }) {
      const icons = {
        ".external-link-icon-primary": {
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.75' stroke='${encodeURIComponent(
            theme("colors.teal.700")
          )}' %3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25' /%3E%3C/svg%3E%0A");`,
        },
        ".select-icon": {
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='${encodeURIComponent(
            theme("colors.slate.800")
          )}' viewBox='0 0 20 20'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'%3E%3C/path%3E%3C/svg%3E");`,
        },
      };

      addComponents(icons);
    }),
  ],
};
