import {AiFillGithub, AiFillMail} from "react-icons/Ai";
import {StyledContact} from "./styles/Contact.styled";

export default function Contact() {
  return (
    <StyledContact>
      <h4>Contact Me</h4>
      <div className="contact-container">
        <a href="https://github.com/Alan1234111" target="_blank" rel="noreferrer">
          <AiFillGithub />
          Github
        </a>
        <a href="mailto: alan.pason132@gmail.com">
          <AiFillMail />
          Mail
        </a>
      </div>
    </StyledContact>
  );
}
