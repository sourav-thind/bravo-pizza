import React from 'react'
import { motion } from "framer-motion";
import PizzaOne from '../../../assets/images/contact-us/image-one-parallax.webp'
import './company-info.css'

const ContactUsLanding = () => {
  return (
    <section className="homepage__company-info flex-container flex-row txt-white" >
      <motion.img
        initial={{ opacity: 0, right: 100 }}
        whileInView={{ opacity: 0.8, right: 300, }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        src={PizzaOne} alt="" aria-hidden="true" className="parallax company-info__img"
        loading='lazy'
      />
      <motion.img
        initial={{ opacity: 0, right: 100 }}
        whileInView={{ opacity: 0.8, right: 200, }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        src={PizzaOne} alt="" aria-hidden="true" className="parallax company-info__img" loading='lazy'
      />
      <motion.img
        initial={{ opacity: 0, right: 50 }}
        whileInView={{ opacity: 0.8, right: 100, }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        src={PizzaOne} alt="" aria-hidden="true" className="parallax company-info__img" loading='lazy'
      />
      <section className='company-info__details'>
        <div>
          <h2>(506)386-7000</h2>
          <p>Contact us if you have any questions</p>
        </div>
        <div>
          <h2>567 Coverdale Rd, E1B3K6 </h2>
          <p>Riverview, NB</p>
        </div>
        <div>
          <h3>Open Sunday-Thursday(11:30am-9:00pm)</h3>
          <h3>Friday-Saturday(11:30am-12:30am)</h3>
        </div>
      </section>
    </section>
  );

}


export default ContactUsLanding;