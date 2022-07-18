import React from 'react'

const Card = (props) => {

    return (
        <div className='card'>
            <img src={props.imagen}></img>
            <h2>{props.titulo}</h2>
            <p>{props.parrafo}</p>
            <button onClick={(e)=>props.darClick(props.imagen)}>Click Aqui</button>
        </div>
    )
}

export default Card