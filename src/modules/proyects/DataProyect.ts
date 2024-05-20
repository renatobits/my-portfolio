import { ReactNode } from "react";
import ImageP from '../../assets/work.png'



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
        img: ImageP,
        title: 'Aplicación Web para Agencias',
        description: 'Desarrollo de Aplicación para la Agencia SquareUp. Una aplicación web que consume informacion desde una base d datos',
        subtitle: 'Tecnologias usadas',
        label: ['HTML', 'CSS', 'Javascript', 'React'],
        subtitlelink: 'Ver Proyecto',
        link: 'https://renatodevs.vercel.app',

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