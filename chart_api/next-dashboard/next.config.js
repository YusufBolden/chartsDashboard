module.exports = {
  async rewrites() {
    return [
      {
        source: "/PiePage",
        destination: "/pie",
      },
      {
        source: "/LinePage",
        destination: "/line",
      },
      {
        source: "/BarPage",
        destination: "/bar",
      },
    ];
  },
  reactStrictMode: true,
};
