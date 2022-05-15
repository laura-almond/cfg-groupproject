import React from "react";
import AddItem from "../AddItem";
import Item from "./Item";
//import CategoriesDict2 from "../Categories";

// var categoriesDictThree = {
//   category1: "clothes3",
//   category2: "electrics3",
// };

function ListItems(props) {
  function deleteCategory() {
    //delete category in firebase
  }

  function deleteItem() {
    //delete item in firebase
  }
  return (
    // <div>
    //   <ul>
    //     {items.map((item) => (
    //       <Item
    //         items={items}
    //         setItems={setItems}
    //         text={item.item}
    //         key={item.id}
    //         item={item}
    //       />
    //     ))}
    //   </ul>
    //   {Object.entries(categoriesDictThree).map(([key, value]) => (
    //     <h1 key={key}>{value}</h1>
    //   ))}
    //   {/* HARD CODED
    //        category is based off category name - so if same categories then would show up twice!
    //        need to find way to replace hard coded electrics with dynamic!
    //        */}

    //   <div>
    //     {items
    //       .filter((item) => item.category == "electrics3")
    //       .map((filteredItem) => (
    //         <li>{filteredItem.item}</li>
    //       ))}
    //   </div>
    // </div>
    <div className="your-list-card">
      <div className="row">
        <div className="col-11">
          <h3>{props.data.catName}</h3>
        </div>
        <div className="col-1">
          <button onClick={deleteCategory}>X</button>
        </div>
      </div>
      {props.data.item.map((items) => (
        <div className="row">
          <div className="col-11">
            <h6>{items.itemName}</h6>
          </div>
          <div className="col-1">
            <button onClick={deleteItem}>X</button>
          </div>
        </div>
      ))}
      <AddItem />
    </div>
  );
}

export default ListItems;
