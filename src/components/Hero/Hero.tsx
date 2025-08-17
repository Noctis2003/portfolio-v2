import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import { Fade } from "react-awesome-reveal"
import Illustration from "../../assets/rocket-svgrepo-com.svg"

import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'

import Instagram from '../../assets/instagram.svg'
import Hello from '../../assets/Hello.gif'
import telegram from '../../assets/telegram.svg'
export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <Fade direction="up" >
          <p>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
        </Fade>
        <Fade direction="up" delay={200}>
          <h1>Manjot Singh</h1>
        </Fade>
        <Fade direction="up"  delay={400}>
          <h3>Software Engineer</h3>
        </Fade>
        <Fade direction="up"  delay={600}>
          <p className="small-resume">To infinity and beyond...</p>
        </Fade>
        <Fade direction="up"  delay={800}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
          </BrowserRouter>
        </Fade>
        <Fade direction="up"  delay={1000}>
      <div className="social-media"><a
        href="https://www.linkedin.com/in/manjot-singh-1571b325b/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="Linkedin" />
      </a>
        <a
          href="https://github.com/Noctis2003"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://www.instagram.com/manjot._.singh5"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Instagram} alt="Whatsapp" />
        </a>
        <a
          href="https://t.me/BRUCEXXBANNER"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} alt="telegram" />
        </a></div>
        </Fade>
      </div>
      <div className="hero-image">
        <Fade direction="right" delay={1000}>
          <img src={Illustration} alt="Ilustração"
            style={{ transform: "rotate(270deg)" }} />
        </Fade>
      </div>
    </Container>
  )
}