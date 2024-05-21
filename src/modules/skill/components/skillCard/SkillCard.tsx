import { ReactNode } from "react";
import './skillcard.css'
import { Link } from "react-router-dom";

interface SkillCardProps {
    index: number;
    icon: ReactNode;
    title: string;
    subtitle: string;
    description: string;
    isActive: boolean;
    toggleCard: (index: number) => void;
}


export default function SkillCard({ index, icon, title, subtitle, description, isActive, toggleCard }: SkillCardProps) {


    return (
        <>
            <article
                className={isActive ? 'card active' : 'card '}>
                <div
                    className="card-header">
                    <div
                        className="card-icon">
                        {icon}
                        <h3>{title}</h3>
                    </div>
                    <button
                        className={isActive ? 'button active' : 'button'}
                        onClick={() =>
                            toggleCard(index)}>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none">
                            <path
                                d="M2.99019 7.37999C2.50019 7.86999 2.50019 8.65999 2.99019 9.14999L11.3002 17.46C11.3927 17.5527 11.5026 17.6262 11.6236 17.6764C11.7445 17.7266 11.8742 17.7524 12.0052 17.7524C12.1362 17.7524 12.2658 17.7266 12.3868 17.6764C12.5078 17.6262 12.6177 17.5527 12.7102 17.46L21.0202 9.14999C21.5102 8.65999 21.5102 7.86999 21.0202 7.37999C20.5302 6.88999 19.7402 6.88999 19.2502 7.37999L12.0002 14.62L4.75019 7.36999C4.2702 6.88999 3.47019 6.88999 2.99019 7.37999Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                </div>
                <h4>{subtitle}</h4>
                <p>{description}</p>
                <Link to="/proyects">Ver Proyectos</Link>
            </article>
        </>
    )
}