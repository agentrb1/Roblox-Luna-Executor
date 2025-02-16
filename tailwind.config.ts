import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx,lua}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,lua}",
    "./app/**/*.{js,ts,jsx,tsx,mdx,lua}",
  ],
  theme: {
    extend: {
      colors: {
        grey: {
          1: '#ececec'
        }
      }
    },
  },
  plugins: [],
};
export default config;
