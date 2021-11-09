import React from 'react'

const InputField = (props) => {
    const { type, value, name, className, placeholder, handleChange, formErrors } = props

    return (
        <>
            <input 
                type={type} 
                value={value} 
                name={name} 
                className={className}
                placeholder={placeholder} 
                onChange={handleChange} 
            />
            { formErrors && <><br/><span className="errors">{formErrors}</span></> }
        </>
    )
}

export default InputField