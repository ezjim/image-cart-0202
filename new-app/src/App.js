import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import Header from "./Header.js";
// import ImageList from "./ImageList.js";
import imageData from "./Data.js";
import Footer from "./Footer.js";
import Image from "./Image.js";
import FilterImageData from './Filter.js'

export default class App extends Component {
  state = { selected: null};

  render() {
    const imageNode = imageData
    .filter(imageData => {
      if (!this.state.selected) return true;

      return imageData.type === this.state.selected;
    })

    .map(horn => <Image imageData={horn} />);
  
    const handleChange = e => {
      this.setState({ selected: e.target.value });
    };
  
  return (
<div>
      <Header />
      
  <main>
    <section className ="options">
      <select className="horn-type-filter" onChange={handleChange}>
        <option value="" defaultValue>
          All Types
        </option>
        <option value="One Horn">One Horn</option>
        <option value="Land Goers">Land Goers</option>
        <option></option>
      </select>
    </section>

    <section className="list-section">
      <ul className="imageData">{imageNode}</ul>
    </section>
  </main>
  
  <div>
    <Footer />
  </div>
</div>
  )}};