import { Container } from "./styles";
import githubIcon from "../../assets/github-color-svgrepo-com.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Ventures</h2>
      <div className="projects">

          <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" duration={1.5}>

          <div className="project">
            <header>
             
              <div className="project-links">
                <a href="https://github.com/Noctis2003/nitapp" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Triberary.com</h3>
              <p>
                Triberary is a student-first social marketplace connecting colleges across India. 
                Users can buy and sell within their campus, publish short posts and blogs, 
                and share anonymous confessions — all designed to foster campus communities.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Nextjs</li>
                <li>Nestjs</li>
                <li>Serverless</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" duration={1.5}>
          <div className="project">
            <header>
              <div className="project-links">
                <a href="https://github.com/Noctis2003/illusionary" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>LSD Player</h3>
              <p>
                LSD Player is a desktop application for playing virtually any audio source while generating
                real-time, psychedelic visuals that react to the music. It leverages yt-dlp to fetch streams
                and uses a small custom Express proxy to avoid CORS when loading remote media, with WebAudio
                and WebGL powering the audio-reactive visuals.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Electron</li>
                <li>React</li>
                <li>Butterchurn</li>
                <li>yt-dlp</li>
               
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

    
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" duration={1.5}>
          <div className="project">
            <header>
              <div className="project-links">
                <a href="https://github.com/Noctis2003/nitj.shop" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                
              </div>
            </header>
            <div className="body">
              <h3>nitj.shop</h3>
              <p>
                nitj.shop is a campus marketplace for buying and selling anything within your college. Users can
                create listings with multiple images, browse by category, and securely message sellers. The
                platform includes OAuth-based authentication (Google/Institution SSO) so students can sign in
                quickly and safely.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Next.js</li>
                <li>Node.js</li>
                <li>OAuth (Google / SSO)</li>
                <li>Cloudinary</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

            <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" duration={1.5}>
          <div className="project">
            <header>
              <div className="project-links">
                <a href="https://github.com/Noctis2003/Studynotion" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
                
              </div>
            </header>
            <div className="body">
              <h3>LMS platform</h3>
              <p>
              Created an LMS platform for NIT Jalandhar, enabling students to access course materials, 
              submit assignments, and track their academic progress. The platform supports multiple courses and user
               roles, including students and faculty.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>MongoDB</li>
                <li>Node.js</li>
                <li>React</li>
                <li>Express</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        


        
  

      </div>
    </Container>
  );
}