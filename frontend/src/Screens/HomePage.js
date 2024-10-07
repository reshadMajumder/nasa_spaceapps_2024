import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import { Link } from "react-router-dom";
import B_URL from "../Services/Api";

const HomePage = () => {
  const [exoplanets, setExoplanets] = useState([]);

  // Fetch exoplanet data from NASA API
  useEffect(() => {
    const fetchExoplanets = async () => {
      try {
        const response = await axios.get(
          // 'http://127.0.0.1:8000/api/exoplanets/'
          `${B_URL}/api/exoplanets/`
        );
        console.log("Fetched Exoplanets Data: ", response.data); // Debugging to ensure data is received
        setExoplanets(response.data.slice(0, 10)); // Limit to first 10 exoplanets for demo purposes
      } catch (error) {
        console.error("Error fetching exoplanets: ", error);
      }
    };

    fetchExoplanets();
  }, []);

  return (
    <div className="home-background">
      <div className="container">
        <div className="row">
          {exoplanets.length > 0 ? (
            exoplanets.slice(0, 6).map((planet, index) => (
              <div
                className="col-lg-4 col-md-4 col-sm-6 col-12 mb-4"
                key={index}
              >
                <div className="card text-white">
                  {/* Use kepler_name or kepoi_name as planet name */}
                  <div style={{ padding: 16 }}>
                    <h5 className="card-title text-center">
                      {planet.kepler_name ||
                        planet.kepoi_name ||
                        "Unnamed Planet"}
                    </h5>
                    <ul style={{ listStyle: "disc", marginTop: 40 }}>
                      <li style={{ marginBottom: 10 }}>
                        <span style={{ fontWeight: "600" }}>Temperature:</span>
                        <span style={{ fontSize: 14, marginLeft: 5 }}>
                          {planet.koi_teq ? `${planet.koi_teq} K` : "Unknown"}
                        </span>
                      </li>
                      <li>
                        <span style={{ fontWeight: "600" }}>
                          {" "}
                          Orbital Period:
                        </span>
                        <span style={{ fontSize: 14, marginLeft: 5 }}>
                          {planet.koi_period
                            ? `${planet.koi_period} days`
                            : "Unknown"}
                        </span>
                      </li>
                    </ul>
                    {/* Link to individual planet page based on ID */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 40,
                      }}
                    >
                      <Link
                        to={`/planet/${planet.kepid}`}
                        className="btn btn-primary"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center text-white">
              <h3>Loading Exoplanets...</h3>
              <p style={{ fontSize: '0.9rem' }}>If it takes too long, please reload the page.</p>
            </div>
          )}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 40,
            marginBottom:40
          }}
        >
          <Link to={`/all`} style={{backgroundColor:"black",color:"white",borderRadius:16,padding:16,textDecoration: "none",}}>
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
