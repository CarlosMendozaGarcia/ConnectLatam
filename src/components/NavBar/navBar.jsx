import React from "react"
import { Link } from "react-router-dom"
import './style.css'
export const NavBar = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="login">
                    <a href="/login">
                        <span></span>
                    </a>

                </div>
                <div className="name">
                    <Link to="/Home">
                        <h1>C<span></span>NNECT</h1>
                        <h1>LATAM VT</h1>
                    </Link>
                </div>
                <div className="navlist">
                    <ul>
                        <li>
                            <Link to="/AboutUs">Sobre Nosotros</Link>
                        </li>
                        <li>
                            <Link to="/News">Noticias</Link>
                        </li>
                        <li>
                            <Link to="/Projects">Proyectos</Link>
                        </li>
                        <li>
                            <Link to="/Tutorials">Tutoriales</Link>
                        </li>
                    </ul>
                </div>
                <div className="language">
                    <p> idioma </p>
                    <span></span>
                </div>
            </nav>
        </header>
    )
}