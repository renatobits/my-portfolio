import './proyect.css'
import ProyectImage from '../../assets/work.png'


export default function Proyect() {
    return (
        <div className="proyect">
            <div className="proyect-intro">
                <h1>Proyectos</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab magni, ipsum dolorem reiciendis impedit quaerat! Sit sunt nostrum consequatur harum praesentium aut vero facilis, iusto consequuntur nulla nobis libero atque.</p>
            </div>
            <div className="proyect-navigation">
                <a href="">Todos</a>
                <a href="">Proyectos Full-Stack</a>
                <a href="">Proyectos Frontend</a>
                <a href="">Proyectos Diseño</a>
            </div>
            <div className="proyect-container">
                <div className="proyect-card">
                    <img src={ProyectImage} alt="" />
                    <h2>Aplicación web para Agencia</h2>
                    <p>Desarrollo de Aplicación para la Agencia SquareUp. Una aplicación web que consume informacion desde una base d datos </p>
                    <h3>Tecnologias usadas</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                    </ul>
                    <h3>Ver Proyecto</h3>
                    <a href="">https://renatodevs.vercel.app</a>
                </div>
                <div className="proyect-card">
                    <img src={ProyectImage} alt="" />
                    <h2>Aplicación web para Agencia</h2>
                    <p>Desarrollo de Aplicación para la Agencia SquareUp. Una aplicación web que consume informacion desde una base d datos </p>
                    <h3>Tecnologias usadas</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                    </ul>
                    <h3>Ver Proyecto</h3>
                    <a href="">https://renatodevs.vercel.app</a>
                </div>
            </div>
        </div>
    )
}