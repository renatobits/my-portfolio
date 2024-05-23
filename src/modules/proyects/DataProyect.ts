import ImageP from '../../assets/work.png'
import Univerzz from '../../assets/univerzz.webp'
import VivoWeb from '../../assets/vivowebs.webp'
import Horizone from '../../assets/horizone.webp'


interface DataProyectProps {
    id: number,
    img: string;
    title: string;
    description: string;
    subtitle: string;
    label: string[];
    subtitlelink: string;
    link: string;
}
export const DataProyect: DataProyectProps[] = [
    {
        id: 1,
        img: Univerzz,
        title: 'Maquetación Web de Universidad',
        description: 'Maquetación de Landing Page con temática de una Universidad con sus diferentes secciones.',
        subtitle: 'Tecnologias usadas',
        label: ['HTML', 'CSS', 'Javascript', 'Astro'],
        subtitlelink: 'Ver Proyecto',
        link: 'https://univerzz.netlify.app',

    },
    {
        id: 1,
        img: VivoWeb,
        title: 'Vivo Web Ecommerce',
        description: 'Maquetación de una Web tipo Ecommerce para venta de prendas de vestir.',
        subtitle: 'Tecnologias usadas',
        label: ['HTML', 'CSS', 'Javascript', 'Astro'],
        subtitlelink: 'Ver Proyecto',
        link: 'https://vivoweb.vercel.app',

    },
    {
        id: 1,
        img: Horizone,
        title: 'Horizone Página web en WordPress',
        description: 'Desarrollo de una web sencilla para un salon de Belleza con sus principales secciones usando WordPress.',
        subtitle: 'Tecnologias usadas',
        label: ['WorPress'],
        subtitlelink: 'Ver Proyecto',
        link: 'http://horizone.kesug.com/',

    },
    {
        id: 1,
        img: ImageP,
        title: 'Aplicación Web para Agencias',
        description: 'Desarrollo de Aplicación para la Agencia SquareUp. Una aplicación web que consume informacion desde una base d datos',
        subtitle: 'Tecnologias usadas',
        label: ['HTML', 'CSS', 'Javascript', 'React'],
        subtitlelink: 'Ver Proyecto',
        link: '#',

    },
];