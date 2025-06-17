import React from "react"
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom"
import './style.css'
function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}



export const NavBar = () => {
    const { height, width } = useWindowDimensions()

    function Nav({width}) {
        if (width > 800) {
            return (<div className="navlist">
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
            </div>)
        } else {
            return(<div>
                
            </div>)
        }
    }
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
                <Nav width={width}/>
            </nav>
        </header>
    )
}