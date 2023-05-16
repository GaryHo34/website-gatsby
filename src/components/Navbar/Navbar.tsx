import {
  Button,
  ButtonContainer,
  FixedHeader,
  NavbarContainer,
} from "./Navbar.styled"

export function Navbar() {
  return (
    <NavbarContainer>
      <FixedHeader>Gary Ho</FixedHeader>
      <ButtonContainer>
        <Button>Blog</Button>
        <Button>Project</Button>
        <Button>About</Button>
        <Button>Resume</Button>
      </ButtonContainer>
    </NavbarContainer>
  )
}
