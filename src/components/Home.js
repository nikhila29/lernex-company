import React from 'react'
import '../App.css';
import { About } from './About';
import {Donutchart}  from './Donutchart';
import image from './image.jpg'


export const Home = () => {
  return (
    <div>
      <div className='background-color'></div>

      <div style={{display:"flex"}}>
        <div className='home-section'>
          <div className='img'><img src={image} alt='image'/></div>
          <div className='name'>Ayaat khanna</div>
          <div className='role'>UI/UX Designer</div>
          <div className='followers'><i class="fa-solid fa-user-group"></i> 21k Followers 43 Following</div>
          <div className='toggle'>Make my profile visible to employers <i class="fa-solid fa-toggle-on"></i></div>
          <div className='data'>Your profile Career goals will appear when search our database for candidates</div>
          <div className='links'>
            <h4>Online Links</h4>
            <i class="fa-solid fa-plus"></i>
          </div>
          <div className='portfolio'>Add your online portfolio links to increase your profile strngth</div>
          <div className='dropbox'>
            <i class="fa-brands fa-dropbox"></i>
            <i class="fa-brands fa-dropbox"></i>
            <i class="fa-brands fa-dropbox"></i>
          </div>
          <div className='donutchart'><Donutchart/></div>
          <div className='ranking'>
            <span>Your Ranking</span>
            <div className='scroll-bar'></div>
            <div>Hurray! You are in the top <span style={{color:'#847ffd', fontSize:'20px', fontWeight:'bold'}}>27%</span></div>
          </div>
        </div>

        <div className='About'><About/></div>
      </div>

    </div>

  )
}
