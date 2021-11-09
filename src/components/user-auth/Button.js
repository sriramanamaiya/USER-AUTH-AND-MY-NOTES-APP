import React from 'react'
import { withRouter } from 'react-router'

const Button = (props) => {
    const { history } = props

    const handleClick = () => {
        history.push('/')
    }

    return (
        <button type="button" className="cancel-button" onClick={handleClick}>Cancel</button>
    )
}

export default withRouter(Button)