import React from 'react'
import { useNavigate } from "react-router-dom"
import './style.css'

export const Start = () => {

    const navigate = useNavigate()

    const handleclick = async () => {
        navigate("/Home")
    }

    return (
        <div className="start" onClick={handleclick}>
            <div className="name">
                <h1>C<span></span>NNECT</h1>
                <h1>LATAM VT</h1>
            </div>
        </div>
    )
}