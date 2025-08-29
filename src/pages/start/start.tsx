import React from 'react'
import { useNavigate } from "react-router-dom"
import './style.css'

export const Start: React.FC = () => {

    const navigate = useNavigate()

    const handleclick = async () => {
        navigate("/Main")
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

export default Start;