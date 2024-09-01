import React, { useEffect } from "react";
import Hero from "./hero/Hero";
import ScrollButton from "../../helpers/ScrollBtn";
import ContactUsLanding from "./company-info/ContactUsLanding";
import WelcomeSection from "./welcome/WelcomeSection";
import ResetLocation from "../../helpers/ResetLocation";
import ContactLanding from "./contact-info/ContactLanding"

const Homepage = ({
  showModal,
  isModalActive,
  hideMenu, }) => {
  useEffect(() => {
    document.title = "Pizza Time";
    ResetLocation();
  }, []);


  return (
    <React.Fragment>

      <Hero showModal={showModal} isModalActive={isModalActive} hideMenu={hideMenu}/>
      <WelcomeSection />

      <ContactLanding />
      <ScrollButton /> 
      
    </React.Fragment>
  );
}

export default Homepage;
