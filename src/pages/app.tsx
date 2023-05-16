import { DefaultLayout, Navbar } from "@components"
import { TypeAnimation } from "react-type-animation"
import styled from "styled-components"

const HelloH1 = styled.h1`
  margin: 0px 0px 30px 4px;
  color: rgb(100, 255, 218);
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
  font-weight: 400;
`
const NameH1 = styled.h1`
  margin: 0px;
  font-size: clamp(40px, 8vw, 80px);
  font-weight: 600;
  color: rgb(204, 214, 246);
  line-height: 1.1;
`

const SubHeading = styled.h1`
  margin: 0px;
  font-size: clamp(40px, 8vw, 80px);
  font-weight: 600;
  color: rgb(136, 146, 176);
`

const GreetingBlock = styled.div`
  position: fixed;
  top: 40%;
  left: 20%;

  span {
    color: white;
    font-size: 50px;
    text-align: center;
  }
`

export default function App() {
  return (
    <DefaultLayout>
      <GreetingBlock>
        <HelloH1>Hello, I'm</HelloH1>
        <NameH1>Gary Ho</NameH1>
        <SubHeading>
          <span>I am a </span>{" "}
          <TypeAnimation
            sequence={[
              "Software Engineer",
              1000,
              "Web Developer",
              1000,
              "Open Source Contributor",
              1000,
            ]}
            speed={60}
            deletionSpeed={60}
            repeat={Infinity}
          />
        </SubHeading>
      </GreetingBlock>
    </DefaultLayout>
  )
}
