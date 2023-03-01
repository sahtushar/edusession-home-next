module.exports = {
  images: {
    layoutRaw: true,
    unoptimized: true,
  },
  pageExtensions: ["html", "jsx", "js", "tsx", "ts"],
  compiler: {
    styledComponents: {
      minify: true,
    },
  },
  devIndicators: {
    buildActivity: true,
  },
  // Rest of the config
};
