import './styles.scss';

const SecondaryButton = ({link, text}) => {
       return(
              <a href={link} className="open-project-button" id="secondary-button">{text}</a>
       )
}

export default SecondaryButton;