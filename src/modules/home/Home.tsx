import { Link } from 'react-router-dom'
import './home.css'
import MoreInfoLink from './components/moreInfo/MoreInfoLink'

import Work from '../../assets/work.png'



export default function Home() {
    return (
        <div className='home-container'>
            <section className='home'>
                <div className="home-header">
                    <h1>Hey, Soy Renato</h1>
                    <h2>Soy Desarrollador Web</h2>
                    <p>John is an experienced UX designer based in the US known for creating intuitive and engaging user experiences.</p>
                </div>
                <div className="home-buttons">
                    <a href="">
                        Contactar
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.93652 5.25C4.93652 5.6625 5.27402 6 5.68652 6H11.379L4.71902 12.66C4.64958 12.7294 4.5945 12.8119 4.55692 12.9026C4.51934 12.9933 4.5 13.0906 4.5 13.1887C4.5 13.2869 4.51934 13.3842 4.55692 13.4749C4.5945 13.5656 4.64958 13.6481 4.71902 13.7175C4.78845 13.7869 4.87089 13.842 4.96161 13.8796C5.05233 13.9172 5.14957 13.9365 5.24777 13.9365C5.34596 13.9365 5.4432 13.9172 5.53392 13.8796C5.62465 13.842 5.70708 13.7869 5.77652 13.7175L12.4365 7.0575V12.75C12.4365 13.1625 12.774 13.5 13.1865 13.5C13.599 13.5 13.9365 13.1625 13.9365 12.75V5.25C13.9365 4.8375 13.599 4.5 13.1865 4.5H5.68652C5.27402 4.5 4.93652 4.8375 4.93652 5.25Z" fill="currentColor" />
                        </svg>

                    </a>
                    <Link to="/proyects">
                        Ver Proyectos
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.77657 16.2981C6.14407 16.6656 6.73657 16.6656 7.10407 16.2981L13.3366 10.0656C13.4061 9.99624 13.4613 9.91382 13.4989 9.82309C13.5365 9.73236 13.5559 9.6351 13.5559 9.53687C13.5559 9.43865 13.5365 9.34139 13.4989 9.25066C13.4613 9.15993 13.4061 9.07751 13.3366 9.00812L7.10407 2.77562C6.73657 2.40812 6.14407 2.40812 5.77657 2.77562C5.40907 3.14312 5.40907 3.73563 5.77657 4.10313L11.2066 9.54062L5.76907 14.9781C5.40907 15.3381 5.40907 15.9381 5.77657 16.2981Z" fill="#F0F1F4" />
                        </svg>
                    </Link>
                </div>
            </section>
            <section className='resume'>
                <div className="resume-header">
                    <h2>Resumen</h2>
                    <MoreInfoLink to='/about'>
                        Ver más
                    </MoreInfoLink>
                </div>
                <div className="resume-cv">
                    <div className="title-cv">
                        <div className="icon-cv">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 2.75C14.0663 2.75 14.1299 2.77634 14.1768 2.82322C14.2237 2.87011 14.25 2.9337 14.25 3V8.647C14.25 9.061 14.586 9.397 15 9.397H19.5C19.5663 9.397 19.6299 9.42334 19.6768 9.47022C19.7237 9.51711 19.75 9.5807 19.75 9.647V19.5C19.75 20.2293 19.4603 20.9288 18.9445 21.4445C18.4288 21.9603 17.7293 22.25 17 22.25H7C6.27065 22.25 5.57118 21.9603 5.05546 21.4445C4.53973 20.9288 4.25 20.2293 4.25 19.5V5.5C4.25 4.77065 4.53973 4.07118 5.05546 3.55546C5.57118 3.03973 6.27065 2.75 7 2.75H14Z" fill="#F0F1F4" />
                                <path d="M16.086 3.13796C15.943 3.02296 15.75 3.13996 15.75 3.32396V7.64696C15.75 7.78496 15.862 7.89696 16 7.89696H19.298C19.416 7.89696 19.49 7.77296 19.422 7.67696L16.408 3.47996C16.3165 3.35199 16.2082 3.23695 16.086 3.13796Z" fill="#F0F1F4" />
                            </svg>

                        </div>
                        <p>Renato-dev-cv.pdf</p>
                    </div>
                    <a href="" className='dowload-cv'>
                        Descargar
                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.25 9.5L9 13.25M9 13.25L12.75 9.5M9 13.25V3.5M4.5 15.5H13.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </a>
                </div>
            </section>
            <section className='work'>
                <div className="works-header">
                    <h2>Últimos Proyectos</h2>
                    <MoreInfoLink to='/proyects'>
                        Ver más
                    </MoreInfoLink>
                </div>
                <div className="work-container">
                    <div className="last-card">
                        <img src={Work} alt="" />
                        <h3>Proyecto Pagina web de Agencia</h3>
                        <a href="#" className='external-work'>
                            https://renatodev.vercel.app
                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.93652 5.25C4.93652 5.6625 5.27402 6 5.68652 6H11.379L4.71902 12.66C4.64958 12.7294 4.5945 12.8119 4.55692 12.9026C4.51934 12.9933 4.5 13.0906 4.5 13.1887C4.5 13.2869 4.51934 13.3842 4.55692 13.4749C4.5945 13.5656 4.64958 13.6481 4.71902 13.7175C4.78845 13.7869 4.87089 13.842 4.96161 13.8796C5.05233 13.9172 5.14957 13.9365 5.24777 13.9365C5.34596 13.9365 5.4432 13.9172 5.53392 13.8796C5.62465 13.842 5.70708 13.7869 5.77652 13.7175L12.4365 7.0575V12.75C12.4365 13.1625 12.774 13.5 13.1865 13.5C13.599 13.5 13.9365 13.1625 13.9365 12.75V5.25C13.9365 4.8375 13.599 4.5 13.1865 4.5H5.68652C5.27402 4.5 4.93652 4.8375 4.93652 5.25Z" fill="currentColor" />
                            </svg>

                        </a>
                    </div>
                    <div className="last-card">
                        <img src={Work} alt="" />
                        <h3>Proyecto Pagina web de Agencia</h3>
                        <a href="" className='external-work'>
                            https://codevs.netlify.app
                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.93652 5.25C4.93652 5.6625 5.27402 6 5.68652 6H11.379L4.71902 12.66C4.64958 12.7294 4.5945 12.8119 4.55692 12.9026C4.51934 12.9933 4.5 13.0906 4.5 13.1887C4.5 13.2869 4.51934 13.3842 4.55692 13.4749C4.5945 13.5656 4.64958 13.6481 4.71902 13.7175C4.78845 13.7869 4.87089 13.842 4.96161 13.8796C5.05233 13.9172 5.14957 13.9365 5.24777 13.9365C5.34596 13.9365 5.4432 13.9172 5.53392 13.8796C5.62465 13.842 5.70708 13.7869 5.77652 13.7175L12.4365 7.0575V12.75C12.4365 13.1625 12.774 13.5 13.1865 13.5C13.599 13.5 13.9365 13.1625 13.9365 12.75V5.25C13.9365 4.8375 13.599 4.5 13.1865 4.5H5.68652C5.27402 4.5 4.93652 4.8375 4.93652 5.25Z" fill="currentColor" />
                            </svg>

                        </a>
                    </div>
                </div>
            </section>
            <section className='skill'>
                <div className="skill-header">
                    <h2>Tecnologias</h2>
                    <MoreInfoLink to='/skill'>
                        Ver más
                    </MoreInfoLink>
                </div>
                <div className="skill-container">
                    <div className="skill-card-home">
                        <div className="skill-card-icon">
                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 3.66669L8.393 36.344L22 40.3334L35.6895 36.3459L38.5 3.66669H5.5ZM31.2565 14.7547H16.6375L16.9528 18.4507H31.064L29.9163 30.4865L22.132 33.0184L14.2835 30.3509L13.7555 24.9755H17.4662L17.7595 27.5624L22.1595 29.0565L26.4605 27.6577L27.005 22.1485H13.596L12.5657 11.0569H31.6543L31.2565 14.7547Z" fill="#FF541E" />
                            </svg>
                        </div>
                        <div className="skill-card-name">
                            <h3>HTML</h3>
                            <p>Para la maquetación de todas las interfaces.</p>
                        </div>
                    </div>
                    <div className="skill-card-home">
                        <div className="skill-card-icon">
                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 3.66669L8.393 36.344L22 40.3334L35.6895 36.3459L38.5 3.66669H5.5ZM31.2565 14.7547H16.6375L16.9528 18.4507H31.064L29.9163 30.4865L22.132 33.0184L14.2835 30.3509L13.7555 24.9755H17.4662L17.7595 27.5624L22.1595 29.0565L26.4605 27.6577L27.005 22.1485H13.596L12.5657 11.0569H31.6543L31.2565 14.7547Z" fill="#FF541E" />
                            </svg>
                        </div>
                        <div className="skill-card-name">
                            <h3>HTML</h3>
                            <p>Para la maquetación de todas las interfaces.</p>
                        </div>
                    </div>
                    <div className="skill-card-home">
                        <div className="skill-card-icon">
                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 3.66669L8.393 36.344L22 40.3334L35.6895 36.3459L38.5 3.66669H5.5ZM31.2565 14.7547H16.6375L16.9528 18.4507H31.064L29.9163 30.4865L22.132 33.0184L14.2835 30.3509L13.7555 24.9755H17.4662L17.7595 27.5624L22.1595 29.0565L26.4605 27.6577L27.005 22.1485H13.596L12.5657 11.0569H31.6543L31.2565 14.7547Z" fill="#FF541E" />
                            </svg>
                        </div>
                        <div className="skill-card-name">
                            <h3>HTML</h3>
                            <p>Para la maquetación de todas las interfaces.</p>
                        </div>
                    </div>
                    <div className="skill-card-home">
                        <div className="skill-card-icon">
                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.5 3.66669L8.393 36.344L22 40.3334L35.6895 36.3459L38.5 3.66669H5.5ZM31.2565 14.7547H16.6375L16.9528 18.4507H31.064L29.9163 30.4865L22.132 33.0184L14.2835 30.3509L13.7555 24.9755H17.4662L17.7595 27.5624L22.1595 29.0565L26.4605 27.6577L27.005 22.1485H13.596L12.5657 11.0569H31.6543L31.2565 14.7547Z" fill="#FF541E" />
                            </svg>
                        </div>
                        <div className="skill-card-name">
                            <h3>HTML</h3>
                            <p>Para la maquetación de todas las interfaces.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="education-header">
                    <h2>Educación</h2>
                    <a href="">Ver más</a>
                </div>
                <div className="education-container">
                    <hr />
                </div>
            </section>
        </div>
    )
}