/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
      backgroundImage: {
        "hero-pattern": "url('/images/hero-bg.svg')",
        "testimonial-pattern": "url('/images/testimonial-bg.svg')",
      },
      colors: {
        primary: {
          main: "#6366F1",
          100: "#4844F5",
          200: "#3E1ECD",
          300: "#3459FF",
          400: "#6157FF",
          500: "#006DFF",
          500: "#5B43FF",
        },
        gray: {
          footer: "#4B4757",
        },
        purple: {
          100: "#6437F5",
        },
        shade: {
          100: "#D1ECFD",
        },
        blue: {
          100: "#EEF8FF",
          200: "#ECF8FF",
          300: "#F4F7FA",
        },
      },
      // boxShadow: {
      //   waitlist: " 0px 2px 7px 0px rgba(211, 217, 227, 0.15)",
      // },
    },
  },
  plugins: [],
};
