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

export default class EditStudent extends Component {
  constructor(props) {
    super(props);

    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeDireccion = this.onChangeDireccion.bind(this);
    this.onChangeCal = this.onChangeCal.bind(this);
    this.onChangeImagen = this.onChangeImagen.bind(this);
    this.onChangeLongitud = this.onChangeLongitud.bind(this);
    this.onChangeLatitud = this.onChangeLatitud.bind(this);
    this.onChangeDescripcion = this.onChangeDescripcion.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      nombre: "",
      direccion: "",
      calificacion: "",
      imagen: "",
      longitud: "",
      latitud: "",
      descripcion: "",
    };
  }
  refresh = () => {
    window.location.reload(false);
  };
  componentDidMount() {
    axios
      .get(
        "http://localhost:4000/students/edit-student/" +
          this.props.match.params.id
      )
      .then((res) => {
        this.setState({
          nombre: res.data.nombre,
          calificacion: res.data.calificacion,
          direccion: res.data.direccion,
          imagen: res.data.imagen,
          longitud: res.data.longitud,
          latitud: res.data.latitud,
          descripcion: res.data.descripcion,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  onChangeStudentName(e) {
    this.setState({ nombre: e.target.value });
  }

  onChangeDireccion(e) {
    this.setState({ direccion: e.target.value });
  }

  onChangeCal(e) {
    this.setState({ calificacion: e.target.value });
  }

  onChangeImagen(e) {
    this.setState({ imagen: e.target.value });
  }
  onChangeLongitud(e) {
    this.setState({ longitud: e.target.value });
  }
  onChangeLatitud(e) {
    this.setState({ latitud: e.target.value });
  }
  onChangeDescripcion(e) {
    this.setState({ descripcion: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const studentObject = {
      nombre: this.state.nombre,
      direccion: this.state.direccion,
      calificacion: this.state.calificacion,
      imagen: this.state.imagen,
      longitud: this.state.longitud,
      latitud: this.state.latitud,
      descripcion: this.state.descripcion,
    };

    axios
      .put(
        "http://localhost:4000/students/update-student/" +
          this.props.match.params.id,
        studentObject
      )
      .then((res) => {
        console.log(res.data);
        console.log("Student successfully updated");
      })
      .catch((error) => {
        console.log(error);
      });

    // Redirect to Student List
    // this.props.history.push("/student-list");
    window.location.href="admin/student-list"

    this.refresh();
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="8">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Editar Restaurantes </CardTitle>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={this.onSubmit}>
                    {/*

                    <Row>
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label>Company (disabled)</label>
                          <Input
                            defaultValue="Creative Code Inc."
                            disabled
                            placeholder="Company"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="3">
                        <FormGroup>
                          <label>Username</label>
                          <Input
                            defaultValue="michael23"
                            placeholder="Username"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <Input placeholder="Email" type="email" />
                        </FormGroup>
                      </Col>
                    </Row>

*/}
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>Nombre de Restaurante</label>
                          <Input
                            placeholder="Nombre"
                            type="text"
                            value={this.state.nombre}
                            onChange={this.onChangeStudentName}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label>Calificacion de Restaurante</label>
                          <Input
                            placeholder="Calificacion"
                            type="number"
                            value={this.state.calificacion}
                            onChange={this.onChangeCal}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
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
                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          className="btn-round"
                          color="primary"
                          type="submit"
                        >
                          Update Restaurante
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
