import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_ITEM } from "../shared/constant";

const RestroDetails = () => {
  let { id } = useParams();
  let [restoMenu, setrestoMenu] = useState({});

  useEffect(() => {
    getRestroDetails();
  }, [id]);

  async function getRestroDetails() {
    let responseData = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=12.9063171&lng=77.6985485&menuId=${id}`
    );
    let rawData = await responseData.json();
    setrestoMenu(rawData);
  }
console.log(restoMenu)
  return restoMenu?.data?.menu?.items ?  (
    <div>
      <img
        src={IMG_ITEM + restoMenu?.data?.cloudinaryImageId}
        alt="img-rest"
      />
      <h1>name : {restoMenu?.data?.name}</h1>
      <h3>Area : {restoMenu?.data?.area}</h3>
      <h5>Avg Rating {restoMenu?.data?.avgRating}</h5>
      <h5>{restoMenu?.data?.cuisines.join(', ')}</h5>
      <ul>
        {Object.values(restoMenu?.data?.menu?.items).map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  ) : ""
};

export default RestroDetails;
