import './home.css'
import ButtonPrimaryExternal from '../global/components/buttonPrimaryExternal/ButtonPrimaryExternal'
import ButtonSecondary from '../global/components/secondaryButton/ButtonSecondary'
import HomeResume from './components/homeResume/HomeResume'
import HomeProyect from './components/homeProyect/HomeProyect'
import HomeSkill from './components/homeSkill/HomeSkill'



export default function Home() {
    return (
        <div className='home-container'>
            <section className='home'>
                <div className="home-header">
                    <h1>Hey, Soy Renato</h1>
                    <h2>Desarrollador Web</h2>
                    <p>Soy un profesional apasionado por el Desarrollo Web especialmente en el Frontend especializado en crear interfaces de usuario altamente atractivas y modernas asegurando la mejor experiencia de navegación. También desarrollo Backend para crear Proyectos completos.</p>
                </div>
                <div className="home-buttons">
                    <ButtonPrimaryExternal href='https://wa.me/958711207?text=hola soy' text='Contactar' />
                    <ButtonSecondary to='/proyects' text='Ver Proyectos' />
                </div>
            </section>
            <HomeResume />
            <HomeProyect />
            <HomeSkill />
            <section className='education'>
                <div className="education-header">
                    <h2>Educación</h2>
                </div>
                <div className="education-container">
                    <div className="education-card">
                        <div className="education-card-logo">
                            <svg width="50" height="50" viewBox="0 0 100 101"><path fill="#243CDE" d="M28.7 10.8c-2.1.3-3.2 1.3-4.9 4.5C21.2 20.6 10.3 39.7 8 43c-.9 1.4-2.2 3.9-2.9 5.7-1.2 3-1 3.6 3.9 11.7l5.2 8.6 24.5-.2 24.6-.3 2.9-5.2 2.9-5.1-3.1-5.6-3.2-5.6h-9.7c-9.7 0-12.5-.9-11.4-3.6.4-1.1 3.2-1.4 12.2-1.4 13.1 0 11.3-1 17.7 10.2l3.3 5.8-4.6 8-4.5 8H41.9c-18.8 0-23.9.3-23.9 1.3 0 .7 2.1 4.7 4.6 9l4.6 7.7 23.1-.2 23.1-.3L84.7 72c6.1-10.7 11.2-20.2 11.2-21 .1-.9-1-3.2-2.4-5.2s-2.5-4-2.5-4.3c0-.3-1.2-2.3-2.6-4.5l-2.7-4H37.2l-3.1 5.5L31 44l3.1 5.5 3.1 5.4 10.1.3c9.7.3 10.2.4 10.5 2.5.3 2.3.2 2.3-11.5 2.3H34.4l-3.2-5.3C29.4 51.8 28 49 28 48.5c0-.4-.7-1.6-1.5-2.4-1.2-1.5-.9-2.6 3.2-9.9l4.7-8.2h23.8c18.4 0 23.8-.3 23.8-1.3-.1-.6-1.4-3.5-3-6.2-1.6-2.8-3.5-6-4.1-7.3-.7-1.2-1.7-2.2-2.3-2.2-9.4-.3-41.8-.4-43.9-.2z" /></svg>
                        </div>
                        <div className="education-card-info">
                            <h3>Senati</h3>
                            <p>Ingenieria de Software con IA</p>
                            <span>2021 - Enero 2024, Arequipa - Peru</span>
                        </div>
                    </div>
                    <hr />
                    <div className="education-card">
                        <div className="education-card-logo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none"><g clip-path="url(#a)"><path fill="#fff" d="M41.427 8.138a1.291 1.291 0 0 0-.737.25c-.167.166-.336.408-.336.652 0 .416.492.987 1.402 1.923 3.796 3.654 5.705 8.13 5.692 13.529-.015 5.973-2.02 10.77-5.925 14.487-.82.736-1.158 1.313-1.16 1.806 0 .242.166.494.333.736.199.194.459.313.735.337.905 0 2.167-1.066 3.82-3.143 3.212-3.938 4.666-8.288 4.747-14.217.075-5.931-1.785-9.952-5.423-14.104-1.312-1.484-2.402-2.254-3.148-2.256Zm-32.852.004c-.746 0-1.837.77-3.146 2.256C1.788 14.55-.073 18.57.002 24.502c.084 5.93 1.536 10.277 4.75 14.217 1.648 2.077 2.913 3.146 3.817 3.143.276-.023.536-.142.733-.337.167-.242.334-.494.334-.735 0-.494-.338-1.071-1.159-1.805-3.902-3.718-5.91-8.514-5.925-14.49-.012-5.397 1.896-9.874 5.692-13.528.91-.936 1.404-1.504 1.402-1.923 0-.244-.167-.486-.335-.652a1.292 1.292 0 0 0-.738-.25h.002Zm14.7 1.864s1.365 4.336-5.519 14.015c-6.575 9.235 2.177 14.896 2.984 15.387-.586-.375-4.17-3.125.837-11.298.971-1.604 2.242-3.062 3.821-6.335 0 0 1.396 1.97.667 6.246-1.09 6.46 4.73 4.612 4.82 4.702 2.034 2.396-1.683 6.604-1.91 6.735-.225.127 10.617-6.52 2.915-16.53-.527.526-1.213 3.003-2.64 2.637-1.425-.363 4.427-7.28-5.975-15.559ZM20.74 39.408c.05.034.076.05.079.05l-.08-.05Z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h50v50H0z" /></clipPath></defs></svg>

                        </div>
                        <div className="education-card-info">
                            <h3>FreeCodeCamp</h3>
                            <p>Desarrollo Web</p>
                            <span>2022 - Actual 2024, Online</span>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}