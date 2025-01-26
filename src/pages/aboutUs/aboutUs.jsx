import React from 'react'
import './style.css'
import { NavBar } from '../../components/NavBar/navBar.jsx'
import { Banner } from '../../components/Banner/banner.jsx'
import { Card } from '../../components/Card/card.jsx'
export const AboutUs = () => {
    return (
        <div className="AboutUs">
            <NavBar />
            <Banner>
                <Card>
                    <div className="SobreNosotros">
                        <h2>Sobre nosotros</h2>
                        <p>Connect Latam es un equipo de votación dedicado a unir a ENGENE de Latinoamérica
                             en torno a un objetivo común: demostrar la fuerza y el impacto de nuestra región en 
                             el apoyo a ENHYPEN.</p>
                            <p>Como una red colaborativa que integra fanbases, fanclubs y fanaccounts 
                             de diversos países, trabajamos para guiar al fandom, maximizar esfuerzos y garantizar que 
                             nuestra comunidad sea reconocida globalmente en votaciones.</p>
                            <p>En Connect Latam, creemos que 
                            la unión es clave para hacer notar el poder de los fans latinos de ENHYPEN.</p>
                    </div>
                    <div className='Mision'>
                        <h2>Misión</h2>
                        <p>Unificar a los ENGENE de Latinoamérica bajo una estructura sólida y colaborativa, enfocada en liderar
                            votaciones globales con estrategias claras, capacitación constante y una comunicación efectiva.
                        </p>
                        <p>
                            Nuestro propósito es maximizar la participación y el impacto del fandom latino, consolidando su reconocimiento
                            como una fuerza clave dentro del fandom internacional de ENHYPEN.
                        </p>
                    </div>
                    <div className='Vision'>
                        <h2>Visión</h2>
                        <p>Convertirnos en el equipo de votación más influyente y representativo de Latinoamérica,
                            reconocido globalmente por nuestra capacidad de unión, estrategia y dedicación al apoyo
                            incondicional de ENHYPEN, demostrando el impacto significativo del fandom latino en el éxito
                            de su carrera artística</p>
                    </div>
                    <div className='Fanbases'>
                        <h2>Miembros aliados</h2>
                        <p>Carrusel de logos de las e aliadas</p>
                    </div>
                    <div className='Contacto'>
                        <h2>Contacto</h2>
                        <p>Correo: connectvty024@gmail.com</p>
                        <p>X: @connect_latamvt</p>
                        <p>IG: @connectlatam_vt</p>
                    </div>
                </Card>
            </Banner>

        </div>

    )
}