import { Link } from "react-router-dom";

interface ButtonSecondaryProps {
    to: string;
    text: string;
}
export default function ButtonSecondary({ to, text }: ButtonSecondaryProps) {
    return (
        <Link to={to} className="button-secondary">
            {text}
            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.77657 16.2981C6.14407 16.6656 6.73657 16.6656 7.10407 16.2981L13.3366 10.0656C13.4061 9.99624 13.4613 9.91382 13.4989 9.82309C13.5365 9.73236 13.5559 9.6351 13.5559 9.53687C13.5559 9.43865 13.5365 9.34139 13.4989 9.25066C13.4613 9.15993 13.4061 9.07751 13.3366 9.00812L7.10407 2.77562C6.73657 2.40812 6.14407 2.40812 5.77657 2.77562C5.40907 3.14312 5.40907 3.73563 5.77657 4.10313L11.2066 9.54062L5.76907 14.9781C5.40907 15.3381 5.40907 15.9381 5.77657 16.2981Z" fill="currentColor" />
            </svg>
        </Link>
    )
}