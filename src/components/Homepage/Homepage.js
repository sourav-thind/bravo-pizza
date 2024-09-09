import React, { useEffect } from "react";
import Hero from "./hero/Hero";
import ScrollButton from "../../helpers/ScrollBtn";
import WelcomeSection from "./welcome/WelcomeSection";
import ResetLocation from "../../helpers/ResetLocation";
import ContactLanding from "./contact-info/ContactLanding"
import PizzaReviewSlider from "./PizzaReviewSlider/PizzaReviewSlider";
import Menu from "../menu/menu";

const Homepage = ({
  showModal,
  isModalActive,
  hideMenu, }) => {
  useEffect(() => {
    document.title = "Bravo Pizza";
    ResetLocation();
  }, []);


  return (
    <React.Fragment>

      <Hero showModal={showModal} isModalActive={isModalActive} hideMenu={hideMenu}/>
      <WelcomeSection />
      <Menu/>
      <ContactLanding />
      <PizzaReviewSlider/>
      <ScrollButton /> 
      
    </React.Fragment>
  );
}

export default Homepage;
