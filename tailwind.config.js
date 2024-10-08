/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
        screens: { sm: "480px", md: "768px", lg: "976px", xl: "1440pd" },
        animation: {
          fadeIn: "fadeIn 1.5s",
          mybounce:
            "mybounce 0.5s",
          slideUp: "slideUp 0.5s",
          slideUpEaseInOut: "slideUp 0.5s ease-in-out",
          slideUpCubiBezier: "slideUp 1s cubic-bezier(0.165, 0.84, 0.44, 1)",
        },
        animationDelay: {
          0: "0s",
          2: "0.2s",
          4: "0.4s",
          6: "0.6s",
        },
        keyframes: {
          fadeIn: {
            from: { opacity: 0 },
            to: { opacity: 1 },
          },
          slideUp: {
            from: { transform: "translateY(100%)" },
            to: { transform: "translateY(0)" },
          },
          mybounce: {
            from: { transform: "translateY(50px)" },
            to: { transform: "translateX(0)" },
          },
        },

        colors: {
            'orange': '#f58f7c',
            'pink': '#f2c4ce',
            'grey': '#f5f5f5',
        },
      },
    },
    plugins: [],
  };