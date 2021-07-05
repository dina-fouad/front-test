import React from 'react';
import {Card , Button} from 'react-bootstrap';


class Digimon extends React.Component{
    render(){
        return(
            <>
<Card style={{ width: '18rem' , display :'inline-block' , margin : '45px 45px'}}>
  <Card.Img variant="top" src={this.props.digimon.img} />
  <Card.Body>
    <Card.Title>{this.props.digimon.name}</Card.Title>
    <Card.Text>
    {this.props.digimon.level}
    </Card.Text>
    <Button variant="primary" onClick= {()=>this.props.addToFav(this.props.digimon)}>add to favorite</Button>
  </Card.Body>
</Card>
            </>
        )
    }
}
export default Digimon;