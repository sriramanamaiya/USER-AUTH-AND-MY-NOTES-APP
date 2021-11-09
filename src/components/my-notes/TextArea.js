import React from 'react'

const TextArea = (props) => {
    const { value, name, placeholder, className, handleChange } = props
    
    return (
        <textarea 
            value={value} 
            name={name} 
            placeholder={placeholder} 
            className={className}
            onChange={handleChange} 
        ></textarea>
    )
}

export default TextArea