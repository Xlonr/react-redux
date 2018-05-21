import React, { Component } from 'react'
import { Link, Route, Router, Switch, NavLink } from 'react-router-dom'
import createHistory from 'history/createHashHistory'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { store } from '../control'
import { btnStyle, activeStyle } from './style'
import  _modal  from './comp'

const states = () => { return store.getState() }

const history = createHistory()

class ButtonComp extends React.Component {
    constructor (props, context) {
        super(props, context)
        this.navList = [
            {
                'name': 'one',
                'path': '/one'
            },
            {
                'name': 'two',
                'path': '/two'
            },
            {
                'name': 'three',
                'path': '/three'
            }
        ]
    }
    componentWillMount () {
        // this.props.store.subscribe(() => {
        //     this.isShow = states().setStates.isShow
        // })
        // this.props.history.push(`/one/${this.props.count}`)
        console.log(this.props,  11111)
    }
    render () {
        return (
            <Router history={history}>
                <div>
                    <button style={btnStyle.btn} onClick={this.props.clickToggle}>{this.props.isShow ? 'on' : 'off'}</button>
                    <p>{this.props.count}</p>
                    <ul>
                        {
                            this.navList.map((it, index) => {
                                if (it.name === 'one') {
                                    return  (<NavLink to={`${it.path}/${this.props.count}`} key={index} activeStyle={activeStyle}><li>{it.name}</li></NavLink>)
                                }
                                return (<NavLink to={`${it.path}`} activeStyle={activeStyle} key={index}><li>{it.name}</li></NavLink>)
                            })
                        }
                    </ul>
                    <Switch>
                        <Route path="/one/:id" component={_modal}/>
                        <Route path="/two" component={_modal}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

ButtonComp.propTypes = {
    store: PropTypes.object
}

const mapStateToProps = (state) => {
    return {
        isShow: state.setStates.isShow,
        count: state.setStates.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clickToggle: () => {
            let isShow = states().setStates.isShow
            dispatch({type: 'ADD_STATE', name: 'isShow', status: !isShow})
            dispatch({type: 'ADD_COUNT'})
        }
    }
}

const VisibleButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(ButtonComp)

export {
   VisibleButton
}
