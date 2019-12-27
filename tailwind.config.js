function convertHex(hex, opacity) {
  hex = hex.replace("#", "");
  r = parseInt(hex.substring(0, 2), 16);
  g = parseInt(hex.substring(2, 4), 16);
  b = parseInt(hex.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity / 100})`;
}

const defaultTheme = require("tailwindcss/defaultTheme");

const spacingValues = [
  1,
  2,
  3,
  4,
  5,
  6,
  8,
  10,
  12,
  16,
  20,
  24,
  32,
  40,
  48,
  56,
  64,
  72,
  80,
  96,
  112,
  128,
  144,
  160,
  192,
  224,
  256,
  288,
  320,
  384,
  448,
  512
];

module.exports = {
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      serif: ["Merriweather", ...defaultTheme.fontFamily.serif]
    },
    spacing: () => {
      const spacing = {
        "0": "0px",
        "1px": "1px",
        "1": "2px",
      };
      let i = 2;

      for (let value of spacingValues) {
        spacing[`${i}`] = `${value * 0.25}rem`;
        i++;
      }

      return spacing;
    },
    extend: {
      maxWidth: theme => {
        const spacing = theme("spacing");
        const values = {
          "1/4": "25%",
          "1/2": "50%",
          "3/4": "75%",
          "4/5": "80%"
        };

        for (let key in spacing) {
          Object.assign(values, {
            [`${key}`]: `${spacing[key]}`
          });
        }

        return values;
      },
      minWidth: theme => {
        const spacing = theme("spacing");
        const values = {
          "1/4": "25%",
          "1/2": "50%",
          "3/4": "75%"
        };

        for (let key in spacing) {
          Object.assign(values, {
            [`${key}`]: `${spacing[key]}`
          });
        }

        return values;
      },
      maxHeight: theme => {
        const spacing = theme("spacing");
        const values = {};

        for (let key in spacing) {
          Object.assign(values, {
            [`${key}`]: `${spacing[key]}`
          });
        }

        return values;
      },
      minHeight: theme => {
        const spacing = theme("spacing");
        const values = {
          "1/4": "25%",
          "1/2": "50%",
          "3/4": "75%"
        };

        for (let key in spacing) {
          Object.assign(values, {
            [`${key}`]: `${spacing[key]}`
          });
        }

        return values;
      },
      borderWidth: {
        "6": "6px"
      },
      boxShadow: theme => {
        const color = theme("colors.gray.300");
        return {
          outline: `0 0 0 3px ${convertHex(color, 50)}`,
          focus: "0 0 0 3px rgba(66,153,225,0.5)"
        };
      },
      inset: theme => {
        const positiveValues = theme("spacing");
        const negativeValues = {};
        const otherValues = {
          unset: "unset",
          "50per": "50%"
        };

        for (let key in positiveValues) {
          Object.assign(negativeValues, {
            [`-${key}`]: `-${positiveValues[key]}`
          });
        }

        const values = Object.assign(negativeValues, positiveValues);
        return Object.assign(values, otherValues);
      },
      zIndex: {
        "(-2)": "-2",
        "(-1)": "-1",
        "50": 50,
        "60": 60,
        "70": 70,
        "80": 80,
        "90": 90,
        "100": 100
      }
    }
  },
  variants: {},
  plugins: []
};
