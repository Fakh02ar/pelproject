// tailwind.config.js
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'], // Make sure content is correct
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        // Optionally set as default sans:
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-1px', 
      },
    },
  },
  plugins: [],
};
