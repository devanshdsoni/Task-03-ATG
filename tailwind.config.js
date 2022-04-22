module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        skeleton: "skeletonLoading 1s linear infinite alternate",
      },
      keyframes: {
        skeletonLoading: {
          "0%": { backgroundColor: "#a3b8c2" },
          "100%": { backgroundColor: "#d6dbdd" },
        },
      },
    },
  },
  plugins: [],
};
