import React from "react";
import NavBar from '../../components/NavBar';
import { useState, useEffect } from "react";

const NotFound = () => {
/*   return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <div className="not-found-bg" >
        <div className="not-found-text">
          <h1>Sorry you look lost, this page can't be found!</h1>
        </div>
      </div>
    </div>
  );
}; */

return (
  <div>
    <nav>
      <NavBar />
    </nav>
    <div className="not-found-bg">
      <div className="not-found-text">
          <p>
            Sorry you look lost, 
          </p>
          <p>
          this page can't be found!
          </p>
          <p> <a href="/"> Head home..</a> </p>
      </div>
    </div>
  </div>
);
};

export default NotFound;
