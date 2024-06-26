import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  return (
    <>
      <div className="picture-background">
        <div className="hero-container">
          <h1>Find Vegan Restaurants Nearby</h1>
          <div className="home-hero-search-container">
            <input
              type="text"
              placeholder="Search for city, region, or zipcode"
            />
            <div className="search-icon-container">
              <FontAwesomeIcon icon="search" color="white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
