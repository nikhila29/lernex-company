import React from 'react'
import '../App.css';

export const About = () => {
  return (
    <div>
      <div className='about'>
        <span>About</span>
        <span>Skills & Certificates</span>
        <span>Posts</span>
        <span>Spaces</span>

      </div>
      <div className='about-data'>
        The discovery was made by Richard McClintock, a professor of Latin at Hampden Sydney College in Virginia,
        who faced the impeteous recurrance of the dark word consectetur in the text Loreum ipsum researched its origins
        to identify them in sections 1.10.32 and 1.10.33 of the aforemention 
      </div>
      <div className='experience'>
        <h3>Experience</h3>
        <div className='exp'>
          <div>
            <i class="fa-solid fa-briefcase"></i>
          </div>
          <div>
            <div>
              Crisis Intervention Specialist
              <i class="fa-solid fa-plus"></i> 
            </div>
            <div>January 2023 - Present</div>
            <div>Icoderz - Ahmedabad, India</div>
            <div>
              Work with clients and web studios as freelancer. work in next areas: ecommerce web projects;
              creative landing pages; IOS and Android apps; corporate web sites and corporate identity sometimes
            </div>
          </div>
          
        </div>
      </div>
      <div className='education'>
        <h3>Education</h3>
        <div className='edu'>
          <div>
            <i class="fa-solid fa-graduation-cap"></i>
            
          </div>
          <div>
            <div>
              B.E - Elctronics & Telecommunication Engg..
              <i class="fa-solid fa-plus"></i>
            </div>
            <div>Aug 2015 - June 2019</div>
            <div>SBJITMR - Nagpur, India</div>
          </div>

        </div>
      
      </div>
      
    </div>
  )
}
