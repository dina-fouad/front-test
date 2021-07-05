import React from 'react';
import axios from 'axios';
import Digimon from './Digimon';


class Main extends React.Component{

constructor(props){
    super(props);
    this.state ={
        allData : [],
        showDigimon : false
      
      
    }
}

    
componentDidMount = async() =>{
const server = `http://localhost:3030`;
const allData = await axios.get(`${server}/digimon`);
// console.log(allData.data);
this.setState({
    allData : allData.data ,
    showDigimon :true
   
  
})

}

addToFav = async(digimon) =>{
    const server = `http://localhost:3030`;
    await axios.post(`${server}/addtofavorite` , digimon)

}
   

    render(){
        return(
            <>
     

{
this.state.showDigimon &&
this.state.allData.map((item , idx)=>{
    return(
        <Digimon
        
        digimon = {item}
        index = {idx}
        addToFav = {this.addToFav}

        />
    )
})}
            
            </>
        )
    }
}
export default Main ;