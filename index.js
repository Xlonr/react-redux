import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createHashHistory'
import { store } from './control'
// import { routeList } from './routemap'
import { VisibleButton } from './src/main'
require('./sass/_index.sass')

// hashHistory 记录浏览历史
const history = createHistory()

render(
    <Provider store = { store }>
        <Router history={history}>
            <Route path='/' component={VisibleButton}></Route>
        </Router>
    </Provider>,
    document.getElementById('app')
)