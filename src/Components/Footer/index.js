import logo from '../assets/logo.svg';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import email from '../assets/gmail.png';
import './styles.scss';

const Footer = () => {
       return(
              <footer>
                     <img src={logo}/>
                     <div className="social" id="contato">
                            <a href="https://www.linkedin.com/in/luizadragonetti/" target="_blank"><img src={linkedin}/></a>
                            <a href="https://github.com/lulutti" target="_blank"><img src={github}/></a>
                            <a href="mailto: malludra@gmail.com" target="_blank"><img src={email}/></a>
                     </div>
              </footer>
       )
}

export default Footer;