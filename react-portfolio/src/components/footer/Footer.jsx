import React from 'react'
import './footer.css'
import {BsMessenger} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
     {/* <a href="#" className='footer__logo'>LOGO</a> */}
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Sebvices</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><BsMessenger/></a>
        <a href="https://facebook.com"><BsInstagram/></a>
        <a href="https://facebook.com"><BsTwitter/></a>
        <a href="https://facebook.com"><FaLinkedinIn/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; All Rights Reserved © 2022.</small>
      </div>
    </footer>
  )
}

export default Footer