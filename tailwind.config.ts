import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(accordion|divider).js"
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary": "#00D47E",
        "grey": "#8D959D",
        "whiteBone": "#F2F4F4",
        "black": "#1E1E1E",
        "hover-primary": "#04B970",
        "hover-outline": "#EDFCF6",
      },
      width: {
        "btn-widht-small": "150px",
        "btn-widht-medium": "250px",
        "btn-widht-large": "350px",
        "card-our-product-width": "600px",
      },
      height: {
        "btn-height": "50px",
        "card-our-product-height": "350px",
      }
    },
  },
  plugins: [nextui()],
};
export default config;
