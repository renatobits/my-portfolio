import ButtonMoreInfo from '../../../global/components/buttonMoreInfo/ButtonMoreInfo'
import Work from '../../../../assets/work.png'
import './homeproyect.css'
import ExternalLink from '../../../global/components/externalLink/ExternalLink'

export default function HomeProyect() {
    return (
        <section className='home-proyect'>
            <div className="works-header">
                <h2>Últimos Proyectos</h2>
                <ButtonMoreInfo to='/proyects' text='Ver más' />
            </div>
            <div className="work-container">
                <div className="last-card">
                    <img src={Work} alt="" />
                    <h3>Proyecto Pagina web de Agencia</h3>
                    <ExternalLink link='https://renatodevs.vercel.app' />
                </div>
                <div className="last-card">
                    <img src={Work} alt="" />
                    <h3>Proyecto Pagina web de Agencia</h3>
                    <ExternalLink link='https://renatodevs.vercel.app' />
                </div>
            </div>
        </section>
    )
}