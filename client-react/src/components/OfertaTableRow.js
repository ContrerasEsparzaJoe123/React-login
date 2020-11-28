import React, { Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class OfertaTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteStudent = this.deleteStudent.bind(this);
  }

  deleteStudent() {
    axios
      .delete(
        "http://localhost:4000/ofertas/delete-ofertas/" + this.props.obj._id
      )
      .then((res) => {
        console.log("Student successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  refresh = () => {
    window.location.reload(false);
  };
  render() {
    return (
      <tr>
        <td>{this.props.obj.title}</td>
        <td>{this.props.obj.details}</td>
        <td>
          <Link
            className="text-center text-md-right"
            to={"/edit-oferta/" + this.props.obj._id}
          >
            Edit
          </Link>
        </td>
        <td>
          <Button
            className="text-center text-md-right"
            onClick={() => {
              this.refresh();
              this.deleteStudent();
            }}
          >
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}
