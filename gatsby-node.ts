import { CreateWebpackConfigArgs } from "gatsby"
import path from "path"

export function onCreateWebpackConfig({ actions }: CreateWebpackConfigArgs) {
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
