import React, { useContext } from "react";
import userContext from "../utils/contexts/userContext";
const SearchBox = (props) => {
  const { user, setUser } = useContext(userContext);
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        onChange={(e) => props.filterFuntion(e.target.value)}
      />
      <button className="search-btn">search</button>
      <input
        type="text"
        className=""
        value={user.name}
        onChange={(e) => setUser({ name: e.target.value })}
      />
    </div>
  );
};

export default SearchBox;
