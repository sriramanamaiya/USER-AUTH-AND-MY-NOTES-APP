import React from 'react'

const Paragraph = (props) => {
    const { title, className, handleShow } = props
    
    return (
        <p className={className} onClick={handleShow}>{title}</p>
    )
}

export default Paragraph