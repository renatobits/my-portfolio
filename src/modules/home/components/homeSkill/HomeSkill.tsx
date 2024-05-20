import { ReactNode } from 'react'
import './homeskill.css'
import IconCss from '../../../../icons/icons-skill/IconCss'
import IconHtml from '../../../../icons/icons-skill/IconHtml'
import IconFigma from '../../../../icons/icons-skill/IconFigma'
import IconReact from '../../../../icons/icons-skill/IconReact'
import IconLaravel from '../../../../icons/icons-skill/IconLaravel'
import IconWordpress from '../../../../icons/icons-skill/IconWordpress'
import ButtonMoreInfo from '../../../global/components/buttonMoreInfo/ButtonMoreInfo'

interface HomeSkillProps {
    id: number,
    icon: ReactNode,
    title: string,
    description: string,
}
const DATA_SKILL = [
    {
        id: 1,
        icon: <IconHtml />,
        title: 'HTML',
        description: 'Para la maquetación de todas las interfaces.',
    },
    {
        id: 2,
        icon: <IconCss />,
        title: 'CSS',
        description: 'Para la maquetación de todas las interfaces.',
    },
    {
        id: 3,
        icon: <IconFigma />,
        title: 'Figma',
        description: 'Para diseño de interfaces y prototipado.',
    },
    {
        id: 4,
        icon: <IconReact />,
        title: 'React',
        description: 'Para construir interfaces modernas e interactivas.',
    },
    {
        id: 5,
        icon: <IconLaravel />,
        title: 'Laravel',
        description: 'Para el desarrollo del backend  de mis proyectos.',
    },
    {
        id: 6,
        icon: <IconWordpress />,
        title: 'WordPress',
        description: 'Para realizar proyectos pequeños menos personalizados.',
    }
]
export default function HomeSkill() {
    return (
        <section className='home-skill'>
            <div className="skill-header">
                <h2>Tecnologias</h2>
                <ButtonMoreInfo to='/skill' text='Ver más' />
            </div>
            <div className="home-skill-container">
                {
                    DATA_SKILL.map((datas, index) => {
                        return (
                            <div className="home-skill-card">
                                <div className="skill-card-icon">
                                    {datas.icon}
                                </div>
                                <div className="skill-card-name">
                                    <h3>{datas.title}</h3>
                                    <p>{datas.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}