// CSS-BOOTSTRAP________________________
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

// FUNCTIONAL COMPONENT_______________
// import React, { Component } from 'react';
// import Navbar from "./components/Navbar";
// import './App.css';


// class App extends Component {

//  render() {
//    return (
//        <div className="container">
      
//          <Navbar/>
//        </div>
//    )
//  }
//  }

// export default App; 

//eger biz state yapisini hic kullanmayacaksak funtional componenti kullanacagiz. yani sadece props gönderilecekse functional components kullanilmasi mantiklidir. diger componenetimiz class base component.class base componenetimizde hem props hem de stateimiz olabilir. 



// PROPS LAR________________________


//props lar bızım bır componentten dıger componente verı aktarmamızi saglayan araclardir.bir componentin mail, form vb gibi özellikleri varsa bunlari digerlerine de gecirebiliyoruz. veri aktarimi denilebilir. 

import React, { Component } from 'react';
import Propist from "./components/Propist";
import Navbar from "./components/Navbar";
import './App.css';
class App extends Component {

 render() {
   return (
       <div className="container">
        <Navbar title ="User App"/>  
        {/* //title ="User App" i kaldirisak navbar icinde Default App in icindeki Default App vasligi devreye girer.  */}
        <hr/>
       <Propist 
       name = "Sedat BAGIRGAN"
       departman = "Development"
        
       
       />
        <Propist 
       name = "Ziya Koc"
       departman = "Management"
       price = "20000$"
       
       />


       </div>
   );
 }
 }

 export default App; 


//  props lar, function component icinde herhangi bir niteligi cagirmada kullanilmakta.  props.title seklinde cagrilirken, class componentte this.props.name  seklinde yazilarak cagriliyor. 
 
//  function Navbar (props) { //bu function oldugu icin yani class olmadigindan render a ihtiyac yok.sadece function Nabar () {} yazmak da yeterli. 

//   return(
//       <div>
//           <h3>{props.title}</h3>
//       </div>
//   )
// }

// export default Navbar;

//