import React from "react";
import '../pages/css/Contact.css'

const Contactlist = ({ item }) => {
  return (
    <div className="contactlist">
      <a href={item.link} target="_blank" rel="noreferrer">  <h1> {item.icon} {item.name}</h1> </a>
    </div>
  );
};

export default Contactlist;
