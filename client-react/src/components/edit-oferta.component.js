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

export default class EditOferta extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDetails = this.onChangeDetails.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      title: "",
      details: "",
    };
  }
  refresh = () => {
    window.location.reload(false);
  };
  componentDidMount() {
    axios
      .get(
        "http://localhost:4000/ofertas/edit-oferta/" +
          this.props.match.params.id
      )
      .then((res) => {
        this.setState({
          title: res.data.title,
          details: res.data.details,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  onChangeTitle(e) {
    this.setState({ title: e.target.value });
  }

  onChangeDetails(e) {
    this.setState({ details: e.target.value });
  }


  onSubmit(e) {
    e.preventDefault();

    const ofertaObject = {
      title: this.state.title,
      details: this.state.details,
    };

    axios
      .put(
        "http://localhost:4000/ofertas/update-oferta/" +
          this.props.match.params.id,
        ofertaObject
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
    window.location.href="admin/oferta-list"

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
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>Nombre de Restaurante</label>
                          <Input
                            placeholder="Nombre"
                            type="text"
                            value={this.state.title}
                            onChange={this.onChangeTitle}
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
                            onChange={this.onChangeDetails}
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
                          Update Oferta
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
