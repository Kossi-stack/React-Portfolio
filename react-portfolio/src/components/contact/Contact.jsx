import React from 'react'
import './contact.css'
import {MdOutlineMarkEmailRead} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
      <div className="contact__options">
        <article className='contact__option'>
          <MdOutlineMarkEmailRead className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>kfioklou2020@gmail.com</h5>
          <a href="mailto:kfioklou2020@gmail.com" target="_blank">Send a message</a>
        </article>
        <article className='contact__option'>
        <BsMessenger className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>Jean solo</h5>
          <a href="https://m.me/jean.solo" target="_blank">Send a message</a>
        </article>
        <article className='contact__option'>
        <BsWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>123-467-890</h5>
          <a href="https://api.whatsapp.com/send?phone+233500562379 " target="_blank">Send a message</a>
        </article>
      </div>
      {/* END OF CONTACT OPTIONS*/}
      <form action="">
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
      </div>
    </section>
  )
}

export default Contact