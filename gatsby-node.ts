import path from "path"

export function onCreateWebpackConfig({ actions }: any) {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        path: path.resolve("path-browserify"),
      },
      alias: {
        "@pages": path.resolve(__dirname, "src/pages"),
        "@styles": path.resolve(__dirname, "src/styles"),
      },
    },
  })
}
