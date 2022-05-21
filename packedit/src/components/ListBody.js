import AddItem from "./AddItem";
import React, { useState, useEffect } from "react";
import { db } from "../Firebase/firebase-config";
import {
  collection,query, where, getDocs, setDoc ,doc, addDoc,updateDoc,deleteDoc,
  onSnapshot, QuerySnapshot,} 
from "firebase/firestore";

function ListBody(props) {
  const [myListCategories, setMyListCategories] = useState([])
  const myListCategoriesCollectionRef = collection(db, "myListCategories");
  
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

  if(props.theTrip != ""){
    getMyListCategories();
  }
  
  }, [props.theTrip]);

  const deleteTheItem = async (i, j, id) => {
    let temp_state = [...myListCategories];

    let temp_element = {...temp_state[i]};

    temp_element.CategoryItems.splice(j,1);

    await setDoc(doc(db, "trips/"+props.theTrip+"/categories", id), temp_element);
    
  };

  const checkTheItem = async(i, j, id) => {
    let temp_state = [...myListCategories];

    let temp_element = { ...temp_state[i] };
    
    temp_element.CategoryItems[j].Completed = !temp_element.CategoryItems[j].Completed;
   
    await setDoc(doc(db, "trips/"+props.theTrip+"/categories", id), temp_element);
  }

  return (
    <>
        {myListCategories.map((category, i) => {
          return <div key={i} className="list-body">
            
            <h4 className="category-header">{category.CategoryName}</h4>
            <AddItem category={category.id} theTrip={props.theTrip} />
            <>{category.CategoryItems.map((item, j) => {
              return <div key={j} className="item">
                <input type="checkbox" defaultChecked={item.Completed} onChange={() => checkTheItem(i,j,category.id)}/>
                {item.ItemName} 
                 {/* <button onClick={()=> checkTheItem(i,j, category.id)}>check</button>  */}
                 
                 <button className="delete-button" onClick={() => deleteTheItem(i, j, category.id)}>x</button>
                
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
