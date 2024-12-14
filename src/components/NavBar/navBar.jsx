import React from "react";
export const NavBar= () => {
    return (
        <nav>
            <div class="login">
                <span></span>
            </div>
            <div class="name">
                <h1>C<span></span>NNECT</h1>
                <h1>LATAM VT</h1>
            </div>
            <div class="navlist">
                <ul>
                    <li><a href="">Sobre Nosotros</a></li>
                    <li><a href="">Noticias</a></li>
                    <li><a href="">Proyectos</a></li>
                    <li><a href="">Tutoriales</a></li>
                </ul>
            </div>
            <div class="language">
                <p>idioma </p>
                <span></span>
            </div>
        </nav>
    )
}