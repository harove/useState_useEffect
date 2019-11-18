import React, {useEffect} from 'react';
import './InputPassword.css';

/**
 * InputPassword
 * @version v1.0.0
 * 
 * @param {*} props 
 * @param {string|number} props.e
 * @param {Function} props.x
 * 
 * 
 */
const InputPassword = (props) => {

    useEffect( () => {
        console.log('cambio email');
    });

    const escuchador = e => {
        const {value} = e.target;
        props.x(value);
    }

    return (
        <div className="input-password">

            <input 
                type = "password"
                placeholder = "Ingresa contraseña"
                value = {props.e}
                onChange = {escuchador}
            />    
                        
        </div>
    );
};

export default InputPassword;