import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs, doc } from "firebase/firestore";
import NavBar from "../../NavBar";
import AddItem from "./AddItem";
import Item from "./ListBody/Item";
import ListBody from "./ListBody/ListBody";
import DisplayCategories from "./DisplayCategories/DisplayCategories";
import ListInfo from "./ListInfo";

import "../../../../src/styles/YourList.scss";
import { propTypes } from "react-bootstrap/esm/Image";

const YourList = ({ categoryarray }) => {
  // Setting states
  // setList function used to alter the list
  const [myList, setMyList] = useState([]);
  //getting data from firebase
  const myListCollectionRef = collection(db, "myList");
  const [isLoading, setIsLoading] = useState(true);

  
  // useEffect to show data immediately when someone opens the page
  // it's a function that is called every time the page renders
  useEffect(() => {
    const getMyList = async () => {
      const data = await getDocs(myListCollectionRef);
      setMyList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      //after receiving data, set isLoading to false
      setIsLoading(false);
    };

    getMyList();
  }, []);

  //Ternary operator to display data appropriately
  //If isLoading === true, page is still loading
  //If isLoading === false, display data
  return isLoading ? (
    <div>
      <h2>Data Loading...</h2>
    </div>
  ) : (
    <div className="home-bg">
      <div className="container-fluid" style={{ paddingBottom: "7%" }}>
        <div className="row">
          <div className="col">
            <nav>
              <NavBar />
            </nav>
          </div>
        </div>
        <div className="row" style={{ paddingTop: "170px", paddingLeft: "2%" }}>
          <div className="col-3 mx-5 your-list-card">
            <p>Categories</p>
            {myList.map((list, i) => {
                return <div key={i}>
                  <p>{list.ListCategories[0].CategoryName}</p>
                </div>
              })}
          </div>
          <div className="col ml-5" style={{ paddingRight: "7%" }}>
            <div className="row your-list-info-card">
              <p>List Info</p>
              {myList.map((list, i) => {
                return <div key={i}>
                  <p>List Name: {list.listName}</p>
                  <p>Destination: {list.destination}</p>
                  <p>Date: {list.date.toDate().toDateString()}</p>
                </div>
              })}
            </div>
            <div className="row mt-3">
              <p>List Body</p>
              {myList.map((list, i) => {
                return <div key={i}>
                  <li>{list.ListCategories[0].CategoryItems}</li>
                </div>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourList;
