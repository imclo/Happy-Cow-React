import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import data from "../src/assets/restaurantsData.json";

const Restaurant = () => {
  const { index } = useParams();
  const restaurantData = data[index];

  const [currentRestaurant, setCurrentRestaurant] = useState(data[0]);

  return (
    <div className="restaurant-body">
      <div className="restaurant-container">
        <div className="column1">
          <h3>{currentRestaurant.name}</h3>
          <img
            className="restaurant-cover"
            src={currentRestaurant.thumbnail}
            alt="restaurant-photo"
          />
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
