import logo from '../assets/logo.svg'
import './styles.scss';

const Header = () => {
       return(         
              <>
              <header>
              <img src={logo}/>
              <ul>
                     <li><a href="#sobre">Sobre</a></li>
                     <li><a href="#projetos">Projetos</a></li>
                     <li><a href="#contato">Contato</a></li>
              </ul>  
              </header>
              </> 
       )
}

export default Header