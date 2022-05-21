import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../../Firebase/firebase-config";
import { collection, getDocs, doc, deleteDoc, onSnapshot, QuerySnapshot, writeBatch ,query} from "firebase/firestore";
import NavBar from "../../components/NavBar";
import ListBody from "../../components/ListBody";
import DisplayCategories from "../../components/DisplayCategories";
import "../../styles/YourList.scss";
import { propTypes } from "react-bootstrap/esm/Image";
import AddCategory from "../../components/AddCategory";
import CategoriesOption from "../../components/CategoriesOption";
import Button from "react-bootstrap/Button";


function YourList() {
  // Setting states
  // setList function used to alter the list
  const [myList, setMyList] = useState([]);
  //getting data from firebase
  // const myListCollectionRef = collection(db, "myList");
  const myListCollectionRef = collection(db, "trips")
  const [isLoading, setIsLoading] = useState(true);

  const [theTrip, setTheTrip] = useState("");

  const updateTheTrip = (theChosenTrip) => {
      setTheTrip(theChosenTrip);
  };

  const deleteDocument = async(TripID, CategoryID) => {
    // console.log("Trip: ", TripID, "Category", CategoryID);

    // (db, Colletions, Document)
    await deleteDoc(doc(db, "trips/"+TripID+"/categories", CategoryID));
  };

  const deleteDocumentTrip = async(TripID) => {
    // console.log("Trip: ", TripID, "Category", CategoryID);
    await deleteDoc(doc(db, "trips", TripID));
  };

  const DeleteTrip = async(id) =>{
    const querySnapshot = await getDocs(collection(db, "trips/"+ id + "/categories"));
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
          // await deleteDoc(doc(db, "trips/"+props.theTrip+"/categories", id));
      // console.log("id: ", id, "docID" ,doc.id)
      deleteDocument(id, doc.id);
  })

    deleteDocumentTrip(id);
    setTheTrip("");
  };


  // function DisplayCategories(props) {
  //   const [myListCategories, setMyListCategories] = useState([])
  
  //   useEffect(() => {
  //     const getMyListCategories = async () => {
  //       const q = query(collection(db,  "trips/"+props.theTrip+"/categories"));
  //       const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //         const theCategories = [];
  //         querySnapshot.forEach((doc) =>{
  //           theCategories.push({...doc.data(), id:doc.id});
  //         });
  
  //         setMyListCategories(theCategories);
  //       });
  //   };
  //   if(props.theTrip !== ""){
  //     getMyListCategories();
  //   }
  // }, [props.theTrip]);
  
  // useEffect to show data immediately when someone opens the page
  // it's a function that is called every time the page renders
  useEffect(() => {
    
    // const getMyListOld = async () => {
    //   const data = await getDocs(myListCollectionRef);
    //   setMyList(data.docs.map((doc) => ({...doc.data(), id: doc.id}))); // at the moment this displays all documents in the collection, we want only one
    //   //after receiving data, set isLoading to false
    //   setIsLoading(false);
    // };

    const getMyList = async () => {
      const q = query(collection(db, "trips"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const theTrips = [];
        querySnapshot.forEach((doc) =>{
          theTrips.push({...doc.data(), id:doc.id});
        });

        setMyList(theTrips);
        setIsLoading(false);
      });
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
            <h3>Categories</h3>
            <DisplayCategories theTrip={theTrip}/>
            {theTrip == "" ? <></> : <AddCategory theTrip={theTrip}/>}
            
            {/* {myList.map((list, i) => {
                return <div key={i}>
                  {list.ListCategories.map((category, i) => {
                    return <div key={i}>
                      {category.CategoryName}
                      </div>
                  })}
                </div>
              })} */}

          </div>
          <div className="col ml-5" style={{ paddingRight: "7%" }}>
            <div className="row your-list-info-card">
              {/* <div>chosen: {theTrip}</div> */}
              <CategoriesOption trips={myList} updateTheTrip={updateTheTrip}/>
              
              {/* {myList.map((list, i) => {
                return <div key={i}>
                  <p>List Name: {list.ListName}</p>
                  <p>Destination: {list.Destination}</p>
                  <p>Date: {list.Date.toDate().toDateString()}</p>
                  <p>{list.id}</p>
                </div>
              })} */}
              {theTrip != "" ? myList.filter(theList => theList.id.includes(theTrip)).map((trip) => (
                <>

              <div>
                <span className="your-list-info-card-trip">{trip.ListName}</span>
                <span>{trip.Destination}</span>
                <span className="your-list-info-card-date">{trip.Date.toDate().toDateString()}</span>
                {/* <p>trip id is {trip.id}</p> */}
                <Button onClick={()=>DeleteTrip(trip.id) }>Cancel</Button>
              </div>
              
             
              </>)) : <></>}
            </div>
            <div className="row mt-3">
              <ListBody theTrip={theTrip}/>
              {/* {myList.map((list, i) => {
                return <div key={i}>
                  {list.ListCategories.map((category, i) => {
                    return <div key={i}>
                      {category.CategoryItems.map((item, i) => {
                        return <div key={i}>
                          {item}
                          </div>
                      })}
                      </div>
                  })}
                </div>
              })} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourList;
