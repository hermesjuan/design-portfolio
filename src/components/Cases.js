import React from 'react'
import './Cases.css'

const Cases = props => (
    <div className="Cases">
        <img src={props.image} />
        <h3>{props.title}</h3>
    </div>
)

export default Cases