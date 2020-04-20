import React from "react"
import { FiLogIn } from "react-icons/fi"
import { Link } from "react-router-dom"


import './styles.css'

import herosIMG from '../../assets/heroes.png'
import logoIMG from '../../assets/logo.svg'

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoIMG} alt="Be The Hero"/>

                <form>
                    <h1>Faça seu logon</h1>
                    <input placeholder="sua ID"/>
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={herosIMG} alt="Heroes"/>
        </div>
    )
}
