import { Outlet } from "react-router-dom";
import './layout.css'
import Aside from "../modules/aside/Aside";

export default function Layout () {
    return  (
        <div className="container">
            <Aside />
            <main className="principal">
                <Outlet />
            </main>
        </div>
    )
}