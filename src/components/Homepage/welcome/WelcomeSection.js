import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import './welcome.css'
import imgMain from '../../../assets/bravomain.png'
import imgDinein from '../../../assets/bravo-dinein.png'
import imgStaff from '../../../assets/bravo-staff.jpg'
import { motion } from "framer-motion";

const imageParentVariant = {
  initial: {},
  whileInView: {}
}



const WelcomeSection = () => {
  return (
    <article className="homepage__welcome about">
      <motion.section className="welcome__info flex-container flex-column txt-center pop-font"
        variants={imageParentVariant}
        initial={"initial"}
        whileInView={"whileInView"}>

        <h2 className="txt-white">
          Welcome to <span >Bravo Pizza</span>
        </h2>

        <p>
          Bravo Pizza is a cherished community cornerstone in Riverview, renowned for its authentic, mouth-watering pizzas and a warm, welcoming atmosphere. Under new ownership, we've preserved the beloved traditional recipes respecting the legacy of our previous owners. Our commitment extends beyond great food, with a focus on sustainability through local sourcing and eco-friendly practices. Bravo Pizza is more than just a restaurant; it's a place where families gather, memories are made, and community ties are strengthened. Join us for a slice of happiness and experience firsthand why we are a local favorite!</p>
      </motion.section>
      <div className="welcome__cover">
        <div className='imageHolder' >
          <div className='Col1'>
          <LazyLoadImage
            className='imgCover'
            id="img1"
            src={imgMain}
            sizes="(min-width: 1440px) 1440px, (min-width: 700px) 700px, 375px"
            alt="Bravo Pizza restaurant interior"
          />
          <LazyLoadImage
            className='imgCover'
            id="img2"
            src={imgDinein}
            sizes="(min-width: 1440px) 1440px, (min-width: 700px) 700px, 375px"
            alt="Bravo Pizza restaurant interior"
          />
          </div>
          <div className='col2'>
          <LazyLoadImage
            className='imgStaff'
            id="img3"
            src={imgStaff}
            sizes="(min-width: 1440px) 1440px, (min-width: 700px) 700px, 375px"
            alt="Bravo Pizza restaurant interior"
          />
          </div>

        </div>


      </div>
    </article>
  )
}

export default WelcomeSection;