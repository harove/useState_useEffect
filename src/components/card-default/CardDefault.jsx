import React, {useState} from 'react';
import './CardDefault.css';

/**
 * CardDefault
 * @version v1.0.0
 * 
 * @param {*} props 
 * @param {string} props.title
 */

 const CardDefault = ({title: titulo}) => {




    return(
        <div class = "card-default">
            <h1> {titulo} </h1>

        </div>
    )
 } 

 export default CardDefault;