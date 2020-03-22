const _ = require("lodash");

module.exports = {
  theme: {
    rotate: {
      "1/4": "90deg",
      "1/2": "180deg",
      "3/4": "270deg",
    },
    extend: {},
  },
  variants: {},
  plugins: [
    require("@tailwindcss/custom-forms"),
    function ({ addUtilities, config, e }) {
      const rotateUtilities = _.map(config("theme.rotate"), (value, key) => {
        return {
          [`.${e(`rotate-${key}`)}`]: {
            transform: `rotate(${value})`,
          },
        };
      });
      addUtilities(rotateUtilities);
    },
  ],
};
