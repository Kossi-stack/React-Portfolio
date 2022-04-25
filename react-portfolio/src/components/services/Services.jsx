import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>FRONT END DEVELOPMENT</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> lorem, ipsum dolor sit amet consecteur adispiscing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> lorem, ipsum dolor sit amet consecteur adispiscing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> lorem, ipsum dolor sit amet consecteur adispiscing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> lorem, ipsum dolor sit amet consecteur adispiscing</p>
            </li>
          </ul>
        </article>
        {/* END OF FRONT END DEVELOPMENT*/}

        <article className='service'>
          <div className='service__head'>
            <h3>BACK END DEVELOPMENT</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> lorem, ipsum dolor sit amet consecteur adispiscing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> lorem, ipsum dolor sit amet consecteur adispiscing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> lorem, ipsum dolor sit amet consecteur adispiscing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> lorem, ipsum dolor sit amet consecteur adispiscing</p>
            </li>
          </ul>
        </article>
        {/* END OFBACK END DEVELOPMENT*/}
        <article className='service'>
          <div className='service__head'>
            <h3>WEB DESIGN</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> lorem, ipsum dolor sit amet consecteur adispiscing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> lorem, ipsum dolor sit amet consecteur adispiscing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> lorem, ipsum dolor sit amet consecteur adispiscing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> lorem, ipsum dolor sit amet consecteur adispiscing</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DESIGN*/}
      </div>
      
    </section>
  )
}

export default Services