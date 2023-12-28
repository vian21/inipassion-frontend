const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

console.log("Store front starting ...")
module.exports = withStoreConfig({
  experimental: {
    serverComponentsExternalPackages: [
      "@medusajs/product",
      "@medusajs/modules-sdk",
    ],
  },
  features: store.features,
  reactStrictMode: true,
  images: {
    domains: [
      process.env.NODE_ENV === "development"
        ? "localhost"
        : process.env.S3_BUCKET,
    ],
    remotePatterns: [
      // {
      //   protocol: "http",
      //   hostname:
      //     process.env.NODE_ENV === "development"
      //       ? "localhost"
      //       : process.env.HOST,
      //   port: process.env.BACKEND_PORT,
      // },
      {
        protocol: "https",
        hostname: process.env.S3_BUCKET,
      },
    ],
  },
})

if (process.env.NODE_ENV === "development") {
  console.log("NODE_ENV: ", process.env.NODE_ENV)
  console.log("HOST: ", process.env.HOST)
  console.log("Port: ", process.env.BACKEND_PORT)
}
console.log("next.config.js", JSON.stringify(module.exports, null, 2))
