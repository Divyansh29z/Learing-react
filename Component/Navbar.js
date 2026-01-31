import { useState } from "react"

const Navbar = () => {
   const[btn, setbtn] =  useState('Dark')
  return (<div className="NavBar">
    
    <h1>LOGO</h1>
    <ul className="line-items">
      <li>MAN</li>
      <li>WOMEN</li>
      <li>KIDS</li>
      <li>CARTS</li>
    </ul>    


    <button onClick={()=>{
      btn === 'Light' ? setbtn('Dark') : setbtn('Light')
    }}>{btn}</button>

    
  </div>)
}

export default Navbar