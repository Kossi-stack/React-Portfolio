import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I have</h5>
      <h2>My Experience</h2>
      
      <div className='container experience__container'>
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className='experience__content'>
           <article className='experience__details'>
             <BsPatchCheckFill className='experience__details-icon' />
             <div>
             <h4>HTML</h4>
             <small className='text-light'>Experienced</small>
             </div>
           </article>
           <article className='experience__details'>
             <BsPatchCheckFill className='experience__details-icon' />
             <div>
             <h4>CSS</h4>
             <small className='text-light'>Experienced</small>
             </div>
           </article>
           <article className='experience__details'>
             <BsPatchCheckFill className='experience__details-icon' />
             <div>
             <h4>JAVASCRIPT</h4>
             <small className='text-light'>Experienced</small>
             </div>
           </article>
           <article className='experience__details'>
             <BsPatchCheckFill className='experience__details-icon' />
             <div>
             <h4>BOOTSTRAP</h4>
             <small className='text-light'>Experienced</small>
             </div>
           </article>
           <article className='experience__details'>
             <BsPatchCheckFill className='experience__details-icon' />
             <div>
             <h4>REACT & REDUX</h4>
             <small className='text-light'>Experienced</small>
             </div>
           </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className='experience__backend'>
        <h3>Backend Development</h3>
          <div className='experience__content'>
           <article className='experience__details'>
             <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>NODE JS</h4>
             <small className='text-light'>Experienced</small>
            </div>
           </article>
           <article className='experience__details'>
             <BsPatchCheckFill className='experience__details-icon' />
             <div>
             <h4>MySQL</h4>
             <small className='text-light'>Experienced</small>
             </div>
           </article>
           <article className='experience__details'>
             <BsPatchCheckFill className='experience__details-icon' />
             <div>
             <h4>POSTGRESQL</h4>
             <small className='text-light'>Experienced</small>
             </div>
           </article>
           <article className='experience__details'>
             <BsPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>RUBY</h4>
             <small className='text-light'>Experienced</small>
            </div>
           </article>
           <article className='experience__details'>
             <BsPatchCheckFill className='experience__details-icon' />
             <div>
             <h4>RUBY ON RAILS</h4>
             <small className='text-light'>Experienced</small>
             </div>
           </article>
          </div>
        </div>
        {/* END OF BACKEND */}

        <div className='experience__designer'>
        <h3>Web Design</h3>
          <div className='experience__content'>
           <article className='experience__details'>
             <BsPatchCheckFill className='experience__details-icon' />
             <div>
             <h4>GOOGLE SITES</h4>
             <small className='text-light'>Experienced</small>
             </div>
           </article>
           <article className='experience__details'>
             <BsPatchCheckFill className='experience__details-icon' />
             <div>
             <h4>WORDPRESS</h4>
             <small className='text-light'>Experienced</small>
             </div>
           </article>
           <article className='experience__details'>
             <BsPatchCheckFill className='experience__details-icon' />
             <div>
             <h4>WIX</h4>
             <small className='text-light'>Experienced</small>
             </div>
           </article>
           <article className='experience__details'>
             <BsPatchCheckFill className='experience__details-icon' />
             <div>
             <h4>WEEBLY</h4>
             <small className='text-light'>Experienced</small>
             </div>
           </article>
           <article className='experience__details'>
             <BsPatchCheckFill className='experience__details-icon' />
             <div>
             <h4>WEBFLOW</h4>
             <small className='text-light'>Experienced</small>
             </div>
           </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience