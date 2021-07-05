import React from 'react';
import Modal  from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'

class Update extends React.Component{
    render(){
        return(
            <>
      
      <Modal
        show = {this.props.show}
        onHide={this.props.handleClose}
        
      >
        <Modal.Header closeButton>
          <Modal.Title>update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit = {this.props.updateData()}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>name</Form.Label>
    <Form.Control type="text" name='name' defaultValue = {this.props.name}/>
    <Form.Label>img</Form.Label>
    <Form.Control type="text" name ='img'defaultValue = {this.props.img} />
    <Form.Label>level</Form.Label>
    <Form.Control type="text" name = 'level' defaultValue = {this.props.level}/>
  </Form.Group>
  <Button type= 'submit' variant="primary" >save</Button>
</Form>
        </Modal.Body>
       
      </Modal>
            </>
        )
    }
}

export default Update;
