import React, { useState } from "react";
import './style.css';
import useWindowDimensions from '../../scripts/useWindowsSpecs';

type PageKey = "Home" | "AboutUs" | "News" | "Tutorials";

interface NavBarProps {
    onSelectPage: (page: PageKey) => void;
}

interface NavProps {
    width: number;
    onSelectPage: (page: PageKey) => void;
}

const Nav: React.FC<NavProps> = ({ width, onSelectPage }) => {
    if (width > 800) {
        return (
            <div className="navlist">
                <ul>
                    <li onClick={() => onSelectPage("AboutUs")}>Sobre Nosotros</li>
                    <li onClick={() => onSelectPage("News")}>Noticias</li>
                    {/* <li onClick={() => onSelectPage("Projects")}>Proyectos</li> */}
                    <li onClick={() => onSelectPage("Tutorials")}>Tutoriales</li>
                </ul>
            </div>
        );
    } else {
        const [menuOpen, setMenuOpen] = useState(false);
        return (
            <div className="navlist-mobile">
                <button
                    className="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Open navigation menu"
                >
                    <span className="dots"></span>
                </button>
                {menuOpen && (
                    <ul className="mobile-menu" >
                        <li onClick={() => { setMenuOpen(false); onSelectPage("AboutUs"); }}>Sobre Nosotros</li>
                        <li onClick={() => { setMenuOpen(false); onSelectPage("News"); }}>Noticias</li>
                        {/* <li onClick={() => { setMenuOpen(false); onSelectPage("Projects"); }}>Proyectos</li> */}
                        <li onClick={() => { setMenuOpen(false); onSelectPage("Tutorials"); }}>Tutoriales</li>
                    </ul>
                )}
            </div>
        );
    }
};

export const NavBar: React.FC<NavBarProps> = ({ onSelectPage }) => {
    const { width } = useWindowDimensions();
    return (
        <header>
            <nav className="navbar">
                <div className="login">
                    <a href="/login">
                        <span></span>
                    </a>
                </div>
                <div className="name" onClick={() => onSelectPage("Home")} style={{ cursor: "pointer" }}>
                    <h1>C<span></span>NNECT</h1>
                    <h1>LATAM VT</h1>
                </div>
                <Nav width={width} onSelectPage={onSelectPage} />
            </nav>
        </header>
    );
};

export default NavBar;