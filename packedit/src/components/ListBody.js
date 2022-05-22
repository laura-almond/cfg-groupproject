import AddItem from "./AddItem";
import React, { useState, useEffect } from "react";
import { db } from "../Firebase/firebase-config";
import { collection, query, setDoc, doc, onSnapshot } from "firebase/firestore";
import Button from 'react-bootstrap/Button';

function ListBody(props) {
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

  const deleteTheItem = async (i, j, id) => {
    let temp_state = [...myListCategories];

    let temp_element = { ...temp_state[i] };

    temp_element.CategoryItems.splice(j, 1);

    await setDoc(doc(db, "trips/" + props.theTrip + "/categories", id), temp_element);

  };

  const checkTheItem = async (i, j, id) => {
    let temp_state = [...myListCategories];

    let temp_element = { ...temp_state[i] };

    temp_element.CategoryItems[j].Completed = !temp_element.CategoryItems[j].Completed;

    await setDoc(doc(db, "trips/" + props.theTrip + "/categories", id), temp_element);
  }

  return (
    <>
      {myListCategories.map((category, i) => {
        return <div key={i} className="list-body">

          <h4 className="category-header">{category.CategoryName}</h4>
          <AddItem category={category.id} theTrip={props.theTrip} />
          <>{category.CategoryItems.map((item, j) => {
            return <div key={j} className="item">
              <input type="checkbox" defaultChecked={item.Completed} onChange={() => checkTheItem(i, j, category.id)} />
              {item.ItemName}
              <Button className="delete-button" onClick={() => deleteTheItem(i, j, category.id)}>x</Button>
            </div>
          })}</>
        </div>
      })}
    </>
  );
}

export default ListBody;
