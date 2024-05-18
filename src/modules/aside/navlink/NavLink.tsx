import { ReactNode } from "react";
import './navlink.css'
import { Link } from "react-router-dom";
interface NavLinkProps {
    children?: ReactNode;
    to: string;
}
export default function NavLink ({children, to}: NavLinkProps) {
    return (
        <Link to={to}>
            {children}
        </Link>
    )
}