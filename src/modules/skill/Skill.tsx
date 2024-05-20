import { useState } from 'react'
import './skill.css'
import IconCss from '../../icons/icons-skill/IconCss';
import { skillData, skillDataDesign, skillDataTools } from './skillData';
import { skillDataRight } from './skillData';
import SkillCard from './components/skillCard/SkillCard';

export default function Skill() {

    const [activeArrowR, setActiveArrowsR] = useState<boolean[]>(Array(skillDataRight.length).fill(false));
    const toggleCardR = (index: number) => {
        setActiveArrowsR((prevState) => prevState.map((isActive, i) => (i === index ? !isActive : isActive)));
    };

    const [activeArrow, setActiveArrows] = useState<boolean[]>(Array(skillData.length).fill(false));
    const toggleCard = (index: number) => {
        setActiveArrows((prevState) =>
            prevState.map((isActive, i) => (i === index ? !isActive : isActive))
        );
    };

    return (
        <div className="skill">
            <section className="skill-intro">
                <h2>Skills</h2>
                <p>Los proyectos estan separados en proyectos full-stack, frontend. backend</p>
            </section>
            <section className='skill-container'>
                <h2>Tecnologias</h2>
                <div className="skills">
                    <div className="skill-left">
                        {
                            skillData.map((skill, index) => (
                                <SkillCard
                                    key={skill.id}
                                    index={index}
                                    icon={skill.icon()}
                                    title={skill.title}
                                    subtitle={skill.subtitle}
                                    description={skill.description}
                                    isActive={activeArrow[index]}
                                    toggleCard={toggleCard}
                                />
                            ))
                        }
                    </div>
                    <div className="skill-left">
                        {
                            skillDataRight.map((skills, index) => (
                                <SkillCard
                                    key={skills.id}
                                    index={index}
                                    icon={skills.icon()}
                                    title={skills.title}
                                    subtitle={skills.subtitle}
                                    description={skills.description}
                                    isActive={activeArrowR[index]}
                                    toggleCard={toggleCardR}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className='skill-container'>
                <h2>Diseño</h2>
                <div className="skills">
                    <div className="skill-left">
                        {
                            skillDataDesign.map((skill, index) => (
                                <SkillCard
                                    key={skill.id}
                                    index={index}
                                    icon={skill.icon()}
                                    title={skill.title}
                                    subtitle={skill.subtitle}
                                    description={skill.description}
                                    isActive={activeArrow[index]}
                                    toggleCard={toggleCard}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className='skill-container'>
                <h2>Herramientas esenciales</h2>
                <div className="skills">
                    <div className="skill-left">
                        {
                            skillDataTools.map((skill, index) => (
                                <SkillCard
                                    key={skill.id}
                                    index={index}
                                    icon={skill.icon()}
                                    title={skill.title}
                                    subtitle={skill.subtitle}
                                    description={skill.description}
                                    isActive={activeArrow[index]}
                                    toggleCard={toggleCard}
                                />
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}