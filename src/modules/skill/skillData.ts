import { ReactNode } from "react";
import IconHtml from "../../icons/icons-skill/IconHtml";
import IconJavascript from "../../icons/icons-skill/IconJavascript"; 
import IconReact from "../../icons/icons-skill/IconReact";
import IconBootstrap from "../../icons/icons-skill/IconBootstrap";
import IconPhp from "../../icons/icons-skill/IconPhp";
import IconCss from "../../icons/icons-skill/IconCss";
import IconLaravel from "../../icons/icons-skill/IconLaravel";
import IconWordpress from "../../icons/icons-skill/IconWordpress";
import IconAstro from "../../icons/icons-skill/IconAstro";
import IconNext from "../../icons/icons-skill/IconNext";
import IconTailwind from "../../icons/icons-skill/IconTailwind";
import IconFlutter from "../../icons/icons-skill/IconFlutter";
import IconFigma from "../../icons/icons-skill/IconFigma";
import IconGit from "../../icons/icons-skill/IconGit";
import IconAzure from "../../icons/icons-skill/IconAzure";


export type IconType = typeof IconHtml | typeof IconCss | typeof IconJavascript | typeof IconReact | typeof IconBootstrap | typeof IconPhp | typeof IconAstro | typeof IconNext | typeof IconTailwind | typeof IconFlutter; // ... (Agregar más tipos de íconos);

export interface SkillDataProps {
    id: number;
    icon: IconType;
    title: string;
    subtitle: string;
    description: string;
}

export const skillData: SkillDataProps[] = [
    {
        id: 1,
        icon: IconHtml,
        title: 'HTML',
        subtitle: 'Maquetación y Estructura Web',
        description: 'HTML para estructurar todo el contenido de la página web, asegurándome de usar la semántica correcta y las metaetiquetas adecuadas para mejorar el SEO.',
    },
    {
        id: 2,
        icon: IconJavascript,
        title: 'Javascript',
        subtitle: 'Estilización y Diseño Visual',
        description: 'Empleo CSS para darle estilo y formato a las páginas web, creando diseños atractivos y responsivos que mejoran la experiencia del usuario.',
    },
    {
        id: 3,
        icon: IconReact,
        title: 'React',
        subtitle: 'Interactividad y Dinamismo',
        description: 'Utilizo JavaScript para agregar interactividad y dinamismo a las páginas web, mejorando la experiencia del usuario con funcionalidades avanzadas.',
    },
    {
        id: 4,
        icon: IconBootstrap,
        title: 'Bootstrap',
        subtitle: 'Interactividad y Dinamismo',
        description: 'Utilizo JavaScript para agregar interactividad y dinamismo a las páginas web, mejorando la experiencia del usuario con funcionalidades avanzadas.',
    },
    {
        id: 5,
        icon: IconPhp,
        title: 'Php',
        subtitle: 'Interactividad y Dinamismo',
        description: 'Utilizo JavaScript para agregar interactividad y dinamismo a las páginas web, mejorando la experiencia del usuario con funcionalidades avanzadas.',
    },
    {
        id: 6,
        icon: IconWordpress,
        title: 'WordPress',
        subtitle: 'Interactividad y Dinamismo',
        description: 'Utilizo JavaScript para agregar interactividad y dinamismo a las páginas web, mejorando la experiencia del usuario con funcionalidades avanzadas.',
    },
];


export const skillDataRight: SkillDataProps[] = [
    {
        id: 7,
        icon: IconCss,
        title: 'CSS',
        subtitle: 'Interactividad y Dinamismo',
        description: 'Empleo CSS para darle estilo y formato a las páginas web, creando diseños atractivos y responsivos que mejoran la experiencia del usuario.',
    },
    {
        id: 8,
        icon: IconAstro,
        title: 'Astro',
        subtitle: 'Interactividad y Dinamismo',
        description: 'Utilizo JavaScript para agregar interactividad y dinamismo a las páginas web, mejorando la experiencia del usuario con funcionalidades avanzadas.',
    },
    {
        id: 9,
        icon: IconNext,
        title: 'Next js',
        subtitle: 'Interactividad y Dinamismo',
        description: 'Utilizo JavaScript para agregar interactividad y dinamismo a las páginas web, mejorando la experiencia del usuario con funcionalidades avanzadas.',
    },
    {
        id: 10,
        icon: IconTailwind,
        title: 'Tailwind CSS',
        subtitle: 'Interactividad y Dinamismo',
        description: 'Utilizo JavaScript para agregar interactividad y dinamismo a las páginas web, mejorando la experiencia del usuario con funcionalidades avanzadas.',
    },
    {
        id: 11,
        icon: IconLaravel,
        title: 'Laravel',
        subtitle: 'Interactividad y Dinamismo',
        description: 'Utilizo JavaScript para agregar interactividad y dinamismo a las páginas web, mejorando la experiencia del usuario con funcionalidades avanzadas.',
    },
    {
        id: 12,
        icon: IconFlutter,
        title: 'Flutter',
        subtitle: 'Interactividad y Dinamismo',
        description: 'Utilizo JavaScript para agregar interactividad y dinamismo a las páginas web, mejorando la experiencia del usuario con funcionalidades avanzadas.',
    },
];

export const skillDataDesign = [
    {
        id: 14,
        icon: IconFigma,
        title: 'Figma',
        subtitle: 'Interactividad y Dinamismo',
        description: 'Utilizo JavaScript para agregar interactividad y dinamismo a las páginas web, mejorando la experiencia del usuario con funcionalidades avanzadas.',
    }
];
export const skillDataTools = [
    {
        id: 15,
        icon: IconGit,
        title: 'Figma',
        subtitle: 'Interactividad y Dinamismo',
        description: 'Utilizo JavaScript para agregar interactividad y dinamismo a las páginas web, mejorando la experiencia del usuario con funcionalidades avanzadas.',
    },
    {
        id: 16,
        icon: IconAzure,
        title: 'Figma',
        subtitle: 'Interactividad y Dinamismo',
        description: 'Utilizo JavaScript para agregar interactividad y dinamismo a las páginas web, mejorando la experiencia del usuario con funcionalidades avanzadas.',
    },
];