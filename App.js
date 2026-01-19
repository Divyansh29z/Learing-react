// {/* <div>
// <h1 id = "h1">hi hellow world</h1>
// <h2 id = "h2">hi this new one</h2>
// </div> */}

// here we create the new things 

// document.createElement(div ,
//     [h1, {id:"h1"}, "hello i am h1 "],
//     [h1 , {id:"h2"}, "Hello i am h2  "],
//     {id:"div"},"hellworld")
//     ;

import React from "react";
import ReactDOM from "react-dom/client"
import Navbar from "./Component/Navbar";
import Productcart  from "./Component/ProductCart";

// const containerDiv = React.createElement(
//   "div",
//   { id: "container" },
//   [
//     React.createElement(
//       "div",
//       { id: "container1" },
//       [
//         React.createElement("h1", {}, "I am heading 1"),
//         React.createElement("h2", {}, "I am heading 2"),
//       ]
//     ),
//     React.createElement(
//       "div",
//       { id: "container2" },
//       [
//         React.createElement("h1", {}, "I am heading 1"),
//         React.createElement("h2", {}, "I am heading 2"),
//       ]
//     ),
//   ]
// );

// console.log(containerDiv); // reactElement === object

// const root = ReactDOM.createRoot(
//   document.getElementById("root")
// );

// // JSX  is something which look like html/xml
// // in jsx we can also store the java scripts variable and bable will get to know from bracket this
// // is jsx

// const val = 21;
//  const jsxHeading =   (<div>
// <h1>this is h1 is div{val}</h1>
//  </div>)

//  // components 

//  const heading = ( ) => {
//   <div>h1</div>
//  };

// root.render(jsxHeading);


// learning purpose 

 


// PRODUCTCART 

// const Productcart = () => {
//   return (
//     <div className="ProductCart">   
//     {    
//        Productitems.map((product , index) => {
//         return (
//           <ProductItems itsMychoice = {product}/>
//         )
//       })
//     }
//     </div>
//   )
// }

// const ProductItems = (props) => {
//   //console.log(itsMychoice)
// const { image , title , price ,  rating } = props.itsMychoice
//   return (
//     <div className="Product" >
//       <img  className="image" src={image}></img>
//         <h1>Title {title}</h1>
//         <p>Rating {rating.rate}</p>
//         <p>Price {price}</p>
//     </div>
//   )
// }


const App = () => {
  return (
    <div>
      <Navbar />
      <Productcart />
    </div>
  )
}
console.log(App().call)

const root = ReactDOM.createRoot(
  document.getElementById("root")
)


root.render(<App />)
