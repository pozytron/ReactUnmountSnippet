import React from "react";

export default class ListElement extends React.Component {
  render() {
    console.log(this.props.data.done);
    let doneBtn = <button>V</button>;
    let unDoneBtn = <button>X</button>;

    return (
      <tr>
        <td>{this.props.data.id} </td>
        <td>{this.props.data.title}</td>
        <td>{this.props.data.done ? doneBtn : unDoneBtn}</td>
        <td>{this.props.data.checked}</td>
      </tr>
    );
  }
}
