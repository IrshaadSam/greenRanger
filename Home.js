import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

function Home() {
  return (
    <div class="center">
      <h3> HOME PAGE </h3>
    
      <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Category of News
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <button class="dropdown-item" type="button"><Link to="/homepage"> Sports</Link></button>
    <button class="dropdown-item" type="button"><Link to="/homepage"> Entertainment</Link></button>
    <button class="dropdown-item" type="button"><Link to="/homepage">General Category</Link></button>
  </div>
</div>
      <h3><Link to="/search"> Quick Search </Link></h3>
    </div>
  );
}

export default Home;