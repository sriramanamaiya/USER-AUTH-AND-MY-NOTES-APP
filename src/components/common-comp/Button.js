import React from 'react'

const Button = (props) => {
    const { type, className, handleClick, name } = props

    return (
        <button type={type} className={className} onClick={handleClick}>{name}</button>
    )
}

export default Button