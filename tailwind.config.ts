import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/transforms/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./.storybook/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  corePlugins: {
    fontSize: false,
  },
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    fontFamily: {
      heading: ["var(--font-heading)"],
      body: ["var(--font-body)"],
    },
    extend: {
      borderWidth: {
        "input-width": "var(--input-border-width)",
      },
      borderRadius: {
        radius: "var(--radius)",
      },
      ringWidth: {
        "input-width": "var(--input-border-width)",
      },
      spacing: {
        "border-input-width": "var(--input-border-width)",
      },
      colors: {
        background:
          "color-mix(in srgb, var(--layout-background-color) calc(100% * <alpha-value>), transparent)",
        section:
          "color-mix(in srgb, var(--section-background-color) calc(100% * <alpha-value>), transparent)",
        "foreground-heading":
          "color-mix(in srgb, var(--layout-foreground-heading-color) calc(100% * <alpha-value>), transparent)",
        "foreground-body":
          "color-mix(in srgb, var(--layout-foreground-body-color) calc(100% * <alpha-value>), transparent)",
        "primary-background":
          "color-mix(in srgb, var(--primary-background-color) calc(100% * <alpha-value>), transparent)",
        "primary-foreground":
          "color-mix(in srgb, var(--primary-foreground-color) calc(100% * <alpha-value>), transparent)",
        "secondary-background":
          "color-mix(in srgb, var(--secondary-background-color) calc(100% * <alpha-value>), transparent)",
        "secondary-foreground":
          "color-mix(in srgb, var(--secondary-foreground-color) calc(100% * <alpha-value>), transparent)",
        "destructive-background":
          "color-mix(in srgb, var(--destructive-background-color) calc(100% * <alpha-value>), transparent)",
        "destructive-foreground":
          "color-mix(in srgb, var(--destructive-foreground-color) calc(100% * <alpha-value>), transparent)",
        "neutral-background":
          "color-mix(in srgb, var(--neutral-background-color) calc(100% * <alpha-value>), transparent)",
        "info-background":
          "color-mix(in srgb, var(--info-background-color) calc(100% * <alpha-value>), transparent)",
        "warning-background":
          "color-mix(in srgb, var(--warning-background-color) calc(100% * <alpha-value>), transparent)",
        "success-background":
          "color-mix(in srgb, var(--success-background-color) calc(100% * <alpha-value>), transparent)",
        "input-background":
          "color-mix(in srgb, var(--input-background-color) calc(100% * <alpha-value>), transparent)",
        "input-foreground":
          "color-mix(in srgb, var(--input-foreground-color) calc(100% * <alpha-value>), transparent)",
        "input-border":
          "color-mix(in srgb, var(--input-border-color) calc(100% * <alpha-value>), transparent)",
        focus:
          "color-mix(in srgb, var(--focus-ring-color) calc(100% * <alpha-value>), transparent)",
        "muted-background":
          "color-mix(in srgb, var(--muted-background-color) calc(100% * <alpha-value>), transparent)",
        "muted-foreground":
          "color-mix(in srgb, var(--muted-foreground-color) calc(100% * <alpha-value>), transparent)",
        "hover-background":
          "color-mix(in srgb, var(--hover-background-color) calc(100% * <alpha-value>), transparent)",
        "hover-foreground":
          "color-mix(in srgb, var(--hover-foreground-color) calc(100% * <alpha-value>), transparent)",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("tailwindcss-motion"),
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("@tailwindcss/container-queries"),
    // eslint-disable-next-line @typescript-eslint/no-var-requires,@typescript-eslint/no-require-imports
    require("tailwindcss-fluid-type")({
      settings: {
        fontSizeMin: 1, // 1.125rem === 18px
        fontSizeMax: 1.25, // 1.25rem === 20px
        ratioMin: 1.125, // Multiplicator Min
        ratioMax: 1.2, // Multiplicator Max
        screenMin: 20, // 20rem === 320px
        screenMax: 96, // 96rem === 1536px
        unit: "rem", // default is rem, but it's also possible to use 'px'
        prefix: "", // set a prefix to use it alongside the default font sizes
        extendValues: true, // When you set extendValues to true it will extend the default values. Set it to false to overwrite the values.
      },
      values: {
        "4xs": [-5, 1.6],
        "3xs": [-4, 1.6],
        "2xs": [-3, 1.6],
        xs: [-2, 1.6],
        sm: [-1, 1.6],
        base: [0, 1.6],
        lg: [1, 1.6],
        xl: [2, 1.2],
        "2xl": [3, 1.2],
        "3xl": [4, 1.2],
        "4xl": [5, 1.1],
        "5xl": [6, 1.1],
        "6xl": [7, 1.1],
        "7xl": [8, 1],
        "8xl": [9, 1],
        "9xl": [10, 1],
      },
    }),
  ],
};
export default config;
