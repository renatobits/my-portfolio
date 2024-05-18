import { Link, NavLink } from 'react-router-dom';
import './aside.css';
import ProfileInfo from './components/ProfileInfo';
import IconHome from '../../icons/icons-nav/IconHome';
import IconProyect from '../../icons/icons-nav/IconProyect';
import IconSkill from '../../icons/icons-nav/IconSkill';
import IconWork from '../../icons/icons-nav/IconWork';
import IconAbout from '../../icons/icons-nav/IconAbout';
import IconContact from '../../icons/icons-nav/IconContact';
import IocnTwitter from '../../icons/icons-nav/IconTwitter';
import IconInstagram from '../../icons/icons-nav/IconInstagram';
import IconLinkedin from '../../icons/icons-nav/IconLinkedin';
import IconTiktok from '../../icons/icons-nav/IconTiktok';
import IconGithub from '../../icons/icons-nav/IconGithub';
import { useState } from 'react';

export default function Aside() {
    const [collapse, setCollapse] = useState(false);
    return (
        <aside className={collapse ? 'collapse' : ''}>
            <ProfileInfo />
            {/* Collapse button */}
            {/* <button className='button-collapse' onClick={()=>setCollapse(!collapse)}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.465 2.24247C12.3779 2.15516 12.2745 2.08589 12.1606 2.03863C12.0467 1.99137 11.9246 1.96704 11.8013 1.96704C11.6779 1.96704 11.5558 1.99137 11.4419 2.03863C11.328 2.08589 11.2246 2.15516 11.1375 2.24247L4.905 8.47497C4.83547 8.54435 4.78031 8.62677 4.74268 8.7175C4.70504 8.80823 4.68567 8.90549 4.68567 9.00372C4.68567 9.10194 4.70504 9.1992 4.74268 9.28994C4.78031 9.38067 4.83547 9.46308 4.905 9.53247L11.1375 15.765C11.505 16.1325 12.0975 16.1325 12.465 15.765C12.8325 15.3975 12.8325 14.805 12.465 14.4375L7.035 8.99997L12.4725 3.56247C12.8325 3.20247 12.8325 2.60247 12.465 2.24247Z" fill="white" />
                </svg>
            </button> */}
            <div className="nav-container">
                <nav>
                    <ul>
                        <li>
                            <NavLink to='/' >
                                <IconHome />
                                <span>Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/proyects">
                                <IconProyect />
                                <span>Proyects</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/skills">
                                <IconSkill />
                                <span>Skills</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/works">
                                <IconWork />
                                <span>Works</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">
                                <IconAbout />
                                <span>About</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">
                                <IconContact />
                                <span>Contact</span>
                            </NavLink>
                        </li>
                    </ul>
                    <div className="social">
                        <p>FOLLOW</p>
                        <ul>
                            <li>
                                <a href="" className='link-social'>
                                    <IocnTwitter />
                                    <span>Twitter</span>
                                </a>
                            </li>
                            <li>
                                <a href="" className='link-social'>
                                    <IconInstagram />
                                    <span>Instagram</span>
                                </a>
                            </li>
                            <li>
                                <a href="" className='link-social'>
                                    <IconLinkedin />
                                    <span>LinkedIn</span>
                                </a>
                            </li>
                            <li>
                                <a href="" className='link-social'>
                                    <IconGithub />
                                    <span>GitHub</span>
                                </a>
                            </li>
                            <li>
                                <a href="" className='link-social'>
                                    <IconTiktok />
                                    <span>Tik Tok</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <a href="/" className='external'>Comprar Diseño</a>
            </div>
            <span>Renato Dev © 2024 | Todos los derechos reserevados</span>
        </aside>
    )
}
