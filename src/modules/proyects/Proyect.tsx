import './proyect.css'
import Container from '../global/components/container/Container'
import ProyectCard from './components/proyectCard/ProyectCard'
import Badge from './components/badge/Badge'
import { DataProyect } from './DataProyect'


export default function Proyect() {
    return (
        <Container
            title='Proyectos'
            desctiption='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab magni, ipsum dolorem reiciendis impedit quaerat! Sit sunt nostrum consequatur harum praesentium aut vero facilis, iusto consequuntur nulla nobis libero atque.'>
            <div className="proyect-navigation">
                <a href="">Todos</a>
                <a href="">Proyectos Full-Stack</a>
                <a href="">Proyectos Frontend</a>
                <a href="">Proyectos Diseño</a>
            </div>
            <div className="proyect-container">
                {
                    DataProyect.map((proyect) => (
                        <ProyectCard
                            key={proyect.id}
                            src={proyect.img}
                            title={proyect.title}
                            description={proyect.description}
                            subtitle={proyect.subtitle}
                            subtitlelink={proyect.link}
                            link={proyect.link}>
                            {
                                proyect.label.map((labels, index) => (
                                    <Badge
                                        key={index}
                                        title={labels} />
                                ))
                            }
                        </ProyectCard>
                    ))
                }
            </div>
        </Container>
    )
}