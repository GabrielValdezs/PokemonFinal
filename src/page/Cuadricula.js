import React, { Component, useState } from "react";
import { Col, Container, Row, Table, Button, ButtonGroup } from "react-bootstrap";
import { connect } from "react-redux";
import CuadriculaComponent from "../components/CuadriculaComponent";
import { Link } from "react-router-dom";
import { FormControl, InputGroup } from "react-bootstrap";

class Cuadricula extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {}
  render() {
    console.log(this.props);
    return (
      <Container>
        <ButtonGroup aria-label="Basic example">
          <Link to="/lista">
            <Button variant="dark">Lista</Button>
          </Link>
          <Link to="/cuadricula">
            <Button variant="outline-secondary">Cuadrícula</Button>
          </Link>
        </ButtonGroup>
        <Row>
          <Col>
            <h1 className="mb-5">Cuadricula</h1>
          </Col>
          <Col md="12">
            <InputGroup className="mb-3">
              <FormControl placeholder="Buscar Pokemón" />
            </InputGroup>
          </Col>
          <Col md="12">
            
            <CuadriculaComponent pokemonData={this.props.pokemonsw}>         
            </CuadriculaComponent>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pokemonsw: state.counter.pokemons, //array in Slice
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    pokemosnApi: () => dispatch({ type: "POKEMOSNAPI" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cuadricula);
