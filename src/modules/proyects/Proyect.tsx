import './proyect.css'
import Container from '../global/components/container/Container'
import ProyectCard from './components/proyectCard/ProyectCard'
import Badge from './components/badge/Badge'
import { DataProyect } from './DataProyect'


export default function Proyect() {
    return (
        <Container
            title='Proyectos'
            desctiption='Mis proyectos desarrollados desde Maquetación de sitios estáticos hasta dinámicas con Backend.'>
            {/* <div className="proyect-navigation">
                <a href="">Todos</a>
                <a href="">Proyectos Full-Stack</a>
                <a href="">Proyectos Frontend</a>
                <a href="">Proyectos Diseño</a>
            </div> */}
            <div className="proyect-container">
                {
                    DataProyect.map((proyect) => (
                        <ProyectCard
                            key={proyect.id}
                            src={proyect.img}
                            title={proyect.title}
                            description={proyect.description}
                            subtitle={proyect.subtitle}
                            subtitlelink={proyect.subtitlelink}
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