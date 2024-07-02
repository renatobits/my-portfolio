import { ReactNode } from 'react'
import './homeskill.css'
import IconCss from '../../../../icons/icons-skill/IconCss'
import IconHtml from '../../../../icons/icons-skill/IconHtml'
import IconFigma from '../../../../icons/icons-skill/IconFigma'
import IconReact from '../../../../icons/icons-skill/IconReact'
import IconLaravel from '../../../../icons/icons-skill/IconLaravel'
import IconWordpress from '../../../../icons/icons-skill/IconWordpress'
import ButtonMoreInfo from '../../../global/components/buttonMoreInfo/ButtonMoreInfo'
import IconJavascript from '../../../../icons/icons-skill/IconJavascript'

interface HomeSkillProps {
    id: number,
    icon: ReactNode,
    title: string,
    description: string,
}
const DATA_SKILL: HomeSkillProps[] = [
    {
        id: 1,
        icon: <IconHtml />,
        title: 'HTML',
        description: 'Maquetación semántica',
    },
    {
        id: 2,
        icon: <IconCss />,
        title: 'CSS',
        description: 'Estilos',
    },
    {
        id: 3,
        icon: <IconJavascript />,
        title: 'Javascript',
        description: 'Interactividad y animaciones',
    },
    {
        id: 4,
        icon: <IconFigma />,
        title: 'Figma',
        description: 'Diseño ux/ui y prototipado.',
    },
    {
        id: 5,
        icon: <IconReact />,
        title: 'React',
        description: 'Desarrollo de UI Modernas',
    },
    {
        id: 6,
        icon: <IconLaravel />,
        title: 'Laravel',
        description: 'Desarrollo Backend y Api',
    },
    {
        id: 7,
        icon: <IconWordpress />,
        title: 'WordPress',
        description: 'Desarrollo Web',
    }
]
export default function HomeSkill() {
    return (
        <section className='home-skill'>
            <div className="skill-header">
                <h2>Tecnologias</h2>
                <ButtonMoreInfo to='/skills' text='Ver más' />
            </div>
            <div className="home-skill-container">
                {
                    DATA_SKILL.map((datas, index) => {
                        return (
                            <div className="home-skill-card" key={index}>
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