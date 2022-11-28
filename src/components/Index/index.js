import React, { Component } from "react";
import Carts from "./../Carts";
import Content1 from "./../Content1";
import MyJumbotron from "./../Jumbotron";
import Nav2 from "./../Nav2";

class Index extends Component {
  render() {
    return (
      <div>
        <Nav2 />
        <Content1 />
        <MyJumbotron />
        <Carts />
      </div>
    );
  }
}
export default Index;
