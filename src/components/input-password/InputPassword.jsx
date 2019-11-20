import React, {useEffect} from 'react';
import './InputPassword.css';

/**
 * InputPassword
 * @version v1.0.0
 * 
 * @param {*} props 
 * @param {string|number} props.password
 * @param {Function} props.setPassword
 * 
 * 
 */
const InputPassword = (props) => {

    useEffect( () => {
        console.log('cambio');
    });

    const escuchador = e => {
        const {value} = e.target;
        props.setPassword(value);
    }

    return (
        <div className="input-password">

            <input 
                type = "password"
                placeholder = "Ingresa contraseña"
                value = {props.password}
                onChange = {escuchador}
            />    
                        
        </div>
    );
};

export default InputPassword;