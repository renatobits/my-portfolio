import { ReactNode } from "react"
import './contactcard.css'
interface ContactCardProps {
    children: ReactNode;
    href: string;
    title: string;
    label: string;
}
export default function ContactCard({ children, href, title, label }: ContactCardProps) {
    return (
        <article>
            <div className="icon">
                {children}
            </div>
            <div className="date">
                <a href={href}>
                    {title}
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.93652 5.25C4.93652 5.6625 5.27402 6 5.68652 6H11.379L4.71902 12.66C4.64958 12.7294 4.5945 12.8119 4.55692 12.9026C4.51934 12.9933 4.5 13.0906 4.5 13.1887C4.5 13.2869 4.51934 13.3842 4.55692 13.4749C4.5945 13.5656 4.64958 13.6481 4.71902 13.7175C4.78845 13.7869 4.87089 13.842 4.96161 13.8796C5.05233 13.9172 5.14957 13.9365 5.24777 13.9365C5.34596 13.9365 5.4432 13.9172 5.53392 13.8796C5.62465 13.842 5.70708 13.7869 5.77652 13.7175L12.4365 7.0575V12.75C12.4365 13.1625 12.774 13.5 13.1865 13.5C13.599 13.5 13.9365 13.1625 13.9365 12.75V5.25C13.9365 4.8375 13.599 4.5 13.1865 4.5H5.68652C5.27402 4.5 4.93652 4.8375 4.93652 5.25Z" fill="currentColor" />
                    </svg>
                </a>
                <span>{label}</span>
            </div>
        </article>
    )
}