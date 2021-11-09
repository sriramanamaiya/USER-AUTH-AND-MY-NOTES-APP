import React from 'react'

const ListItem = (props) => {
    const { prop,title } = props

    return (
        <li className="account-info">{prop} - {title}</li>
    )
}

export default ListItem