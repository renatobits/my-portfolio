import './about.css'
import Codevs from '../../assets/codevvs.webp'
import ContactCard from './components/contactCard/ContactCard'
import SocialCard from './components/socialCard/SocialCard'
import Container from '../global/components/container/Container'
import ButtonPrimaryExternal from '../global/components/buttonPrimaryExternal/ButtonPrimaryExternal'
import IconLinkedin from '../../icons/icons-nav/IconLinkedin'
import IconGithub from '../../icons/icons-nav/IconGithub'


export default function About() {
    return (
        <Container title='About'>
            <section className='about-intro'>
                <div className="about-header">
                    <div className="about-info">
                        <div className="about-image">
                            <img src={Codevs} alt="" />
                            <div className="about-name">
                                <h2>Renato Dev</h2>
                                <p>Ing. en Software | Dev Web</p>
                                <span>Diseñador UX/UI</span>
                            </div>
                        </div>
                        <ButtonPrimaryExternal href='https://wa.me/958711207?text=Hola soy' text='Enviar Mensaje' />
                    </div>
                    <p>Soy Renato Ingeniero de Software, un profesional apasiodo por el Desarrollo web especialmente en el Front-end.</p>
                    <p>Me considero una persona responsable y creativa, Disfruto de la creación de interfaces de usuario altamente atractivas y modernas asegurando la mejor experiencia de navegación de los usuarios.</p>
                    <p>Tambien mis conocimientos me permiten hacer desarrollo Back-end para crear proyectos completos y eficientes. Me gusta asumir retos
                        desafiantes asi mismo aportar en el trabajo en equipo</p>
                    <p>Como principal objetivo a mediano y largo plazo es convertirme en un experto Desarrollador FullStack para contribuir a la creación de soluciones innovadoras y eficientes en la industria.</p>
                </div>
            </section>
            <section className='about-contact'>
                <h2>Información de contacto</h2>
                <div className="contact-info">
                    <ContactCard title='apazaarenato@gmail.com' label='Emial' href='mailto:apazaarenato@gmail.com'>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.3333 4H9.33333C7.65363 4 6.04272 4.66726 4.85499 5.85499C3.66726 7.04272 3 8.65363 3 10.3333V22.3333C3 23.165 3.16382 23.9886 3.4821 24.757C3.80038 25.5254 4.26689 26.2236 4.85499 26.8117C6.04272 27.9994 7.65363 28.6667 9.33333 28.6667H23.3333C25.012 28.6631 26.6208 27.9948 27.8078 26.8078C28.9948 25.6208 29.6631 24.012 29.6667 22.3333V10.3333C29.6631 8.65471 28.9948 7.04585 27.8078 5.85888C26.6208 4.67191 25.012 4.00352 23.3333 4ZM18.4667 15.0933C17.8107 15.4674 17.0685 15.6642 16.3133 15.6642C15.5582 15.6642 14.816 15.4674 14.16 15.0933L5.02667 9.85333C5.14476 8.79373 5.64934 7.81486 6.44389 7.10395C7.23843 6.39304 8.26717 6 9.33333 6H23.3333C24.3987 6.00292 25.4258 6.39698 26.2198 7.10733C27.0137 7.81769 27.5191 8.79488 27.64 9.85333L18.4667 15.0933Z" fill="#0070F7" />
                        </svg>

                    </ContactCard>
                    <ContactCard title='Mensaje por WhatsApp' label='Emial' href='https://wa.me/958711207?text=hola soy' target='_blank'>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.67199 24.6587L10.6373 25.2227C12.2652 26.1721 14.1168 26.6705 16.0013 26.6667C18.111 26.6667 20.1733 26.0411 21.9274 24.869C23.6815 23.6969 25.0487 22.031 25.856 20.0819C26.6634 18.1329 26.8746 15.9882 26.463 13.919C26.0515 11.8499 25.0356 9.94928 23.5438 8.45752C22.052 6.96576 20.1514 5.94986 18.0823 5.53828C16.0132 5.1267 13.8684 5.33794 11.9194 6.14528C9.97029 6.95261 8.30438 8.31978 7.13231 10.0739C5.96024 11.828 5.33465 13.8903 5.33465 16C5.33076 17.8851 5.82968 19.7372 6.77999 21.3653L7.34265 22.3307L6.47199 25.532L9.67199 24.6587ZM2.67332 29.3333L4.47599 22.7093C3.28811 20.6732 2.66405 18.3573 2.66799 16C2.66799 8.63599 8.63732 2.66666 16.0013 2.66666C23.3653 2.66666 29.3347 8.63599 29.3347 16C29.3347 23.364 23.3653 29.3333 16.0013 29.3333C13.645 29.3371 11.3302 28.7136 9.29465 27.5267L2.67332 29.3333ZM11.1893 9.74399C11.368 9.73066 11.548 9.73066 11.7267 9.73866C11.7987 9.74399 11.8707 9.75199 11.9427 9.75999C12.1547 9.78399 12.388 9.91332 12.4667 10.092C12.864 10.9933 13.2507 11.9013 13.624 12.812C13.7067 13.0147 13.6573 13.2747 13.5 13.528C13.42 13.6573 13.2947 13.8387 13.1493 14.024C12.9987 14.2173 12.6747 14.572 12.6747 14.572C12.6747 14.572 12.5427 14.7293 12.5933 14.9253C12.612 15 12.6733 15.108 12.7293 15.1987L12.808 15.3253C13.1493 15.8947 13.608 16.472 14.168 17.016C14.328 17.1707 14.484 17.3293 14.652 17.4773C15.276 18.028 15.9827 18.4773 16.7453 18.8107L16.752 18.8133C16.8653 18.8627 16.9227 18.8893 17.088 18.96C17.1707 18.9947 17.256 19.024 17.3427 19.048C17.4322 19.0708 17.5265 19.0665 17.6136 19.0356C17.7008 19.0048 17.7768 18.9488 17.832 18.8747C18.7973 17.7053 18.8853 17.6293 18.8933 17.6293V17.632C18.9604 17.5694 19.0401 17.522 19.127 17.4928C19.2139 17.4636 19.3061 17.4533 19.3973 17.4627C19.4773 17.468 19.5587 17.4827 19.6333 17.516C20.3413 17.84 21.5 18.3453 21.5 18.3453L22.276 18.6933C22.4067 18.756 22.5253 18.904 22.5293 19.0467C22.5347 19.136 22.5427 19.28 22.512 19.544C22.4693 19.8893 22.3653 20.304 22.2613 20.5213C22.19 20.6696 22.0955 20.8055 21.9813 20.924C21.8468 21.0652 21.6995 21.1938 21.5413 21.308C21.432 21.3907 21.3747 21.428 21.3747 21.428C21.2088 21.5331 21.0384 21.631 20.864 21.7213C20.5207 21.9037 20.1415 22.0084 19.7533 22.028C19.5067 22.0413 19.26 22.06 19.012 22.0467C19.0013 22.0467 18.2547 21.9307 18.2547 21.9307C16.359 21.432 14.6058 20.4979 13.1347 19.2027C12.8333 18.9373 12.5533 18.652 12.268 18.368C11.084 17.188 10.1867 15.9147 9.64132 14.712C9.3636 14.122 9.21366 13.48 9.20132 12.828C9.19631 12.0183 9.4614 11.2301 9.95465 10.588C10.052 10.4627 10.144 10.332 10.3027 10.1813C10.4707 10.0213 10.5787 9.93599 10.6947 9.87732C10.8489 9.80003 11.0171 9.75468 11.1893 9.74399Z" fill="#0070F7" />
                        </svg>

                    </ContactCard>
                </div>
            </section>
            <section className='contact-socials'>
                <h2>Redes Sociales</h2>
                <div className="socials">
                    <SocialCard href='https://www.linkedin.com/in/a-renato-devv/'>
                        <IconLinkedin />
                        Linkedin
                    </SocialCard>
                    <SocialCard href='https://github.com/renatobits'>
                        <IconGithub />
                        Github
                    </SocialCard>
                </div>
            </section>
        </Container>
    )
}