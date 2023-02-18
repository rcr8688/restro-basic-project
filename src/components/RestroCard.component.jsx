import { useContext } from "react";
import { IMG_ITEM } from "../shared/constant";
import { Link } from "react-router-dom";
import userContext from "../utils/contexts/userContext";

const RestroCard = ({ cloudinaryImageId, name, cuisines, id }) => {
  const { user } = useContext(userContext);
  return (
    <div className="card">
      <div className="card-name">
        <Link to={`restDetails/${id}`}>
          <img src={IMG_ITEM + cloudinaryImageId} alt="rest-img" />
          <h4>
            {name}- {user.email}
          </h4>
          <h6>{cuisines.join(", ")}</h6>
        </Link>
      </div>
    </div>
  );
};

export default RestroCard;
