import React, { useState } from "react";
import data from "../datos";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
const Search = ({ placeholder }) => {
  const [filter, setFilter] = useState([]);

  const searchText = (event) => {
    setFilter(event.target.value);
  };
  const dataSearch = data.cardData.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });
  return (
    <section className="py-4 container">
      <div className="row md-3 justify-content-center content-center">
        <div className="col-12 mb-3 searchbar ">
          <div className="col-12 mb-3 md-8 text-center">
            <input
              type="text"
              placeholder={placeholder}
              className="from-control"
              value={filter}
              onChange={searchText.bind(this)}
            />
            <div className="searchIcon">
              <SearchIcon />
            </div>
          </div>
        </div>

        {dataSearch.map((item, index) => {
          return (
            <div className="col-8 col-md-4 col-lg-3 col-sm-4 mx-0 mb-4 bigCard">
            
              <div className="card p-0s overflow-hidden h-100 shadow"
            >
                <p className="pokeId" style={{ color: item?.color }}>
                  #{item.id}
                </p>
                <img src={item.image} className="card-img-top cardImage" />
                <div
                  className="card-body"
                  style={{ backgroundColor: item?.color }}
                >
                  <h2 className="card-title">{item.name}</h2>
                </div>
                
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Search;
