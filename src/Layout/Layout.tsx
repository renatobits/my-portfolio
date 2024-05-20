import { Outlet } from "react-router-dom";
import './layout.css'
import Aside from "../modules/aside/Aside";

export default function Layout() {
    return (
        <div className="container">
            <Aside />
            <main className="principal">
                <Outlet />
                <footer>
                    <span>© 2024 Renato Dev | Todos los derechos reservados </span><a href="">Consulte términos y condiciones de copyright </a>
                </footer>
            </main>
        </div>
    )
}