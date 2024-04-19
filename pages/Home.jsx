import { Link } from "react-router-dom";

import Hero from "../components/Hero";

import data from "../src/assets/restaurantsData.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const titleLenght = (text, maxLenght) => {
  return text.length > maxLenght ? text.slice(0, maxLenght) + "..." : text;
};

const Home = () => {
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
    <>
      <Hero />
      <section className="restaurants-wrapper">
        <div className="restaurants-container">
          {data.map((elem) => {
            return (
              <>
                {elem.type === "Health Store" ||
                elem.type === "Veg Store" ||
                elem.type === "Other" ||
                elem.thumbnail ===
                  "https://www.happycow.net/img/no-image.jpg" ? (
                  ""
                ) : (
                  <div className="restaurant">
                    <Link
                      to={`/restaurant/${elem.placeId}`}
                      style={{ textDecoration: "none" }}
                    >
                      <img
                        className="restaurant-cover"
                        src={elem.thumbnail}
                        alt="restaurant-cover"
                      />

                      <h3>{titleLenght(elem.name, 25)}</h3>
                    </Link>
                    <div className="rating-stars">
                      {displayStars(elem.rating)}
                    </div>
                  </div>
                )}
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
