const Shimmer = () => {
    return (
        <div className="card-list">
            {Array(10).fill("").map((item,index) => (<div key={index} className="card"></div>))}
        </div>
    )
}

export default Shimmer