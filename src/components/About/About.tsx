import { Container } from "./styles";
import VinayakSingh from "../../assets/mf.jpg";
import python from "../../assets/python.svg"
import java from "../../assets/typescript-icon.svg"
import wordpress from "../../assets/azure.svg";
import shopify from "../../assets/nest.svg";
import htmlIcon from "../../assets/docker.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
// import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/kube.svg";
import vueIcon from "../../assets/next.svg";
import boostrapIcon from "../../assets/linux.svg";
import { Fade } from "react-awesome-reveal";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <Fade direction="left" triggerOnce>
          <h2>About me</h2>
        </Fade>
        <Fade direction="left" triggerOnce delay={100}>
          <p>
            Hi there! I'm Manjot, skilled in Fullstack Development,Devops and Backend Development.
          </p>
        </Fade>
        <Fade direction="left" triggerOnce delay={200} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
           I build Fullstack applications using Nextjs, Nestjs, Electron, Docker, Azure,
          </p>
        </Fade>
        <Fade direction="left" triggerOnce delay={300}>
          <p>
           I am skilled in rapid prototyping and deployment.
          </p>
        </Fade>
        <Fade direction="left" triggerOnce delay={400}>
          <div className="education">
            <h3>Education:</h3>
            <h4>Bachelor of Technology (B.Tech)</h4>
            <p>NIT Jalandhar</p>
         
          </div>
        </Fade>
        <Fade direction="left" triggerOnce delay={550}>
          <div className="experience">
             <h3>Experience:</h3><h4>Founder</h4>
            <p>Triberary.com</p>
            <p>NIT J</p>
          </div>
        </Fade>

        <Fade direction="left" triggerOnce delay={400}>
          <h3>Here are my main skills:</h3>
        </Fade>
        <div className="hard-skills">
          <div className="hability">
            <Fade direction="up" triggerOnce delay={100}>
              <img src={python} alt="python" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="up" triggerOnce delay={110}>
              <img src={java} alt="java" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="up" triggerOnce delay={120}>
              <img src={jsIcon} alt="JavaScript" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="up" triggerOnce delay={130}>
              <img src={reactIcon} alt="React" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="up" triggerOnce delay={140}>
              <img src={typescriptIcon} alt="Typescript" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="up" triggerOnce delay={150}>
              <img src={vueIcon} alt="Vue" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="up" triggerOnce delay={160}>
              <img src={wordpress} alt="Wordpress" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="up" triggerOnce delay={170}>
              <img src={shopify} alt="shopify" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="up" triggerOnce delay={180}>
              <img src={htmlIcon} alt="Html" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="up" triggerOnce delay={190}>
              <img src={cssIcon} alt="Css" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="up" triggerOnce delay={200}>
              <img src={boostrapIcon} alt="bootstrap" />
            </Fade>
          </div>
        </div>
      </div>
      <div className="about-image">
        <Fade direction="right" triggerOnce delay={210}>
   <img
  src={VinayakSingh}
  alt="Manjot"
  style={{
    borderRadius: "36px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
   
  }}
/>
        </Fade>
      </div>
    </Container>
  )
}
