import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import OfertaTableRow from "./OfertaTableRow";
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "reactstrap";

export default class OfertaList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ofertas: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/ofertas/")
      .then((res) => {
        this.setState({
          ofertas: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.ofertas.map((res, i) => {
      return <OfertaTableRow obj={res} key={i} />;
    });
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card className="card-plain">
                <CardHeader>
                  <CardTitle tag="h4">Tabla de Ofertas</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Nombre de Restaurante</th>
                        <th>Detalles de Oferta</th>
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
