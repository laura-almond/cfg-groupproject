import React, { useState, useEffect } from "react";
import { db } from "../../../firebase-config";
import {
  collection,query, where, getDocs, doc, addDoc,updateDoc,deleteDoc,
  onSnapshot, QuerySnapshot,} 
  from "firebase/firestore";


function DisplayCategories() {
  const [myListCategories, setMyListCategories] = useState([])
  const myListCategoriesCollectionRef = collection(db, "myListCategories");

  useEffect(() => {
    const getMyListCategories = async () => {
      const data = await getDocs(myListCategoriesCollectionRef);
      setMyListCategories(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getMyListCategories();
  }, []);

  return (
    <>
        {myListCategories.map((category, i) => {
          return <div key={i}>
            <>{category.CategoryName}</>
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
