import { ReactNode } from "react";
import { Link } from "react-router-dom";
import './moreinfolink.css'
interface MoreInfoLinkProps {
    children: ReactNode;
    to: string;
}
export default function MoreInfoLink({ to, children }: MoreInfoLinkProps) {
    return (
        <Link to={to} className="more-info">
            {children}
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.77657 15.7981C6.14407 16.1656 6.73657 16.1656 7.10407 15.7981L13.3366 9.56562C13.4061 9.49624 13.4613 9.41382 13.4989 9.32309C13.5365 9.23236 13.5559 9.1351 13.5559 9.03687C13.5559 8.93865 13.5365 8.84139 13.4989 8.75066C13.4613 8.65993 13.4061 8.57751 13.3366 8.50812L7.10407 2.27562C6.73657 1.90812 6.14407 1.90812 5.77657 2.27562C5.40907 2.64312 5.40907 3.23563 5.77657 3.60313L11.2066 9.04062L5.76907 14.4781C5.40907 14.8381 5.40907 15.4381 5.77657 15.7981Z" fill="currentColor" />
            </svg>
        </Link>
    )
}