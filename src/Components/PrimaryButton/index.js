import './styles.scss';

const PrimaryButton = ({link, text}) => {
       return(
              <a href={link} id="primary-button" target="_blank">{text}</a>
       )
}

export default PrimaryButton;