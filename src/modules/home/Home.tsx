import { Link } from 'react-router-dom'
import './home.css'

import Work from '../../assets/work.png'
import IconCss from '../../icons/icons-skill/IconCss'
import IconHtml from '../../icons/icons-skill/IconHtml'
import IconFigma from '../../icons/icons-skill/IconFigma'
import IconReact from '../../icons/icons-skill/IconReact'
import IconLaravel from '../../icons/icons-skill/IconLaravel'
import IconWordpress from '../../icons/icons-skill/IconWordpress'
import ButtonPrimaryExternal from '../global/components/buttonPrimaryExternal/ButtonPrimaryExternal'
import ButtonSecondary from '../global/components/secondaryButton/ButtonSecondary'
import ButtonMoreInfo from '../global/components/buttonMoreInfo/ButtonMoreInfo'



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
                    <ButtonPrimaryExternal href='#' text='Contactar' />
                    <ButtonSecondary to='/proyects' text='Ver Proyectos' />
                </div>
            </section>
            <section className='resume'>
                <div className="resume-header">
                    <h2>Resumen</h2>
                    <ButtonMoreInfo to='/about' text='Ver más' />
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
                    <ButtonMoreInfo to='/proyects' text='Ver más' />
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
                    <ButtonMoreInfo to='/skill' text='Ver más' />
                </div>
                <div className="skill-container">
                    <div className="skill-card-home">
                        <div className="skill-card-icon">
                            <IconHtml />
                        </div>
                        <div className="skill-card-name">
                            <h3>HTML</h3>
                            <p>Para la maquetación de todas las interfaces.</p>
                        </div>
                    </div>
                    <div className="skill-card-home">
                        <div className="skill-card-icon">
                            <IconCss />
                        </div>
                        <div className="skill-card-name">
                            <h3>CSS</h3>
                            <p>Para la maquetación de todas las interfaces.</p>
                        </div>
                    </div>
                    <div className="skill-card-home">
                        <div className="skill-card-icon">
                            <IconFigma />
                        </div>
                        <div className="skill-card-name">
                            <h3>Figma</h3>
                            <p>Para la maquetación de todas las interfaces.</p>
                        </div>
                    </div>
                    <div className="skill-card-home">
                        <div className="skill-card-icon">
                            <IconReact />
                        </div>
                        <div className="skill-card-name">
                            <h3>React</h3>
                            <p>Para la maquetación de todas las interfaces.</p>
                        </div>
                    </div>
                    <div className="skill-card-home">
                        <div className="skill-card-icon">
                            <IconLaravel />
                        </div>
                        <div className="skill-card-name">
                            <h3>Laravel</h3>
                            <p>Para la maquetación de todas las interfaces.</p>
                        </div>
                    </div>
                    <div className="skill-card-home">
                        <div className="skill-card-icon">
                            <IconWordpress />
                        </div>
                        <div className="skill-card-name">
                            <h3>WordPress</h3>
                            <p>Para la maquetación de todas las interfaces.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='education'>
                <div className="education-header">
                    <h2>Educación</h2>
                    <ButtonMoreInfo to='/about' text='Ver más' />
                </div>
                <div className="education-container">
                    <div className="education-card">
                        <div className="education-card-logo">
                            <svg width="50" height="50" viewBox="0 0 100.000000 101.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,101.000000) scale(0.100000,-0.100000)" fill="#243CDE" stroke="none"><path d="M287 902 c-21 -3 -32 -13 -49 -45 -26 -53 -135 -244 -158 -277 -9 -14 -22 -39 -29 -57 -12 -30 -10 -36 39 -117 l52 -86 245 2 246 3 29 52 29 51 -31 56 -32 56 -97 0 c-97 0 -125 9 -114 36 4 11 32 14 122 14 131 0 113 10 177 -102 l33 -58 -46 -80 -45 -80 -239 0 c-188 0 -239 -3 -239 -13 0 -7 21 -47 46 -90 l46 -77 231 2 231 3 113 195 c61 107 112 202 112 210 1 9 -10 32 -24 52 -14 20 -25 40 -25 43 0 3 -12 23 -26 45 l-27 40 -242 0 -243 0 -31 -55 -31 -55 31 -55 31 -54 101 -3 c97 -3 102 -4 105 -25 3 -23 2 -23 -115 -23 l-119 0 -32 53 c-18 29 -32 57 -32 62 0 4 -7 16 -15 24 -12 15 -9 26 32 99 l47 82 238 0 c184 0 238 3 238 13 -1 6 -14 35 -30 62 -16 28 -35 60 -41 73 -7 12 -17 22 -23 22 -94 3 -418 4 -439 2z" /></g></svg>
                        </div>
                        <div className="education-card-info">
                            <h3>Senati</h3>
                            <p>Ingenieria de Software con IA</p>
                            <span>Enero 2024, Arequipa - Peru</span>
                        </div>
                    </div>
                    <hr />
                    <div className="education-card">
                        <div className="education-card-logo">
                            <svg width="50" height="50" viewBox="0 0 100.000000 101.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,101.000000) scale(0.100000,-0.100000)" fill="#243CDE" stroke="none"><path d="M287 902 c-21 -3 -32 -13 -49 -45 -26 -53 -135 -244 -158 -277 -9 -14 -22 -39 -29 -57 -12 -30 -10 -36 39 -117 l52 -86 245 2 246 3 29 52 29 51 -31 56 -32 56 -97 0 c-97 0 -125 9 -114 36 4 11 32 14 122 14 131 0 113 10 177 -102 l33 -58 -46 -80 -45 -80 -239 0 c-188 0 -239 -3 -239 -13 0 -7 21 -47 46 -90 l46 -77 231 2 231 3 113 195 c61 107 112 202 112 210 1 9 -10 32 -24 52 -14 20 -25 40 -25 43 0 3 -12 23 -26 45 l-27 40 -242 0 -243 0 -31 -55 -31 -55 31 -55 31 -54 101 -3 c97 -3 102 -4 105 -25 3 -23 2 -23 -115 -23 l-119 0 -32 53 c-18 29 -32 57 -32 62 0 4 -7 16 -15 24 -12 15 -9 26 32 99 l47 82 238 0 c184 0 238 3 238 13 -1 6 -14 35 -30 62 -16 28 -35 60 -41 73 -7 12 -17 22 -23 22 -94 3 -418 4 -439 2z" /></g></svg>
                        </div>
                        <div className="education-card-info">
                            <h3>Senati</h3>
                            <p>Ingenieria de Software con IA</p>
                            <span>Enero 2024, Arequipa - Peru</span>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}