import Button from 'react-bootstrap/Button';
import React, {useState, useEffect} from "react";
import { db } from "../../../firebase-config";
import {
  collection, query, where, getDocs, doc, addDoc, arrayUnion, updateDoc, deleteDoc,
  onSnapshot, QuerySnapshot,
}
  from "firebase/firestore";

function Item(props) {
    const myListCategoriesCollectionRef = collection(db, "myListCategories");

    const deleteItem = async(item) => {
    }

    const editItem = async(itemName) => {

    }

    const completeItem = async(item, complete) => {

    }

    return(
        <>
        <Button onClick={() => {deleteItem(props.item)}}>Delete Item</Button>
        <li>{props.itemName}</li>
        <Button onClick={() => {editItem(props.itemName)}}>Edit Item</Button>
        <Button onClick={() => {completeItem(props.item, props.completed)}}>Tick me off!</Button>
        </>
    )
}

export default Item;