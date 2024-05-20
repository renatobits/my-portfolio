import { ReactNode } from 'react'
import './productcard.css'
import ExternalLink from '../../../global/components/externalLink/ExternalLink';

interface ProyectCardProps {
    src: string;
    title: string;
    description: string;
    subtitle: string;
    children: ReactNode;
    subtitlelink: string;
    link: string;
}

export default function ProyectCard({ src, title, description, subtitle, children, subtitlelink, link }: ProyectCardProps) {
    return (
        <article className="product-card">
            <img src={src} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
            <h3>{subtitle}</h3>
            <ul>
                {children}
            </ul>
            <h3>{subtitlelink}</h3>
            <ExternalLink link={link} />
        </article>
    )
}