import React, { Component } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'

class _modal extends React.Component {
    constructor (props, context) {
        super(props, context)
    }
    componentWillMount () {
        console.log(this.props, 2222)
    }
    render () {
        return (
            <div className="modal">
                <p>{this.props.title}</p>
                <img src={this.props.url} />
            </div>
        )
    }
}

_modal.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

_modal.defaultProps = {
    title: 'This is a modal',
    url: 'https://avatar.csdn.net/F/9/9/3_jl381169437.jpg'
}

// render(
//     <_modal/>,
//     document.getElementById('app')
// )

export default _modal