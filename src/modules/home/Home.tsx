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
import HomeResume from './components/homeResume/HomeResume'
import HomeProyect from './components/homeProyect/HomeProyect'
import HomeSkill from './components/homeSkill/HomeSkill'



export default function Home() {
    return (
        <div className='home-container'>
            <section className='home'>
                <div className="home-header">
                    <h1>Hey, Soy Renato</h1>
                    <h2>Soy Desarrollador Web</h2>
                    <p>Desarrollador Web apasionado por la tecnologia creando interfaces de usuario altamente atractivas y modernas para asegurar la mejor experiencia de los usuarios.</p>
                </div>
                <div className="home-buttons">
                    <ButtonPrimaryExternal href='#' text='Contactar' />
                    <ButtonSecondary to='/proyects' text='Ver Proyectos' />
                </div>
            </section>
            <HomeResume />
            <HomeProyect />
            <HomeSkill />
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