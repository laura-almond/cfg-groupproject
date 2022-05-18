import React, {useState, useEffect} from "react";
import { db } from "../../firebase-config";
import {
  collection, query, where, getDocs, doc, addDoc, arrayUnion, updateDoc, deleteDoc,
  onSnapshot, QuerySnapshot,
}
  from "firebase/firestore";
import Input from "react-widgets/cjs/Input";
import Button from 'react-bootstrap/Button';
import AddCategory from "./DisplayCategories/AddCategory";


function AddItem(props) {
  const [adding, setAdding] = useState(false);
  const [newItem, setNewItem] = useState("");
  const myListCategoriesCollectionRef = collection(db, "myListCategories")

  const addingItem = () => {
    setAdding(!adding);
  }

  const addItem = async (category) => {
    // const q = query(myListCategoriesCollectionRef, where("CategoryName", "==", category))
    const categoryDoc = doc(db, "myListCategories", category);
    const newFields = {
      CategoryItems: arrayUnion({
        ItemName: newItem,
        Completed: false
      })
    };
    await updateDoc(categoryDoc, newFields);

    setNewItem("");
    setAdding(false);
  };

  return adding ? (
    <>
      <input
        type="text"
        value={newItem}
        placeholder="Add Item"
        onChange={(e) => setNewItem(e.target.value)}
      />
      <Button onClick={() => {addItem(props.category)}} disabled={newItem.length == 0}>Confirm</Button>
      <Button onClick={addingItem}>Cancel</Button>
    </>
  ) : (
    <Button onClick={addingItem}>Add Item</Button>
  )
}


export default AddItem;
