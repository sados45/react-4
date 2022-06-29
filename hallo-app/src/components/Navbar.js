import React from "react";
import PropTypes from "prop-types";

function Navbar (props) { //bu function oldugu icin yani class olmadigindan render a ihtiyac yok.sadece function Nabar () {} yazmak da yeterli. 

    return(
        <div>
             <h3>{props.title}</h3> {/*burada App.js icinde Navbar title= User App2 olarak tanimladik. bunu cagirmak icin function componentte props.title yazarak title imizi cagirmis olduk. User App2  */}
        </div>
    )
}

Navbar .propTypes= {
    title: PropTypes.string.isRequired //ben bu Navbari baska yerde kullancaksam title isminde PropTypes i string olan bir props göndermeliyiz. 

}

Navbar.defaultProps = { //eger göndemyeceksek default olsun dersek bu navbari eklemeliyiz. 
 title: "Default App"
    
}

export default Navbar;

// Bu kismi rfc kisa yolu ile yaptik.

// import React from 'react'

//  function Navbar() {
//   return (
//     <div>

//         <h3>User App</h3>
//     </div>
//   )
// }
// export default Navbar;

