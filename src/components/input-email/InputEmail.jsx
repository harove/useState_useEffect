import React from 'react';
import './InputEmail.css';

/**
 * InputEmail
 * @version v1.0.0
 * 
 * @param {*} props
 * @param {string} props.value
 * @param {function} props.onChange
 * 
 * 
 */

const InputEmail = ({email,setearEmail}) => {



    const handlerOnChange = (e) => {
        setearEmail(e.target.value);
    }


    return (
        <div className="input-email">
            <input 
                placeholder = "Ingrese su email"
                value = {email}
                onChange= {handlerOnChange}
            />
        </div>
    );
};

export default InputEmail;