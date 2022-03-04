import React from 'react';
import PokeCard from './PokeCard'
import Container from 'react-bootstrap/Container'

export default class CuadriculaComponent extends React.Component {
  constructor(props) {
    super(props);
      
  }
    
  render(){
    let markup= [];
        this.props.pokemonData.map((item, index)=>{
        console.log(item);
        console.log(index);
        markup.push(
          <PokeCard key={'index-' + index} name={item.name} url={item.url}></PokeCard>
        )
    });
    return(
     <Container>
         {markup}
     </Container>          
    )
  }

}
