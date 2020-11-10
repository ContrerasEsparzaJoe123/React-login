import React, { Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import editRess from "./edit-student.component";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EditStudent from "./edit-student.component";
export default class StudentTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteStudent = this.deleteStudent.bind(this);
  }

  deleteStudent() {
    axios
      .delete(
        "http://localhost:4000/students/delete-student/" + this.props.obj._id
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
        <td>{this.props.obj.nombre}</td>
        <td>{this.props.obj.calificacion}</td>
        <td>{this.props.obj.direccion}</td>
        <td>{this.props.obj.imagen}</td>
        <td>{this.props.obj.longitud}</td>
        <td>{this.props.obj.latitud}</td>
        <td>{this.props.obj.descripcion}</td>
        <td>
          <Link
            className="text-center text-md-right"
            to={"/edit-student/" + this.props.obj._id}
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
