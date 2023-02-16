import { useEffect, useState, React } from "react";
import { RESTRO_LIST_API } from "../shared/constant";
import RestroCard from "./RestroCard.component";
import SearchBox from "./searchbox.component";
import Shimmer from "./shimmer";

// function component
const DashBoardComponent = () => {
  let [restroList, setRestroList] = useState([]);
  let [filterRestroList, setfilterRestroList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    let responsePromise = await fetch(RESTRO_LIST_API);
    let sotedData = await responsePromise.json();
    setRestroList(sotedData?.data?.cards[2].data.data.cards);
    setfilterRestroList(sotedData?.data?.cards[2].data.data.cards);
  }

  function filterRestroData(value) {
    let filteredData = restroList.filter((item) =>
      item.data.name.toLowerCase().includes(value.toLowerCase())
    );
    setfilterRestroList(filteredData);
  }

  return (
    <>
      <SearchBox filterFuntion={filterRestroData} />
      {restroList?.length === 0 ? (
        <Shimmer />
      ) : (
        <>
          <div className="card-list">
            {filterRestroList?.length > 0
              ? filterRestroList?.map((item) => (
                  <RestroCard {...item.data} key={item.data.id} />
                ))
              : ""}
          </div>
        </>
      )}
    </>
  );
};

export default DashBoardComponent;
