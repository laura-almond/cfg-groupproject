import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../../src/components/NavBar';


it("NavBar renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NavBar></NavBar>, div)
})