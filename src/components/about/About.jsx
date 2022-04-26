import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
     <h5>Get To Know</h5>
     <h1>About Me</h1>
     <div className='container about__container'>
       <div className='about__me'>
         <div>
           <img src={ME} alt="" />
         </div>
       </div>

      <div className='about__content'>
       <div className='about__cards'>
         <article className='about__card'>
           <FaAward className='about__icons' />
           <h5>experience</h5>
           <small>2+ years Working</small>
         </article> 

         <article className='about__card'>
           <FiUser className='about__icons' />
           <h5>Clients</h5>
           <small>200+ Worldwide</small>
         </article>

         <article className='about__card'>
           <VscFolderLibrary className='about__icons' />
           <h5>Projects</h5>
           <small>80+ Completed</small>
         </article>

       </div>
       <p>
        I’m a software developer! I can help you build a product,
        feature or website Look through some of my work and experience!
        If you like what you see and have a project you need coded,
        don’t hestiate to contact me.
       </p>

       <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
     </div>
    </section>
  )
}

export default About