import React from 'react';
import axios from 'axios';
import {Card , Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Update from './Update';

class FavoriteDigimons extends React.Component{



    constructor(props){
        super(props);
        this.state ={
            digimonArr :[],

          show : false ,
        
          index: -1,
          name:'',
          img:'',
          level:'',
          
        }
    }
    
        
    componentDidMount = async() =>{
    const server = `http://localhost:3030`;
    const digimonArr = await axios.get(`${server}/getFavDigimon`);
   
   
    this.setState({
        digimonArr : digimonArr.data ,
      
      
      
    })
    
    }



    delete = async (id)=>{
        // console.log(id);
        const server = 'http://localhost:3030';
       
        const newArr = await axios.delete(`${server}/deletFav?id=${id}`);
        // console.log(newArr.data);
        this.setState({
            newArr: newArr.data
        })
    }


    showUpdateForm = (idx)=>{
        this.setState({
            show :true,
            index :idx,
            name:this.state.digimonArr[idx].name,
            img:this.state.digimonArr[idx].img,
            level:this.state.digimonArr[idx].level,


        })

    }

    handleClose=  ()=>{
        this.setState({
            show :false
        })

    }


    updateData = async(e)=>{
        e.preventDefault();
        const obj = {
            name:e.target.name.value,
            img:e.target.img.value,
            level:e.target.level.value,
            id:this.state.digimonArr[this.state.index]['_id']
        }
        const server = 'http://localhost:3030';
       
        const newData = await axios.put(`${server}/updateFav`,obj);
        this.setState({
            digimonArr:newData.data,
            show:false
        })
    }



    render(){
        return(
            <>
           {

this.state.digimonArr.map((item , idx)=>{
    return(
        
        <Card style={{ width: '18rem' , display :'inline-block' , margin : '45px 45px'}}>
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
          {item.level}
          </Card.Text>
          <Button variant="primary" onClick= {()=>this.showUpdateForm(idx)}>update</Button>
          <Button variant="primary" onClick= {()=>this.delete(item._id)}  >delete</Button>
         
        </Card.Body>
      </Card>
     
      
    )
})}
{this.state.show &&  
<Update
show = {this.state.show}
handleClose = {this.handleClose}
name = {this.state.name}
img = {this.state.img}
level = {this.state.level}
updateData ={this.updateData}
/>}
            </>
        )
    }
}
export default FavoriteDigimons ;