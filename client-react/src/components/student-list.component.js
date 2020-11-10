import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import StudentTableRow from "./StudentTableRow";
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "reactstrap";

export default class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/students/")
      .then((res) => {
        this.setState({
          students: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.students.map((res, i) => {
      return <StudentTableRow obj={res} key={i} />;
    });
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            {/*
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Simple Table</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th>City</th>
                        <th className="text-right">Salary</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Dakota Rice</td>
                        <td>Niger</td>
                        <td>Oud-Turnhout</td>
                        <td className="text-right">$36,738</td>
                      </tr>
                      <tr>
                        <td>Minerva Hooper</td>
                        <td>Curaçao</td>
                        <td>Sinaai-Waas</td>
                        <td className="text-right">$23,789</td>
                      </tr>
                      <tr>
                        <td>Sage Rodriguez</td>
                        <td>Netherlands</td>
                        <td>Baileux</td>
                        <td className="text-right">$56,142</td>
                      </tr>
                      <tr>
                        <td>Philip Chaney</td>
                        <td>Korea, South</td>
                        <td>Overland Park</td>
                        <td className="text-right">$38,735</td>
                      </tr>
                      <tr>
                        <td>Doris Greene</td>
                        <td>Malawi</td>
                        <td>Feldkirchen in Kärnten</td>
                        <td className="text-right">$63,542</td>
                      </tr>
                      <tr>
                        <td>Mason Porter</td>
                        <td>Chile</td>
                        <td>Gloucester</td>
                        <td className="text-right">$78,615</td>
                      </tr>
                      <tr>
                        <td>Jon Porter</td>
                        <td>Portugal</td>
                        <td>Gloucester</td>
                        <td className="text-right">$98,615</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
*/}
            <Col md="12">
              <Card className="card-plain">
                <CardHeader>
                  <CardTitle tag="h4">Tabla de Restaurantes</CardTitle>
                  <p className="card-category">Restaurantes en Durango</p>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Nombre</th>
                        <th>Calificacion</th>
                        <th>Direccion</th>
                        <th width="320">Url de Imagen</th>
                        <th>Longitud</th>
                        <th>Latitud</th>
                        <th>Descripcion</th>
                        <th>Editar</th>
                        <th>Borrar</th>
                      </tr>
                    </thead>
                    <tbody>{this.DataTable()}</tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
