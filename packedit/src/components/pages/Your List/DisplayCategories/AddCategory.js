import React, { useState, useEffect } from "react";
import { db } from "../../../firebase-config";
import {
  collection,query, where, getDocs, doc, addDoc,updateDoc,deleteDoc,
  onSnapshot, QuerySnapshot,} 
  from "firebase/firestore";
import Button from 'react-bootstrap/Button';

function AddCategory(props) {
    const [adding, setAdding] = useState(false);
    const [input, setInput] = useState("");
    const myListCategoriesCollectionRef = collection(db, "myListCategories");
  
    const addingCategory = () => {
      setAdding(!adding);
    }
  
    const createCategoryDoc = async() => {
      await addDoc(myListCategoriesCollectionRef, {
          CategoryName: input,
          CategoryItems: []
        });
  
      setInput("");
      setAdding(false);
    }

    return adding ? (
        <>
            <input
                type="text"
                value={input}
                placeholder="Add Category"
                onChange={(e) => setInput(e.target.value)}
            />
            <Button onClick={createCategoryDoc} disabled={input.length==0}>Confirm</Button>
            <Button onClick={addingCategory}>Cancel</Button>
        </>
    ):(
      <Button onClick={addingCategory}>Add Category</Button>  
    )
}

export default AddCategory;