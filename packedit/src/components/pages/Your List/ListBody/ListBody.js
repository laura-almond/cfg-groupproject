import AddItem from "../AddItem";
import Item from "./Item";


import React, { useState, useEffect } from "react";
import { db } from "../../../firebase-config";
import {
  collection,query, where, getDocs, doc, addDoc,updateDoc,deleteDoc,
  onSnapshot, QuerySnapshot,} 
  from "firebase/firestore";

function ListBody(props) {
  const [myListCategories, setMyListCategories] = useState([])
  const myListCategoriesCollectionRef = collection(db, "myListCategories");
  
  useEffect(() => {
    const getMyListCategories = async() => {
    const data = await getDocs(myListCategoriesCollectionRef);
    setMyListCategories(data.docs.map((doc) => ({...doc.data(), id: doc.id})));  
  };
  getMyListCategories();
  }, []);

  return (
    <>
        {myListCategories.map((category, i) => {
          return <div key={i}>
            <h4>{category.CategoryName}</h4>
            <AddItem category={category.id} />
            <>{category.CategoryItems.map((item, i) => {
              return <div key={i}>
                {item.itemName}
                {/* <Item item={item.id} itemName={item.ItemName} completed={item.Completed} /> */}
              </div>
            })}</>
          </div>
        })}
    </>
  );
}

export default ListBody;


//import CategoriesDict2 from "../Categories";

// var categoriesDictThree = {
//   category1: "clothes3",
//   category2: "electrics3",
// };

// function ListItems(props) {
//   function deleteCategory() {
//     //delete category in firebase
//   }

//   function deleteItem() {
//     //delete item in firebase
//   }
//   return (
//     // <div>
//     //   <ul>
//     //     {items.map((item) => (
//     //       <Item
//     //         items={items}
//     //         setItems={setItems}
//     //         text={item.item}
//     //         key={item.id}
//     //         item={item}
//     //       />
//     //     ))}
//     //   </ul>
//     //   {Object.entries(categoriesDictThree).map(([key, value]) => (
//     //     <h1 key={key}>{value}</h1>
//     //   ))}
//     //   {/* HARD CODED
//     //        category is based off category name - so if same categories then would show up twice!
//     //        need to find way to replace hard coded electrics with dynamic!
//     //        */}

//     //   <div>
//     //     {items
//     //       .filter((item) => item.category == "electrics3")
//     //       .map((filteredItem) => (
//     //         <li>{filteredItem.item}</li>
//     //       ))}
//     //   </div>
//     // </div>
//     <div className="your-list-card">
//       <div className="row">
//         <div className="col-11">
//           <h3>{props.data.catName}</h3>
//         </div>
//         <div className="col-1">
//           <button onClick={deleteCategory}>X</button>
//         </div>
//       </div>
//       {props.data.item.map((items) => (
//         <div className="row">
//           <div className="col-11">
//             <h6>{items.itemName}</h6>
//           </div>
//           <div className="col-1">
//             <button onClick={deleteItem}>X</button>
//           </div>
//         </div>
//       ))}
//       <AddItem />
//     </div>
//   );
// }

// export default ListItems;
