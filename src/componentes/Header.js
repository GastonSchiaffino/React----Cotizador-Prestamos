import React from 'react';
//Funcion declaration

// function Header({titulo}){
//     // console.log(titulo); //En esta espacio se puede poner código puro de javascript
//     return (
//         <Fragment>
//           <h1>{titulo}</h1>
//         </Fragment>
//       );
// }


//Funcion expresion
//
const Header = ({titulo}) => (
    <h1>{titulo}</h1>
)

export default Header;
