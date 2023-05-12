import React from 'react'

function Score(props) {
    return (
        <h1> Hi {props.name.toUpperCase()} This is your score:- {props.data}</h1>
    )
}

export default Score
