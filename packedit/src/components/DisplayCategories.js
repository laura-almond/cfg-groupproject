import React, { useState, useEffect } from "react";
import { db } from "../Firebase/firebase-config";
import { collection, query, doc, deleteDoc, onSnapshot } from "firebase/firestore";
import Button from 'react-bootstrap/Button';

function DisplayCategories(props) {
  const [myListCategories, setMyListCategories] = useState([])

  useEffect(() => {
    const getMyListCategories = async () => {
      const q = query(collection(db, "trips/" + props.theTrip + "/categories"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const theCategories = [];
        querySnapshot.forEach((doc) => {
          theCategories.push({ ...doc.data(), id: doc.id });
        });

        setMyListCategories(theCategories);
      });
    };
    if (props.theTrip !== "") {
      getMyListCategories();
    }
  }, [props.theTrip]);

  const deleteTheCategory = async (id) => {
    await deleteDoc(doc(db, "trips/" + props.theTrip + "/categories", id));
  };

  return (
    <>
      {myListCategories.map((category, i) => {
        return <div key={i}>
          <>{category.CategoryName}</> <Button className="delete-button" onClick={() => deleteTheCategory(category.id)}>x</Button>
        </div>
      })}
    </>
  );
}

export default DisplayCategories;
