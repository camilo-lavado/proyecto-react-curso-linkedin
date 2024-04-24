import React, { useState } from 'react'

export const ContadorFuncion = () => {

    const [conteo, setConteo] = React.useState(0);


    const incrementar = () => {
        setConteo((prevConteo) => (prevConteo + 1));
    }

    const reducir = () => {
        setConteo((prevConteo) => (prevConteo - 1));
    }

    return (
        <div>
            <h1>Contador de Clicks</h1>
            <p>conteo:{conteo}</p>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={reducir}>Reducir</button>
        </div>
    )
}
