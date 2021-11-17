import './styles.scss';
import SecondaryButton from '../SecondaryButton';
import luiza from '../assets/luiza.png'

const Banner = () => {
       return (
              <>
              <div className="card">
             
              <div className="sobre" id="sobre">
                     <div className="content"> 
                     <p>Olá,</p>
                     <p id="myName">Meu nome é Luiza</p>
                     <p>Atualmente sou uma desenvolvedora em formação como aluna bolsista da Digital House.</p>
                     <p>Sou apaixonada por tecnologia desde o meu primeiro computador aos 7 anos, sempre fui curiosa & uma entusiasta na resolução de problemas de software e hardware das máquinas.</p>
                     <p>No momento meus estudos estão focados em projetos Java, NodeJS e Angular.</p>
                     <p><SecondaryButton link="mailto: malludra@gmail.com" text="Vamos coversar? 🡭"/></p>
                     </div>
                     <img src={luiza}/>

              </div>
              
              <div className="ball"></div>
       </div>
              </>
       )
}

export default Banner;