/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'old_computer_background': "url('vite-project/src/assets/old_computer_background.jpeg')",
      },
    },
  },
  plugins: [],
}

