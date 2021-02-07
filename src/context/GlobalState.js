import { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// initial state
const initialState = {
	items: [
		{ 
			title: 'create a fresh path', 
			body: 'i couldnt have made this without some help from my friends', 
			videoSrc: '//player.vimeo.com/video/122390839'
		},
		{ 
			title: 'wing chun videos', 
			body: 'yellow', 
			videoSrc: '//www.youtube.com/embed/jO9N00johrw'
		},
		{ 
			title: 'john orris originals',
			body: "ive come to cherish the handful of john orris' films i acted in", 
			videoSrc: '//player.vimeo.com/video/73359740',
			videoTitle: '&quot;Paradise Shorts&quot; .01-.10'
		},
		{ 
			title: 'popcorn bulb', 
			body: 'short video i acted in for gerald haman', 
			videoSrc: '//www.youtube.com/embed/3mkvvZc3twY'
		},
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
