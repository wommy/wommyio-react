import { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// initial state
const initialState = {
	items: [
		{ id: 1, title: 'post1', color: 'green' },
		{ id: 2, title: 'post2', color: 'red' },
		{ id: 3, title: 'post3', color: 'yellow' },
		{ id: 4, title: 'post4', color: 'blue' },
	]
}

// create context
export const GlobalContext = createContext(initialState)

// provider component
export const GlobalProvider = ({ children }) => {
	const [ state, dispatch ] = useReducer( AppReducer, initialState )

	function addItem( item ) {
		dispatch({
			type: 'ADD_ITEM',
			payload: item
		})
	}

	return (<GlobalContext.Provider value={{
		items: state.items, addItem
	}}>	{ children } </GlobalContext.Provider>)
}
