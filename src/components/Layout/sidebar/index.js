import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../../assets/images/logo-s.png';
import LogoSubtitle from '../../../assets/images/log_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHome,
    faUser,
    faEnvelope,
   
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => {
    return (
        <div className='navbar'>
            <Link className='logo' to='/'>
                <img className="sup"src={LogoS} alt="logo" />
                <img className='sub' src={LogoSubtitle} alt="vignesh" />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" className="Home"to="/">
                    <FontAwesomeIcon icon={faHome} color="#b8b8bd" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="About" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#b8b8bd" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="Contact" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#b8b8bd" />


                </NavLink>
            </nav>
            <ul>
                <li>
                  <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/a-vignesh-balaji-15551032a/?originalSubdomain=in'>
                   <FontAwesomeIcon icon={faLinkedin} color="#b8b8bd" />
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href='https://github.com/vignesh12398'>
                   <FontAwesomeIcon icon={faGithub} color="#b8b8bd" />
                  </a>
                </li>
                <li>
                  <a target="_blank" rel="noreferrer" href='https://www.youtube.com/watch?v=bmpI252DmiI&t=1313s'>
                   <FontAwesomeIcon icon={faYoutube} color="#b8b8bd" />
                  </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;

