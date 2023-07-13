import React from 'react'
// import './../App.css'
import '../App.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'

// style={{fontStyle:"oblique", fontSize:"40px",color:"#847FFD"}}

export const Navbar = () => {
  return (
    <div >
      <div style={{display:"flex", justifyContent:'end', gap:'60px'}}>
        <div style={{border:"0.5px solid gainsboro"}}>
          <i className="fa-solid fa-magnifying-glass" style={{margin:'5px'}}></i>
          <input type="text" placeholder="Search" className='search'/>
        </div>

        <div className='bell'><i class="fa-regular fa-bell"></i></div>

        <div className='envelope'><i class="fa-regular fa-envelope"></i></div>

        <div className='profile-icon'>
          <i class="fa-solid fa-user"></i>
          <i class="fa-solid fa-chevron-down"></i>
        </div>

      </div>
    </div>
  )
}
