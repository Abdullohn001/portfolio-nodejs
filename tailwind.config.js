/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "pulse-3d": {
          "0%": { transform: "translateZ(0) rotateX(0) rotateY(0)" },
          "50%": {
            transform: "translateZ(10px) rotateX(10deg) rotateY(10deg)",
          },
          "100%": { transform: "translateZ(0) rotateX(0) rotateY(0)" },
        },
      },
      animation: {
        "pulse-3d": "pulse-3d 0.6s ease-in-out",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
