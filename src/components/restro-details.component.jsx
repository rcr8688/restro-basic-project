import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const RestroDetails = () => {
	let params = useParams()
	console.log(params.id)
	useEffect(() => {
		getRestroDetails()
	}, [params])
	async function getRestroDetails() {
		let responseData = await fetch(`https://www.swiggy.com/dapi/menu/v4/full?lat=12.9063171&lng=77.6985485&menuId=${params.id}`)
		console.log(await responseData.json())
	}
	return (
		<h1>welcome to restro details</h1>
	)
}

export default RestroDetails