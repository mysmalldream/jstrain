import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
    render (){
        const {value,onIncreaseClick} =this.props
        renturn (
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>Increase</button>
            </div>
        )
    }
}

Counter.protoTypes={
    value:PropTypes.number.isRequired,
    onIncreaseClick:PropTypes.func.isRequired
}