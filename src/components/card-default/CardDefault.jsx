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

    const [title, setTitle] = useState(titulo);


    const handleChangeTitle = () => {
        setTitle('nuevo titulo');
    }


    return(
        <div className = "card-default">
            <h1> {title} </h1>
            <button onClick = {handleChangeTitle} > change title </button>

        </div>
    )
 } 

 export default CardDefault;