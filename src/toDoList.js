import React from "react";
import Menu from "./Menu/menu";
import ListElement from "./ListElement/listElement";

import "./layout.css";

export default class ToDoList extends React.Component {
  unmountCallback = string => {
    console.log(string);
  };
  render() {
    return (
      <div className="list-container">
        <Menu onUnmount={() => this.unmountCallback()} />
        <p>THIS IS A CONTAINER FOR LIST </p>
        <table>
          <tbody>
            {this.props.data.map((el, i) => {
              return <ListElement key={i} data={el} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
