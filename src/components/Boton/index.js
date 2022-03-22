import './styles.css';
import React from 'react';

export function Boton ({text , onClick}){
    return(
        <button className="idBot on" onClick={onClick}>{text}</button>
    )
}
