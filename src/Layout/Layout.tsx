import { Outlet } from "react-router-dom";
import './layout.css'
import Aside from "../modules/aside/Aside";

export default function Layout() {
    return (
        <div className="layout">
            <Aside />
            <main className="principal">
                <header>
                    <span>Versión 1.2</span>
                </header>
                <div className="app">
                    <Outlet />
                    <footer>
                        <span>Renato Dev ❤️ © 2024 | Todos los derechos reservados </span><a href="">Consulte términos y condiciones de copyright </a>
                    </footer>
                </div>
            </main>
        </div>
    )
}