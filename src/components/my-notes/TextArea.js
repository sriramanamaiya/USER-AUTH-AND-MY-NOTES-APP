import React from 'react'

const TextArea = (props) => {
    const { id, value, name, placeholder, className, handleChange } = props
    
    return (
        <textarea 
            id={id}
            name={name} 
            value={value} 
            placeholder={placeholder} 
            className={className}
            onChange={handleChange} 
        ></textarea>
    )
}

export default TextArea