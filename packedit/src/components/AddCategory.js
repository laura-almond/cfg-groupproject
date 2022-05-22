import React, { useState } from "react";
import { db } from "../Firebase/firebase-config";
import { collection, addDoc } from "firebase/firestore";
import Button from 'react-bootstrap/Button';

function AddCategory(props) {
  const [adding, setAdding] = useState(false);
  const [input, setInput] = useState("");

  const addingCategory = () => {
    setAdding(!adding);
  }

  const createCategoryDoc = async () => {
    await addDoc(collection(db, "trips/" + props.theTrip + "/categories"), {
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
      <Button onClick={createCategoryDoc} disabled={input.length === 0}>Confirm</Button>
      <Button onClick={addingCategory}>Cancel</Button>
    </>
  ) : (
    <Button onClick={addingCategory}>Add Category</Button>
  )
}

export default AddCategory;