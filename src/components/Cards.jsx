import React from "react";
import Card from "./Card";
import styles from "../StyleSheets/Cards.module.css";

export default function Cards({ cities, onClose }) {
  return (
    <div className={styles.div}>
      {cities.map((city) => (
        <Card
          max={city.max}
          min={city.min}
          name={city.name}
          img={city.img}
          lat={city.latitud}
          lon={city.longitud}
          id={city.id}
          desc={city.desc}
          onClose={onClose}
        />
      ))}
    </div>
  );
}
