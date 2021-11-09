import React from 'react'

const Button = (props) => {
    const { name, className, handle } = props

    return (
        <button className={className} onClick={handle}>{name}</button>
    )
}

export default Button