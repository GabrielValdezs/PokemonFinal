import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

export default class PokeCard extends React.Component {

constructor(props){
  super(props)
}

  render() {
    
   return(
    <div style={{ width:"25% ", margin:"0", display:"inline-block" }}>   
    <Card>
         <Card.Img variant="top" src="https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/RU2HTQPAC5FRLEUHD6SASZXAEA.jpg"/>
        <Card.Body>
            <Card.Title>{ this.props.name }</Card.Title>
            <Card.Text>
             Habilidad 1
             Habilidad 2
             Habilidad 3
           </Card.Text>
           <Card.Text>
             Tipo 1
             Tipo 2
            </Card.Text>
            <Button variant="primary" href={this.props.url}>Ver</Button>
        </Card.Body>
    </Card>
    </div>
   )
}
}
