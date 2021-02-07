export const Item = ({ item }) => {
	return (
		<article>
			<h3>{ item.title }</h3>
			<section>{ item.body }</section>
			<iframe width='660' height='371' title={ item.title } src={ item.videoSrc } frameborder='0' allowfullscreen='' mozallowfullscreen='' webkitallowfullscreen=''></iframe>
		</article>
	)
}
