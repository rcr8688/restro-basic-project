import React from 'react'

const SearchBox = (props) => {
	console.log()
	return (
		<div className='search-container'>
			<input type="text" className="search-input" onChange={(e) => props.filterFuntion(e.target.value)} />
			<button className='search-btn'>search</button>
		</div>
	)
}

export default SearchBox