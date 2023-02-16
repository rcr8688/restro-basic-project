import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestroDetails = () => {
  let { id } = useParams();
  let [restoData, setrestoData] = useState({});

  useEffect(() => {
    getRestroDetails();
  }, [id]);

  async function getRestroDetails() {
    let responseData = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=12.9063171&lng=77.6985485&menuId=${id}`
    );
    let rawData = await responseData.json();
    setrestoData(rawData);
  }

  return (
    <div>
      <h1>{restoData?.data?.name}</h1>
    </div>
  );
};

export default RestroDetails;
