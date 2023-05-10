import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { GlobalStyle } from "@styles"
import App from "./app"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <GlobalStyle />
      <App />
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
