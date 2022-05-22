import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import "../styles/CreateYourList.scss";
import { db } from "../Firebase/firebase-config";
import { collection, addDoc } from "firebase/firestore";

function CreateYourList() {
  // submit handler for when the user presses the submit button
  function submitHandler(e) {
    //to prevent the page from reloading/refreshing
    //this is bad because it resets the state, if we have any
    e.preventDefault();
  }

  const navigate = useNavigate();
  const myListCollectionRef = collection(db, "trips");
  const [newListName, setNewListName] = useState("");
  const [newDestination, setNewDestination] = useState("");
  const [newDate, setNewDate] = useState("");
  const [clothesCheck, setClothesCheck] = useState(false);
  const [documentCheck, setDocumentCheck] = useState(false);
  const [electronicsCheck, setElectronicsCheck] = useState(false);
  const [toiletriesCheck, setToiletriesCheck] = useState(false);
  const [covidCheck, setCovidCheck] = useState(false);

  const createList = async () => {
    //redirecting user to your list page
    let path = `/your-list`;

    const timestampConverted = new Date(newDate);
    await addDoc(myListCollectionRef, {
      ListName: newListName,
      Destination: newDestination,
      Date: timestampConverted,
    }).then((DocumentReference) => {
      if (clothesCheck) {
        addDoc(
          collection(db, "trips/" + DocumentReference.id + "/categories"),
          { CategoryName: "Clothes", CategoryItems: [] }
        );
      }
      if (documentCheck) {
        addDoc(
          collection(db, "trips/" + DocumentReference.id + "/categories"),
          { CategoryName: "Documents", CategoryItems: [] }
        );
      }
      if (electronicsCheck) {
        addDoc(
          collection(db, "trips/" + DocumentReference.id + "/categories"),
          { CategoryName: "Electronics", CategoryItems: [] }
        );
      }
      if (toiletriesCheck) {
        addDoc(
          collection(db, "trips/" + DocumentReference.id + "/categories"),
          { CategoryName: "Toiletries", CategoryItems: [] }
        );
      }
      if (covidCheck) {
        addDoc(
          collection(db, "trips/" + DocumentReference.id + "/categories"),
          { CategoryName: "COVID-19 Safety", CategoryItems: [] }
        );
      }
        navigate('/your-list',{state:{tripID: DocumentReference.id}});
    });
  };

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
                  onChange={(event) => {
                    setNewListName(event.target.value);
                  }}
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
                  onChange={(event) => {
                    setNewDestination(event.target.value);
                  }}
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
                  onChange={(event) => {
                    setNewDate(event.target.value);
                  }}
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
                id="clothes" // accessibility
                onChange={() => setClothesCheck(!clothesCheck)}
              />
              <Form.Check
                className="categories-text"
                inline
                type="checkbox"
                label="Documents"
                id="documents" //accessibility
                onChange={() => setDocumentCheck(!documentCheck)}
              />
              <Form.Check
                className="categories-text"
                inline
                type="checkbox"
                label="Electronics"
                id="eletronics" // accessibility
                onChange={() => setElectronicsCheck(!electronicsCheck)}
              />
              <Form.Check
                className="categories-text"
                inline
                type="checkbox"
                label="Toiletries"
                id="toiletries" // accessibility
                onChange={() => setToiletriesCheck(!toiletriesCheck)}
              />
              <Form.Check
                className="categories-text"
                inline
                type="checkbox"
                label="COVID-19 Safety"
                id="covid" // accessibility
                onChange={() => setCovidCheck(!covidCheck)}
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
