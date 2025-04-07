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
                        <li><a href="/AboutUs">Sobre Nosotros</a></li>
                        <li><a href="/News">Noticias</a></li>
                        <li><a href="/Projects">Proyectos</a></li>
                        <li><a href="/Tutorials">Tutoriales</a></li>
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