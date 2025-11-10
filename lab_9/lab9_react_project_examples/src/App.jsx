// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react';
import HelloWorld from './components/helloWorld'
import Button from './components/Button'
import Display from './components/Display';
import './App.css'

// class Car extends React.Component {  
// constructor(props) { 
// super(props);  
// this.state = {  
// brand: "Ford",
// model: "Mustang",  
// color: "red",  
// year: 1964  
// };  
// }  
// changeColor = () => {  
// this.setState({color: "blue"});  
// }  
// render() {  
// return (  
//   <div>  
//     <h1>My {this.state.brand}</h1>
//     <p>It is a {this.state.color}  {this.state.model} from {this.state.year}. </p>  
//     <button type="button" onClick={this.changeColor}>Change color</button>  
//   </div>
// );   
// }  
// }

class Parent extends React.Component{
render(){
return(
  <div> 
    <h2>You are inside Parent Component</h2> 
    <Child name="Kiran" userId = "23-SE-05"/> 
  </div>
  
) 
// Child Component
}
}; 
class Child extends React.Component{ 
render(){
return( 
  <div>
    <hr />
    <h2>Hello, {this.props.name}</h2> 
    <h3>You are inside Child Component</h3> 
    <h3>Your user id is: {this.props.userId}</h3> 
    <hr />
    <Display name="WE React Lab"></Display> 
    <Display name="Lab Instructor: Engr. Sidra"></Display>  
  </div>
); 
}  
} 
export default Parent; 