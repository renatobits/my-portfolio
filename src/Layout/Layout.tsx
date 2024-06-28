import { Outlet } from "react-router-dom";
import './layout.css'
import Aside from "../modules/aside/Aside";

export default function Layout() {
    return (
        <div className="layout">
            <Aside />
            <main className="principal">
                <header>
                    <span>Versión 1.0</span>
                </header>
                <div className="container">
                    <Outlet />
                    <footer>
                        <span>© 2024 Renato Dev | Todos los derechos reservados </span><a href="">Consulte términos y condiciones de copyright </a>
                    </footer>
                </div>


            </main>
        </div>
    )
}