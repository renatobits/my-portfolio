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
        description: 'Utilizo JavaScript para agregar interactividad y dinamismo a las páginas web, mejorando la experiencia del usuario con funcionalidades avanzadas.',
    },
    {
        id: 3,
        icon: IconReact,
        title: 'React',
        subtitle: 'Interactividad y Dinamismo',
        description: 'React es mi herramienta principal para construir interfaces de usuario dinámicas y eficientes, aprovechando componentes reutilizables y la gestión de estados.',
    },
    {
        id: 4,
        icon: IconBootstrap,
        title: 'Bootstrap',
        subtitle: 'Interactividad y Dinamismo',
        description: 'Bootstrap me permite crear diseños responsivos de forma rápida y eficiente, utilizando su amplia colección de componentes predefinidos y su sistema de grillas.',
    },
    {
        id: 5,
        icon: IconPhp,
        title: 'Php',
        subtitle: 'Interactividad y Dinamismo',
        description: 'Uso PHP para desarrollar la lógica del servidor y gestionar la interacción con bases de datos, permitiendo crear aplicaciones web dinámicas y robustas.',
    },
    {
        id: 6,
        icon: IconWordpress,
        title: 'WordPress',
        subtitle: 'Interactividad y Dinamismo',
        description: 'Utilizo WordPress para crear y gestionar proyectos de sitios web pequeños y dinámicos, aprovechando su flexibilidad, extensibilidad y su gran ecosistema de plugins.',
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
        description: 'Astro permite construir sitios web ultrarrápidos utilizando un enfoque de componentes, combinando lo mejor de las tecnologías modernas con un rendimiento óptimo.',
    },
    {
        id: 9,
        icon: IconNext,
        title: 'Next js',
        subtitle: 'Interactividad y Dinamismo',
        description: 'Next.js es un framework de React que me permite crear aplicaciones web modernas con renderizado del lado del servidor y en el cliente.',
    },
    {
        id: 10,
        icon: IconTailwind,
        title: 'Tailwind CSS',
        subtitle: 'Interactividad y Dinamismo',
        description: 'Tailwind CSS me ayuda a construir rápidamente diseños personalizados utilizando clases de utilidad, ofreciendo flexibilidad y un control detallado sobre el estilo.',
    },
    {
        id: 11,
        icon: IconLaravel,
        title: 'Laravel',
        subtitle: 'Interactividad y Dinamismo',
        description: 'Laravel es mi framework preferido para desarrollar aplicaciones web en PHP, aprovechando su arquitectura MVC, herramientas de línea de comandos y soporte.',
    },
    {
        id: 12,
        icon: IconFlutter,
        title: 'Flutter',
        subtitle: 'Interactividad y Dinamismo',
        description: 'Para ser un profesional completo en el campo de la tecnologia actualiemente estoy preparandome en dicha tecnología por su gran aceptación del público y beneficios que ofrece para el desarrollo móvil.',
    },
];

export const skillDataDesign = [
    {
        id: 14,
        icon: IconFigma,
        title: 'Figma',
        subtitle: 'Interactividad y Dinamismo',
        description: 'Utilizo Figma para diseñar interfaces de usuario y crear prototipos interactivos, facilitando la colaboración y el feedback en el proceso de diseño.',
    }
];
export const skillDataTools = [
    {
        id: 15,
        icon: IconGit,
        title: 'Git',
        subtitle: 'Control de Versiones',
        description: 'Utilizo Git para gestionar el control de versiones en mis proyectos, facilitando la colaboración con otros desarrolladores y asegurando un historial claro y organizado de cambios.',
    },
    {
        id: 16,
        icon: IconAzure,
        title: 'Azure',
        subtitle: 'Despliegue y servicios Cloud',
        description: 'Conosco el entorno de Azure y algunos de sus productos para el despliegue de software, creación de maquinas virtuales, gestion de base de datos, despliegue de servicios API, etc.',
    },
];