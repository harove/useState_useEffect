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


const InputEmail = ({value: inputGetter, onChange: onChangeInputSetter}) => {

    const handlerChangeInput = (e) => onChangeInputSetter(e.target.value)  

    return(
        <div className = "input-email">
            <input
                placeholder = "introduzca email"
                value = {inputGetter}
                onChange = {handlerChangeInput}
            />
        </div>
    );

}

export default InputEmail;


