import { ReactNode } from "react";
import { Link } from "react-router-dom";
import './navlink.css'


interface NavLinkProps {
    children?: ReactNode;
    to: string;
}
export default function NavLink ({children, to}: NavLinkProps) {
    return (
        <Link to={to} className="nav-link">
            {children}
        </Link>
    )
}