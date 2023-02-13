import { useEffect, useState, React } from "react"
import { RESTRO_LIST_API } from "../shared/constant"
import RestroCard from "./RestroCard.component"
import SearchBox from "./searchbox.component"

// function component 
const DashBoardComponent = () => {
	let [restroList, setRestroList] = useState([])
	let [filterRestroList, setfilterRestroList] = useState([])

	useEffect(() => {
		fetchData()
	}, [])

	async function fetchData() {
		let responsePromise = await fetch(RESTRO_LIST_API)
		let sotedData =await responsePromise.json()
		setRestroList(sotedData)
		setfilterRestroList(sotedData?.data?.cards[2].data.data.cards)
	}

	function filterRestroData(value) {
		let cardData = restroList?.data?.cards[2].data.data.cards
		let filteredData = cardData.filter(item => item.data.name.includes(value))
		setfilterRestroList(filteredData)
	}
	console.log(filterRestroList)
	return (
		<>
			<SearchBox filterFuntion={filterRestroData} />
			<div className="card-list">
				{
					filterRestroList?.length > 0 ? filterRestroList?.map(item =>
						<RestroCard {...item.data} key={item.data.id} />) : ""
				}
			</div>
		</>
	)
}

export default DashBoardComponent