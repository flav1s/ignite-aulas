const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enable: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({});
