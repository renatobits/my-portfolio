import { Link } from "react-router-dom";
import IconExternal from "../../../../icons/IconExternal";
import './buttonmoreinfo.css'


interface ButtonMoreInfoProps {
    to: string;
    text: string;
}
export default function ButtonMoreInfo({ to, text }: ButtonMoreInfoProps) {
    return (
        <Link to={to} className="button-more-info">
            {text}
            <IconExternal />
        </Link>
    )
}