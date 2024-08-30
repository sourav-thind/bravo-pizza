import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import './welcome.css'
import img375 from '../../../assets/images/section-one/section-one-375.webp'
import img700 from '../../../assets/images/section-one/section-one-700.webp'
import img1440 from '../../../assets/images/section-one/section-one-1440.webp'
import PizzaOne from '../../../assets/images/welcome-section/pizza-one-parallax.png'
import PizzaTwo from '../../../assets/images/welcome-section/pizza-two-parallax.png'
import { motion } from "framer-motion";

const imageParentVariant = {
  initial: {},
  whileInView: {}
}


const leftImageVariant = {
  initial: { opacity: 0, left: -100 },
  whileInView: {
    opacity: 0.7, left: 0,
    transition: { duration: 4 }
  },

}

const rightImageVariant = {
  initial: { opacity: 0, right: -100 },
  whileInView: {
    opacity: 0.7, right: 0,
    transition: { duration: 4, }
  },

}

const WelcomeSection = () => {
  return (
    <article className="homepage__welcome">
      <motion.section className="welcome__info flex-container flex-column txt-center pop-font"
        variants={imageParentVariant}
        initial={"initial"}
        whileInView={"whileInView"}>
       
        <h2 className="txt-white">
          Welcome to <span>Bravo Pizza</span> restaurant
        </h2>
        <p>
        At Bravo Pizza, we elevate every slice to a new level of deliciousness! Our secret to success? We know exactly what our customers crave and turn those desires into unforgettable taste experiences. Freshness, originality, and top-tier quality are at the heart of everything we do. With affordable prices, convenient locations and your love, satisfying your pizza cravings has never been easier. Whether you're pre-ordering for yourself or planning a corporate event, Bravo Pizza is here to serve with options that fit every need. At Bravo Pizza, we care about you because it's your love for pizza that makes us special! </p>
      </motion.section>
      <LazyLoadImage
        className="welcome__cover"
        src={img375}
        srcSet={`${img1440} 1440w, ${img700} 700w, ${img375} 375w`} 
        sizes="(min-width: 1440px) 1440px, (min-width: 700px) 700px, 375px"
        alt="Bravo Pizza restaurant interior with people at the tabel and the staff serving the customers"
      />
    </article>
  )
}

export default WelcomeSection;