import { Navbar } from "@components"
import { Container } from "./DefaultLayout.styled"
import { DefaultLayoutProps } from "./DefaultLayout.types"

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <main>
      <Container>
        <Navbar />
        {children}
      </Container>
    </main>
  )
}
