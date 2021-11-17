import myveil from '../assets/myveil.png';
import bakingqa from '../assets/bakingqa.png';
import polaroid from '../assets/polaroid.png';
import PrimaryButton from '../PrimaryButton';
import SimpleImageSlider from "react-simple-image-slider";
import './styles.scss';

let projectShoot;
const CardProject = ({project}) => {
     
       switch (project.slug) {
              case "myveil":
                     projectShoot = myveil;
                     break;
              case "bakingqa":
                     projectShoot = bakingqa;
                     break;
              case "polaroid":
                     projectShoot = polaroid;
                     break;
              default:
                     break;
       }

      
       return(
              
                     <div className="card">
                     <div className="project-shoot">
                     
                     
                     <img id="projectShoot" src={projectShoot} alt=""/>
                     
                     </div>
                     <div className="project-content">
                            <div className="project-about">
                                   <h2>{project.name}</h2>
                                   <p>{project.description}</p>
                            </div>
              
                            <div className="project-links">
                                   <div className="project-techs">
                                        
                                          <h3>Techs</h3>
                                          {
                                                 project.techs.map((tech) => {
                                                        return(
                                                               <>
                                                          <img id="badge" src={tech}/>
                                                          
                                                          </>
                                                        )
                                                      })
                
                                           }
                                          
                                   </div>
                            <div className="project-buttons">
                         
                                  
                                   <PrimaryButton link={project.git} text="Git Repository"/>
                                  
                            </div>
                     </div>
                     </div>
              </div>
              
       )
}


export default CardProject;