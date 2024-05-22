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
        title: 'Aplicación Web para Agencias',
        description: 'Desarrollo de Aplicación para la Agencia SquareUp. Una aplicación web que consume informacion desde una base d datos',
        subtitle: 'Tecnologias usadas',
        label: ['HTML', 'CSS', 'Javascript', 'React'],
        subtitlelink: 'Ver Proyecto',
        link: 'https://univerzz.netlify.app',

    },
    {
        id: 1,
        img: VivoWeb,
        title: 'Aplicación Web para Agencias',
        description: 'Desarrollo de Aplicación para la Agencia SquareUp. Una aplicación web que consume informacion desde una base d datos',
        subtitle: 'Tecnologias usadas',
        label: ['HTML', 'CSS', 'Javascript', 'React'],
        subtitlelink: 'Ver Proyecto',
        link: 'https://vivoweb.vercel.app',

    },
    {
        id: 1,
        img: Horizone,
        title: 'Aplicación Web para Agencias',
        description: 'Desarrollo de Aplicación para la Agencia SquareUp. Una aplicación web que consume informacion desde una base d datos',
        subtitle: 'Tecnologias usadas',
        label: ['HTML', 'CSS', 'Javascript', 'React'],
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
        link: 'https://renatodevs.vercel.app',

    },
];