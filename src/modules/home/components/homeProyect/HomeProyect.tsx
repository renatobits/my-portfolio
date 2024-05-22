import ButtonMoreInfo from '../../../global/components/buttonMoreInfo/ButtonMoreInfo'
import Horizone from '../../../../assets/horizone.webp'
import Univerzz from '../../../../assets/univerzz.webp'
import VivoWeb from '../../../../assets/vivowebs.webp'
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
                    <img src={Univerzz} alt="" />
                    <h3>Maquetación Web de Landing Universidad</h3>
                    <ExternalLink link='https://univerzz.netlify.app/' />
                </div>
                <div className="last-card">
                    <img src={VivoWeb} alt="" />
                    <h3>Maquetación Web de Landing</h3>
                    <ExternalLink link='https://vivoweb.vercel.app' />
                </div>
                <div className="last-card">
                    <img src={Horizone} alt="" />
                    <h3>Página Web en WordPress</h3>
                    <ExternalLink link='http://horizone.kesug.com/' />
                </div>
            </div>
        </section>
    )
}