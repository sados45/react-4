            import React, { Component } from 'react';
            class Propist extends Component {

            render() {
            //props kleimesi cok fazla kullanilmakta. bunun icin Destructing özelligini kullanacagiz. 
                const{name, departman,price} = this.props;//bu sekilde yazinca altta köseli parantez icinde yer alan this.props kelimelerini kaldiriyoruz. 

            return (
             <div className="container">
                    <ul>
                        <li>name:{name}</li>
                        <li>departman:{departman}</li>
                        <li>price:{price}</li>
                    </ul>
           
            </div>
             )
        }
    }

            export default Propist;