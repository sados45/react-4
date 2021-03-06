            import React, { Component } from 'react';
            import PropTypes from 'prop-types';  
            class Propist extends Component {
                // static defaultProps = {

                //     name: "no information",
                //     price: "no information",
                //     departman: "no information"
                // }
            }
            
            render () {
            //props kleimesi cok fazla kullanilmakta. bunun icin Destructing özelligini kullanacagiz. 
                const{name, departman,price} = this.props;//bu sekilde yazinca altta köseli parantez icinde yer alan this.props kelimelerini kaldiriyoruz. 
            
                return (
                    <div className="col-md-8 mb-4">
                    <div className="card">
                        <div className="card-header.d-flex.justify-content-between">
                        <h4 className="d-inline">{name}</h4>
                        <i className="fa-solid fa-trash-can" style={{cursor:"pointer"}}></i>
                        </div>
                        </div>
                             <div className="card-body">
                            <p className="card-text"> ücret: {price}</p>
                            <p className="card-text"> departman: {departman}</p>
                             </div>
                       </div>
            
                   )
                }
            
              
                
                 


             {/* return (
              <div className="container"> */}
                   
                   
                     {/* <ul>
                         <li>name:{name} <i className="fa-solid fa-trash-can"> </i> </li>
                         {/* cöp bidonu ekledik, font awesome dan.  */}
                         {/* <li>departman:{departman}</li> */}
                         {/* <li>price:{price}</li> */}
                     {/* </ul> */}
           
             {/* </div> */}
              {/* ) */}
    
            {/* Propist .defaultProps ={ //burada bu default kismini isleyerek eger bilgi yoksa bu kismin isleme alinmasini istedigimizde kullanacagimiz bir alan olusturduk. 
            //     name: "no information",
            // //     price: "no information",
            //     departman: "no information"
              
             }// ister burada ister yukarida renderin üstünde static defaultProps ={ } acarak no information bilgilerini oraya da yazdirabiliriz.  */}


            {/* Propist.propTypes = {
                name: PropTypes.string.isRequired,
                price:PropTypes.string.isRequired,
                departman: PropTypes.string.isRequired,
            } */}

            export default Propist;