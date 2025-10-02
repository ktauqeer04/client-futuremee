const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', ...fontFamily.sans],
        playfair: ['"Playfair Display"', ...fontFamily.serif],
        alan: ["Alan sans", ...fontFamily.sans]
        // add more if you want
      },
    },
  },
  plugins: [],
}
