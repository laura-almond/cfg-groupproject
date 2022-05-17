import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "../../../styles/CreateYourList.scss";
import { useState, useEffect } from 'react';
import { db } from '../../firebase-config';
import { collection, getDocs, addDoc, arrayUnion, updateDoc, doc, deleteDoc, Timestamp, firestore } from 'firebase/firestore';
import { dataValue } from "react-widgets/cjs/Accessors";

function CreateYourList() {
  // submit handler for when the user presses the submit button
  function submitHandler(e) {
    //to prevent the page from reloading/refreshing
    //this is bad because it resets the state, if we have any
    e.preventDefault();
  }

  const [myList, setMyList] = useState([]);
  const myListCollectionRef = collection(db, "myList")
  const [newListName, setNewListName] = useState("");
  const [newDestination, setNewDestination] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newCategories, setNewCategories] = useState([]);



  const handleCheck = async (value) => {
    let categoriesArray = [];
    let selectedCategory = {categoryName: value};
    categoriesArray.push(selectedCategory);
    setNewCategories(categoriesArray)
    return newCategories
  } // at the moment this overrides the categoriesArray and therefore newCategories every time, 
  // so need to split it out so that doesn't happen and can add more than one category

  const createList = async () => {
    const timestampConverted = new Date(newDate);
    await addDoc(myListCollectionRef, {
      ListName: newListName,
      Destination: newDestination,
      Date: timestampConverted,
      ListCategories: newCategories
    })
  }

  return (
    <div>
      <Card className="card">
        <Form onSubmit={submitHandler}>
          <Row>
            <Col>
              <Form.Group className="title-text mb-4">
                <Form.Label className="mb-3">List Name</Form.Label>
                <Form.Control
                  className="input"
                  type="text"
                  placeholder="Summer Holiday"
                  onChange={(event) => { setNewListName(event.target.value); }}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="title-text">
                <Form.Label className="mb-3">Destination</Form.Label>
                <Form.Control
                  className="input"
                  type="text"
                  placeholder="Maldives"
                  onChange={(event) => { setNewDestination(event.target.value); }}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="title-text" controlId="dob">
                <Form.Label className="mb-3">Select Date</Form.Label>
                <Form.Control
                  className="input"
                  type="date"
                  name="trip-date"
                  placeholder="Trip Date"
                  onChange={(event) => { setNewDate(event.target.value); }}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label className="title-text my-3">
                List Categories
              </Form.Label>
              <br />
              <Form.Check
                className="categories-text"
                inline
                type="checkbox"
                label="Clothes"
                id="string" // accessibility
                onChange={() => {handleCheck("Clothes")}}
              />
              <Form.Check
                className="categories-text"
                inline
                type="checkbox"
                label="Documents"
                id="string" //accessibility
                onChange={() => { handleCheck("Documents") }}
              />
              <Form.Check
                className="categories-text"
                inline
                type="checkbox"
                label="Electronics"
                id="string" // accessibility
                onChange={() => { handleCheck("Electronics") }}
              />
              <Form.Check
                className="categories-text"
                inline
                type="checkbox"
                label="Toiletries"
                id="string" // accessibility
                onChange={() => { handleCheck("Toiletries") }}              
              />
              <Form.Check
                className="categories-text"
                inline
                type="checkbox"
                label="COVID-19 Safety"
                id="string" // accessibility
                onChange={() => { handleCheck("COVID-19 Safety") }}
              />
              <Form.Text className="categories-text text-muted">
                <br />
                ...you can add more once you've made your list!
              </Form.Text>
            </Form.Group>
          </Row>
          <Button
            className="create-button create-button-text"
            variant="primary"
            type="submit"
            onClick={createList}
          >
            Create your list
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default CreateYourList;
