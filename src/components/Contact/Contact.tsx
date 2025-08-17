import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";


export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Need help? </p>
        <p>Contact me now.</p>
      </header>
      <div className="contacts">
        <div>
        <a href="mailto:noctis.hive@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:noctis.hive@gmail.com">noctis.hive@gmail.com</a>
        </div>
        <div>
        <a href="tel:+918847612987"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+918847612987">(+91) 8847612987</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}