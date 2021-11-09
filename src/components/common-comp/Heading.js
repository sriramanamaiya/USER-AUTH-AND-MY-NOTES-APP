import React from 'react'

const Heading = (props) => {
    const { headingType, title, className } = props

    if( headingType === 'h1' ){
        return <h1 className={className} >{title}</h1>
    }else if( headingType === 'h2' ){
        return <h2 className={className}>{title}</h2>
    }else if( headingType === 'h4' ){
        return <h4 className={className}>{title}</h4>
    }else if( headingType === 'h5' ){
        return <h5 className={className}>{title}</h5>
    }else if( headingType === 'h6' ){
        return <h6 className={className}>{title}</h6>
    }
}

export default Heading