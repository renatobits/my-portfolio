import { NavLink } from 'react-router-dom';
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
import IoconMenu from '../../icons/IconMenu';
import IconClose from '../../icons/IconClose';

export default function Aside() {
    const [menuActive, setMenuActive] = useState(false);
    return (
        <aside className="active">
            <ProfileInfo />
            <div className={menuActive ? 'nav-container active' : 'nav-container'} onClick={() => setMenuActive(!menuActive)}>
                <nav>
                    <ul>
                        <li>
                            <NavLink to='/' >
                                <IconHome />
                                Home
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
                        {/* <li>
                            <NavLink to="/works">
                                <IconWork />
                                <span>Works</span>
                            </NavLink>
                        </li> */}
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
                        <p>VISITA</p>
                        <ul>
                            <li>
                                <a href="#" className='link-social'>
                                    <IocnTwitter />
                                    <span>Twitter</span>
                                </a>
                            </li>
                            {/* <li>
                                <a href="" className='link-social'>
                                    <IconInstagram />
                                    <span>Instagram</span>
                                </a>
                            </li> */}
                            <li>
                                <a href="https://www.linkedin.com/in/a-renato-devv/" className='link-social' target='_blank'>
                                    <IconLinkedin />
                                    <span>LinkedIn</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/renatobits" className='link-social' target='_blank'>
                                    <IconGithub />
                                    <span>GitHub</span>
                                </a>
                            </li>
                            {/* <li>
                                <a href="" className='link-social'>
                                    <IconTiktok />
                                    <span>Tik Tok</span>
                                </a>
                            </li> */}
                        </ul>
                    </div>
                </nav>
                {/* <a href="/" className='external'>Comprar Diseño</a> */}
                <span className='copy'>Renato Dev © 2024 | Todos los derechos reserevados</span>
            </div>
            <button onClick={() => setMenuActive(!menuActive)}>
                {menuActive ? <IconClose /> : <IoconMenu />}
            </button>
        </aside>
    )
}
