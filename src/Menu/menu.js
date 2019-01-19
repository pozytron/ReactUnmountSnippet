import React from "react";

import "./menu.css";

export default class Menu extends React.Component {
  handleUnmount = () => {
    console.log("Menu handle click!");
    if (typeof this.props.onUnmount === "function") {
      this.props.onUnmount("testString");
    }
  };
  render() {
    return (
      <nav className="buttons">
        <button>Dodaj</button>
        <button>Usuń</button>
        <button>Edytuj</button>
        <button onClick={this.handleUnmount}>Odmontuj</button>
      </nav>
    );
  }
}
