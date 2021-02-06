import { useContext } from 'react'
import { Item } from './Item'

import { GlobalContext } from '../context/GlobalState'

export const ItemList = () => {
	const { items } = useContext( GlobalContext )

	return (
		<main>
			<h2>media</h2>
			{ items.map( item => (<Item key={ item.id } item={ item }/>) ) }
		</main>
	)
}
