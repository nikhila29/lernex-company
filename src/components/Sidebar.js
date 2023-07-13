import React from 'react'
import '../App.css';

const Sidebar = () => {
  return (
    <ul>
        <li>
          <span className="sicon" >s</span>
          <span className='spehre'>spehre</span>
        </li>

        <li>
          <li>
            <i class="fa-solid fa-house"></i>
            <span>Home</span>
          </li>
          <li>
            <i class="fa-regular fa-envelope-open"></i>
            <span>Job Invites</span>
          </li>
          <li>
            <i class="fa-solid fa-chart-simple"></i>
            <span>Analytics</span>
          </li>
          <li>
            <i class="fa-solid fa-user"></i>
            <span>My Profile</span>
          </li>
          <li>
            <i class="fa-brands fa-internet-explorer"></i>
            <span>Explore</span>
          </li>
        </li>

        <li>
          <h5>Communities Feed</h5>
          <li style={{display:"flex"}}>
            <i class="fa-solid fa-cannabis"></i>
            <li style={{display:"grid"}}>
              <span>Indonesia UI Designer</span>
              <span>734 members</span>
            </li>
          </li>
          <li style={{display:"flex"}}>
            <i class="fa-solid fa-cannabis"></i>
            <li style={{display:"grid"}}>
              <span>Indonesia UI Designer</span>
              <span>734 members</span>
            </li>
          </li>

          <li style={{display:"flex"}}>
            <i class="fa-solid fa-cannabis"></i>
            <li style={{display:"grid"}}>
              <span>Indonesia UX Resea...</span>
              <span>734 members</span>
            </li>
          </li>

          <li style={{display:"flex"}}>
            <i class="fa-solid fa-cannabis"></i>
            <li style={{display:"grid"}}>
              <span>Prototyping Club </span>
              <span>734 members</span>
            </li>
          </li>

          <span>show 5 more <i class="fa-solid fa-chevron-right"></i></span>
        </li>

        <li>
          <li>
            <span>About</span>
            <span>Accessibility</span>
            <span>Help</span>
          </li>
          <li>
            <span>Privacy & Terms</span>
            <span>Advertise</span>
            <span>more</span>
          </li>
          <li>
            <span>spehre.io</span>
            <span>c</span>
            <span>2023</span>
          </li>
        </li>
    </ul>
  )
}

export default Sidebar