import { createStore, combineReducers } from 'redux'

const _stateList = {
    isShow: false,
    count: 0
}

function _controler (state = 0, action) {
	switch (action.type) {
		case 'INCREMENT':
			return ++state
		case 'DECREMENT':
			return --state
		default:
			return state
	}
}

function todos (state = [], action) {
    switch (action.type) {
        case 'ADD_DATE':
            return [
                ...state,
                {
                    text: action.text,
                    completed: action.status
                }
            ]
        default:
            return state
    }
}

function setStates (state = _stateList, action) {
    switch (action.type) {
        case 'ADD_STATE':
            let updateState = {}
            updateState[action.name] = action.status
            return {
                ...state,
                ...updateState
            }
        case 'ADD_COUNT':
            return {
                ...state,
                ...{count: ++state.count}
            }
        default:
            return state
    }
}

const reducers = {
    _controler,
    todos,
    setStates
}

const ADD_DATE = 'ADD_DATE'
const ADD_STATE = 'ADD_STATE'

const reducer = combineReducers( reducers )
const store = createStore(reducer)

const unsubscrible = store.subscribe(() => {
	console.log(store.getState())
})

// store.dispatch({type: ADD_DATE, text: 'this is a dome', status: true})
// store.dispatch({type: 'INCREMENT'})
// store.dispatch({type: ADD_STATE, name: 'isShow', status: true})
// unsubscrible()

window.store = store

export {
    store
}