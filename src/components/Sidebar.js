import React from 'react'
import '../App.css';

const Sidebar = () => {
  return (
    <ul>
        <li>
          <span className="sicon" >s</span>
          <span className='spehre' style={{position:'relative',left:'10px'}}>spehre</span>
        </li>

        <li>
          <li style={{position:'relative',top:'20px'}}>
            <i class="fa-solid fa-house"></i>
            <span style={{position:'relative',left:'10px'}}>Home</span>
          </li>
          <li style={{position:'relative',top:'30px'}}>
            <i class="fa-regular fa-envelope-open"></i>
            <span style={{position:'relative',left:'10px'}}>Job Invites</span>
          </li>
          <li style={{position:'relative',top:'40px'}}>
            <i class="fa-solid fa-chart-simple"></i>
            <span style={{position:'relative',left:'10px'}}>Analytics</span>
          </li>
          <li style={{position:'relative',top:'50px'}}>
            <i class="fa-solid fa-user"></i>
            <span style={{position:'relative',left:'10px'}}>My Profile</span>
          </li>
          <li style={{position:'relative',top:'60px'}}>
            <i class="fa-brands fa-internet-explorer"></i>
            <span style={{position:'relative',left:'10px'}}>Explore</span>
          </li>
        </li>

        <li style={{position:'relative',top:'70px'}}>
          <h5>Communities Feed</h5>
          <li style={{display:"flex", position:'relative', top:'10px'}}>
            <i class="fa-solid fa-cannabis"></i>
            <div style={{display:"grid"}}>
              <span>Indonesia UI Designer</span>
              <span>734 members</span>
            </div>
          </li>
          <li style={{display:"flex",position:'relative', top:'20px'}}>
            <i class="fa-solid fa-cannabis"></i>
            <div style={{display:"grid"}}>
              <span>Indonesia UI Designer</span>
              <span>734 members</span>
            </div>
          </li>

          <li style={{display:"flex", position:'relative', top:'30px'}}>
            <i class="fa-solid fa-cannabis"></i>
            <div style={{display:"grid"}}>
              <span>Indonesia UX Resea...</span>
              <span>734 members</span>
            </div>
          </li>

          <li style={{display:"flex", position:'relative', top:'40px'}}>
            <i class="fa-solid fa-cannabis"></i>
            <div style={{display:"grid"}}>
              <span>Prototyping Club </span>
              <span>734 members</span>
            </div>
          </li>

          <span style={{position:'relative', top:'50px'}}>show 5 more <i class="fa-solid fa-chevron-right"></i></span>
        </li>

        <li style={{position:'relative',top:'150px'}}>
          <div>
            <span>About</span>
            <span>Accessibility</span>
            <span>Help</span>
          </div>
          <div>
            <span>Privacy & Terms</span>
            <span>Advertise</span>
            <span>more</span>
          </div>
          <div>
            <span>spehre.io</span>
            <span>c</span>
            <span>2023</span>
          </div>
        </li>
    </ul>
  )
}

export default Sidebar