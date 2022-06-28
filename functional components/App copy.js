
// import React, { Component } from 'react'

// import './App.css';


// class App extends Component {

//  render() {
//    return (
//        <div className="container">
//          <h4 className="header">App Component</h4>  {/*style = {{color:"red", fontSize:"40px", alignItem:"center", margin:0, padding:0}}*/} 
//        </div>
//    )
//  }
// }

// export default App; 

import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import './App.css';


class App extends Component {

 render() {
   return (
       <div className="container">
      
         <Navbar/>
       </div>
   )
 }
 }

export default App; 

//eger biz state yapisini hic kullanmayacaksak funtional componenti kullanacagiz. yani sadece props gönderilecekse functional components kullanilmasi mantiklidir. diger componenetimiz class base component.class base componenetimizde hem props hem de stateimiz olabilir. 