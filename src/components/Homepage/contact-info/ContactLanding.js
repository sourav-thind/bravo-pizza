import React from "react";
import { motion } from "framer-motion";

import L from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import { Marker } from "react-leaflet";
import './contact-info.css'
import "leaflet/dist/leaflet.css";



const ContactLanding = () => {
  

  const customIcon = new L.Icon({
    iconUrl: require("leaflet/dist/images/marker-icon.png"), 
    iconShadow: require("leaflet/dist/images/marker-shadow.png"),
    iconSize: [30, 50], 
    iconAnchor: [19, 45], 
  });
  
  const position = [46.06340, -64.81]; 
  

    
  return (
    <motion.article className="homepage__contact flex-container flex-column" 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >

<div className="map-container">
      <MapContainer
        center={position}
        zoom={14}
        scrollWheelZoom={true}
        maxBounds={[
          [85, -180], 
          [-85, 180],
        ]}
        maxBoundsViscosity={1.0}
        className="leaflet-container"
      >


        <TileLayer className="map"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}></Marker>
      </MapContainer>
    </div>
    

     
      <div
        className="contact__info"
      >
        <div className="contacts">
        <h3>Contact Us</h3>
        <p>Have a question, suggestion, or just want to say hello? We'd love to hear from you!</p>
        <section>
          <h4>Customer Support:</h4>
          <p>Our dedicated customer support team is ready to assist you with any inquiries you may have.</p>         
            <p>- Phone: 506-386-7000</p>
        </section>
        <section>
          <h4>Feedback and Suggestions:</h4>
          <p>We value your feedback and are always striving to improve. If you have any suggestions, comments, or ideas on how we can enhance our offerings, please let us know.</p> 
            <p>- Email: Info.bravopizza@gmail.com</p>
        </section>
        </div>
        <section>
          <h4>567 Coverdale Road, Riverview, NB</h4>
          
        <div>
      <a
        href="https://www.google.com/maps/place/Bravo+Pizza/@46.063317,-64.8120328,17.14z/data=!4m6!3m5!1s0x4ca0b9a5bde5a727:0xb6b52771d836664b!8m2!3d46.0632768!4d-64.810312!16s%2Fg%2F1tj2n1d7?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="open-map-button">
        <h4> Open in Maps</h4>
        </button>
      </a>
    </div>
        </section>
      </div>
    </motion.article>
  );
}


export default ContactLanding;
