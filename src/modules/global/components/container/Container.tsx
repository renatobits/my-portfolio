import { ReactNode } from 'react'
import './container.css'


interface ContactarProps {
    title?: string;
    desctiption?: string;
    children: ReactNode;
}
export default function Container({ title, desctiption, children }: ContactarProps) {
    return (
        <div className="container">
            <h1>{title}</h1>
            <p>{desctiption}</p>
            {children}
        </div>
    )
}