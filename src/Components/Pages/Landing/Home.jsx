import React from "react";
import Search from "./Search/Search";
import Header from "./Header/Header";


function Home() {
  return (
    <div className="home">
      <div className="Header">
        <Header />
      </div>
      <div>
        <Search placeholder="Enter Pokemon Data" className="placeholder" />
      </div>
    </div>
  );
}

export default Home;
