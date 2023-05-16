import type { HeadFC, PageProps } from "gatsby"
import App from "./app"
import { GlobalStyled } from "@styles"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <GlobalStyled />
      <App />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => (
  <>
    <title>Gary Ho</title>
    <meta name="description" content="Gary Ho's blog and portifolio" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico?" />
  </>
)
