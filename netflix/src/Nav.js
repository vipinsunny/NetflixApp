import React from 'react'
import{useState, useEffect} from 'react'
import './Nav.css'

function Nav() {
  const [show, handleShow]=useState(false)
  useEffect(()=> {
window.addEventListener("scroll", ()=>{
  if(window.scrollY > 100){
  handleShow(true);
}else handleShow(false)
});
return()=>{
  window.removeEventListener("scroll")
}
},[])
  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img className='nav_logo'
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix logo"/>
      <img className='nav_avatar'
      src="https://i.pinimg.com/originals/30/db/47/30db479e1558c3ed46b4ed23b3cd98ae.png"
      alt="Netflix avatar"/>
    </div>
  )
}

export default Nav
