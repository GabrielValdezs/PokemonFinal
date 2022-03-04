import React, { Component } from "react";
import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { user: "", password: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({ [name]: target.value });
  }

  handleSubmit(event) {
       if (this.state.user === 'Zapdos' && this.state.password === 'electric') {
      localStorage.setItem('user', this.state.user)
      localStorage.setItem('password', this.state.password)
      return true
       } else {
         event.preventDefault();
      return false
    }
    
  }

 
  render() {
    return (
      <Container>
        <Row>
          <form onSubmit={this.handleSubmit} action="/lista" >
            <Col>
              <h1 className="mb-5">Pokedex</h1>
            </Col>
            <Col md="12">
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Correo Electrónico"
                  aria-label="Username"
                  name="user"
                  value={this.state.user}
                  onChange={this.handleChange}
                />
              </InputGroup>
              
            </Col>
            <Col md="12">
              <InputGroup className="mb-3">
                <FormControl
                  type="Password"
                  placeholder="Contraseña"
                  aria-label="Username"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </InputGroup>
              
            </Col>
            <Col>
              <Button variant="dark" type="submit">
                Iniciar Sesión
              </Button>
            </Col>
          </form>
        </Row>
      </Container>
    );
  }
}

export default Login;
