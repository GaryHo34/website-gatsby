import styled from "styled-components"

export const NavbarContainer = styled.nav`
  height: 60px;
  display: flex;
  margin: 0 30px;
  justify-content: space-between;
  align-items: center;
`

export const FixedHeader = styled.div`
  color: white;
  font-weight: 600;
  font-size: 24px;
  line-height: 50px;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 25px;
`

export const Button = styled.div`
  color: grey;
  font-weight: 600;
  font-size: 24px;
  line-height: 50px;
  cursor: pointer;
  -moz-transition: all 0.1s ease-in;
  -o-transition: all 0.1s ease-in;
  -webkit-transition: all 0.1s ease-in;
  transition: all 0.1s ease-in;

  &:hover {
    margin: -2px 0;
    color: white;
  }
`
