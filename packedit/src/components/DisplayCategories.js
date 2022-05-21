import React, { useState, useEffect } from "react";
import { db } from "../Firebase/firebase-config";
import {
  collection,query, where, getDocs, doc, addDoc,updateDoc,deleteDoc,
  onSnapshot, QuerySnapshot,} 
  from "firebase/firestore";



function DisplayCategories(props) {
  const [myListCategories, setMyListCategories] = useState([])

  useEffect(() => {
    const getMyListCategories = async () => {
      const q = query(collection(db,  "trips/"+props.theTrip+"/categories"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const theCategories = [];
        querySnapshot.forEach((doc) =>{
          theCategories.push({...doc.data(), id:doc.id});
        });

        setMyListCategories(theCategories);
      });
  };
  if(props.theTrip !== ""){
    getMyListCategories();
  }
}, [props.theTrip]);

  const deleteTheCategory = async(id) => {
    await deleteDoc(doc(db, "trips/"+props.theTrip+"/categories", id));
  };

  return (
    <>
        {myListCategories.map((category, i) => {
          return <div key={i}>
            <>{category.CategoryName}</> <button className="delete-button" onClick={() => deleteTheCategory(category.id)}>x</button>
          </div>
        })}
    </>
  );
}

export default DisplayCategories;










// // import "../../../../styles/YourList-DisplayCategories/DisplayCategories.scss";

// // function DisplayCategories(props) {
// //   // console.log(props.data);

// //   function DeleteCategory() {
// //     //function to delete category from firebase
// //   }

// //   function AddCategory() {
// //     //function to add categoryto firebase
// //   }

// //   return (
// //     <div className="container-fluid">
// //       <h3>List Categories</h3>
// //       {props.data.categories.mapValue.fields.map((category) => (
// //         <div className="row">
// //           <div className="col-10">
// //             <p>{category.catName}</p>
// //           </div>
// //           <div className="col-2">
// //             <button onClick={DeleteCategory}>X</button>
// //           </div>
// //         </div>
// //       ))}
// //       <button onClick={AddCategory}>Add Category</button>
// //     </div>
// //   );
// // }

// // export default DisplayCategories;
