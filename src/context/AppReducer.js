export const AppReducer = ( state, action ) => {
	switch( action.type ) {
		case 'ADD_ITEM':
			return {
				...state,
				items: [ action.payload, ...state.items ]
			}
		default:
			return state
	}
}
export default AppReducer
