import React from "react"
import { Link } from "react-router-dom"
import { FiArrowLeft} from "react-icons/fi"

import './styles.css'

import logoIMG from '../../assets/logo.svg'

export default function NewIncident() {
    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoIMG} alt="Be the Hero"/>

                    <h1> Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um heroi</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041"/>
                        Voltar para a home
                    </Link>
                </section>
                <form> 
                    <input placeholder="Título do caso" />
                    <textarea placeholder="Descrição" /> 
                    <input placeholder="Valor em rais" />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>

        </div>
    )
}