import { useParams } from "react-router-dom";

import data from "../src/assets/restaurantsData.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";

const Restaurant = () => {
  const { placeId } = useParams();
  // console.log("là =>", typeof placeId);
  // console.log(placeId);

  const currentRestaurant = data.find(
    (element) => element.placeId === Number(placeId)
  );
  // console.log(currentRestaurant);

  const displayStars = (number) => {
    let tab = [];

    for (let i = 1; i <= 5; i++) {
      if (number < i) {
        tab.push(<FontAwesomeIcon icon="fa-solid fa-star" color="lightgrey" />);
      } else {
        tab.push(<FontAwesomeIcon icon="fa-solid fa-star" color="#FFC200" />);
      }
    }

    return tab;
  };

  return (
    <div className="restaurant-body">
      <div className="restaurant-container">
        <div className="column1">
          <h2>{currentRestaurant.name}</h2>
          <div className="rating-stars">
            {displayStars(currentRestaurant.rating)}
          </div>
          <img
            className="restaurant-photo"
            src={currentRestaurant.pictures[0]}
            alt="restaurant-photo"
          />
          <img
            className="restaurant-photo"
            src={currentRestaurant.pictures[1]}
            alt="restaurant-photo"
          />

          <div className="description">{currentRestaurant.description}</div>
        </div>
        <div className="column2">
          <div className="restau-map">
            <MapContainer
              center={[
                currentRestaurant.location.lat,
                currentRestaurant.location.lng,
              ]}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker
                position={[
                  currentRestaurant.location.lat,
                  currentRestaurant.location.lng,
                ]}
              >
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>

          <div className="info-restau">
            <FontAwesomeIcon
              className="icon"
              icon="fa-solid fa-location-dot"
              color="#1A1A1A"
            />
            {currentRestaurant.address}
          </div>
          <div className="info-restau">
            <FontAwesomeIcon
              className="icon"
              icon="fa-solid fa-phone"
              color="#1A1A1A"
            />
            {currentRestaurant.phone}
          </div>
          <div className="info-restau">
            <FontAwesomeIcon className="icon" icon="fa-solid fa-link" />
            {currentRestaurant.website}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
