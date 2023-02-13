import { IMG_ITEM } from "../shared/constant"
import { Link } from 'react-router-dom'

const RestroCard = ({ cloudinaryImageId, name, cuisines, id }) => {
    return (
        <div className="card">
            <div className="card-name">
                <Link to={`restDetails/${id}`}>
                    <img src={IMG_ITEM + cloudinaryImageId} alt="rest-img" />
                    <h4>{name}</h4>
                    <h6>{cuisines.join(', ')}</h6>
                </Link>
            </div>
        </div>
    )
}

export default RestroCard