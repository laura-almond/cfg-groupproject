import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import {
  collection,
  Firestore,
  getDocs,
  QuerySnapshot,
} from "firebase/firestore";

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
  const [myList, setMyList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  const [itemCategory, setItemCategory] = useState("");
  //const [itemCategory, setItemCategory] = useState([categoryarray[1]]);

  //getting data from firebase
  const myListCollectionRef = collection(db, "myList");

  // const mylist = {
  //   listName: "Summer Holiday",
  //   listDestination: "Maldives",
  //   departureDate: "11/06/21",
  //   listCategories: [
  //     {
  //       categoryName: "Clothes",
  //       items: [{ itemName: "T-Shirt" }, { itemName: "Hat" }],
  //     },
  //     {
  //       categoryName: "Electrics",
  //       items: [
  //         { itemName: "Laptop" },
  //         { itemName: "Charger" },
  //         { itemName: "Microwave" },
  //         { itemName: "Tesla" },
  //       ],
  //     },
  //     {
  //       categoryName: "Food",
  //       items: [
  //         { itemName: "Banana" },
  //         { itemName: "Toastie" },
  //         { itemName: "Another banana" },
  //       ],
  //     },
  //   ],
  // };

  // useEffect to show data immediately when someone opens the page
  // it's a function that is called every time the page renders
  useEffect(() => {
    const getMyList = async () => {
      const getDataFromFirebase = [];

      const data = await getDocs(myListCollectionRef);
      console.log("This shows data");
      console.log(data.docs[0]._document.data.value.mapValue.fields);
      // setMyList(
      //   data.docs.map((doc) => ({
      //     ...doc.data(),
      //     id: doc.id,
      //   }))
      // );
      setMyList(data);
      console.log("and this doesnt...");
      console.log(myList);
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
            <DisplayCategories data={myList} />
          </div>
          <div className="col ml-5" style={{ paddingRight: "7%" }}>
            <div className="row your-list-info-card">
              <ListInfo data={myList} />
            </div>
            <div className="row mt-3">
              {myList.categories.mapValue.fields.map((category) => (
                <ListBody data={category} items={items} setItems={setItems} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourList;

{
  /* <AddItem
  inputValue={inputValue}
  setInputValue={setInputValue}
  items={items}
  setItems={setItems}
  itemCategory={itemCategory}
  setItemCategory={setItemCategory}
/> */
}
