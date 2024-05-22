import { ReactNode } from 'react'
import './socialcard.css'


interface SocialCardProps {
    children: ReactNode;
    href: string;
}
export default function SocialCard ({children, href}: SocialCardProps) {
    return (
        <a href={href} className='social-link' target='_blank'>
            {children}
        </a>
    )
}