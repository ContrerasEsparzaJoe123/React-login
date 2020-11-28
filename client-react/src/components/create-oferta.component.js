import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  FormGroup,
  Input,
  Row,
} from "reactstrap";

export default class CreateOferta extends Component {
  constructor(props) {
    super(props);

    // Setting up functions
    this.onChangetitle = this.onChangetitle.bind(this);
    this.onChangedetail = this.onChangedetail.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    // Setting up state
    this.state = {
      title: "",
      details: "",
    };
  }

  onChangetitle(e) {
    this.setState({ title: e.target.value });
  }

  onChangedetail(e) {
    this.setState({ details: e.target.value });
  }


  onSubmit(e) {
    e.preventDefault();

    const ofertaObject = {
      title: this.state.title,
      details: this.state.details,
    };

    axios
      .post("http://localhost:4000/ofertas/create-oferta", ofertaObject)
      .then((res) => console.log(res.data));

    this.setState({
      title: "",
      details: "",
    });
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="8">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Agregar Ofertas </CardTitle>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={this.onSubmit}>

                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>Nombre de Restaurante</label>
                          <Input
                            placeholder="Nombre"
                            type="text"
                            value={this.state.title}
                            onChange={this.onChangetitle}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label>Detalles de Oferta</label>
                          <Input
                            placeholder="Oferta"
                            type="text"
                            value={this.state.details}
                            onChange={this.onChangedetail}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
{/*
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Direccion</label>
                          <Input
                            placeholder="Direccion"
                            type="text"
                            value={this.state.direccion}
                            onChange={this.onChangeDireccion}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="4">
                        <FormGroup>
                          <label>Url de Imagen</label>
                          <Input
                            placeholder="http://imagen.jpg"
                            type="text"
                            value={this.state.imagen}
                            onChange={this.onChangeImagen}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="4">
                        <FormGroup>
                          <label>Longitud</label>
                          <Input
                            placeholder="Longitud"
                            type="number"
                            value={this.state.longitud}
                            onChange={this.onChangeLongitud}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label>Latitud</label>
                          <Input
                            placeholder="Latitud"
                            type="number"
                            value={this.state.latitud}
                            onChange={this.onChangeLatitud}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Descripcion</label>
                          <Input
                            type="textarea"
                            placeholder="Descirpcion del Restaurante"
                            value={this.state.descripcion}
                            onChange={this.onChangeDescripcion}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
*/}
                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          className="btn-round"
                          color="primary"
                          type="submit"
                        >
                          Crear Oferta
                        </Button>
                      </div>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
