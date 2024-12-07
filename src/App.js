import React from "react"
import { Route ,Routes } from "react-router-dom";
import './index.css'
import Header from "./Components/Header";
import Countries from "./Pages/Countries";
import SingleCountry from "./Pages/SingleCountry";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Countries />} />
        <Route path="/singlecountry/:name" element={<SingleCountry />} />
      </Routes>
    </div>
  );
}

export default App;
