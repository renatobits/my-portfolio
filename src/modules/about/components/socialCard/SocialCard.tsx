import { ReactNode } from 'react'
import './socialcard.css'


interface SocialCardProps {
    children: ReactNode;
}
export default function SocialCard ({children}: SocialCardProps) {
    return (
        <a href="" className='social-link'>
            {children}
        </a>
    )
}