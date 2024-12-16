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
                        <p> Somos un team de votación...</p>
                    </div>
                    <div className='Mision'>
                        <h2>Mision</h2>
                        <p></p>
                    </div>
                    <div className='Vision'>
                        <h2>Vision</h2>
                        <p></p>
                    </div>
                    <div className='Fanbases'>
                        <h2>Fanbases aliadas</h2>
                        <p></p>
                    </div>
                    <div className='Contacto'>
                        <h2>Contacto</h2>
                        <p></p>
                    </div>
                </Card>
            </Banner>

        </div>

    )
}