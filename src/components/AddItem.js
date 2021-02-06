import { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddItem = () => {
	const [ title, setTitle ] = useState('')

	const { addItem } = useContext( GlobalContext )
	
	const onSubmit = e => {
		e.preventDefault()

		const newItem = {
			id: Math.floor( Math.random() * 777 ),
			title,
		}
		addItem( newItem )
	}
	
	return (
		<>
			<h3>Add Item</h3>
			<form onSubmit={ onSubmit }>
				<div>
					<label htmlFor="title">Title</label>
					<input type="text" value={ title } onChange={ (e) => setTitle( e.target.value ) } placeholder="enter title.." />
				</div>
				<button>add item</button>
			</form>
		</>
	)
}
