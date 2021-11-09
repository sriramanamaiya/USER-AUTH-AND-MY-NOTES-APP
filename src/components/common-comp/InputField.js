import React from 'react'

const InputField = (props) => {
    const { id, name, type, value, placeholder, className ,handleBlur, handleChange, formErrors } = props

    return (
        <>
            <input 
                id={id}
                name={name} 
                type={type} 
                value={value} 
                placeholder={placeholder} 
                className={className}
                onBlur={handleBlur}
                onChange={handleChange} 
            />
            { formErrors && <><br/><span className="errors">{formErrors}</span></> }
        </>
    )
}

export default InputField