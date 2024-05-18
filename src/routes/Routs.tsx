import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../modules/home/Home";
import Proyect from "../modules/proyects/Proyect";
import Skill from "../modules/skill/Skill";
import Work from "../modules/work/Work";
import About from "../modules/about/About";
import Contact from "../modules/contact/Contact";
import Error404 from "../modules/erro404/Error404";

export default function Routs() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="proyects" element={<Proyect />} />
                <Route path="skills" element={<Skill />} />
                <Route path="works" element={<Work />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<Error404 />} />
            </Route>
        </Routes>
    )
}