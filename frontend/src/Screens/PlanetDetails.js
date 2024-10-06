import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Chat from '../components/Chat';
import B_URL from '../Services/Api';
import './PlanetsDetails.css'; 

const PlanetDetails = () => {
    const { id } = useParams();
    const [planet, setPlanet] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPlanetDetails = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${B_URL}/api/exoplanets/`);
                const selectedPlanet = response.data.find(p => p.kepid === parseInt(id));
                setPlanet(selectedPlanet);
            } catch (error) {
                console.error("Error fetching planet details: ", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPlanetDetails();
    }, [id]);

    if (loading) {
        return (
            <div className="home-background">
                <h3>Loading Planet Details...</h3>
                <div className="spinner-border text-light" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        );
    }

    if (!planet) {
        return (
            <div className="home-background">
                <h3>Planet not found... please reload the page or try again</h3>
            </div>
        );
    }

    return (
        <div className="home-background">
            <div className="container  d-flex">
                <div className="row justify-content-center">
                    <div className="planet-details_p"> {/* Updated class name */}
                        <h4>Exoplanet Details: {planet.kepler_name || planet.kepoi_name}</h4>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Kepler Name: {planet.kepler_name || "Unknown"}</h5>
                                <p><strong>Kepid:</strong> {planet.kepid}</p>
                                <p><strong>Temperature (Teq):</strong> {planet.koi_teq ? `${planet.koi_teq} K` : "Unknown"}</p>
                                <p><strong>Orbital Period:</strong> {planet.koi_period ? `${planet.koi_period} days` : "Unknown"}</p>
                                <p><strong>Radius:</strong> {planet.koi_prad ? `${planet.koi_prad} Earth radii` : "Unknown"}</p>
                                <p><strong>Stellar Temperature:</strong> {planet.koi_steff ? `${planet.koi_steff} K` : "Unknown"}</p>
                                <p><strong>Orbital Impact Parameter:</strong> {planet.koi_impact || "Unknown"}</p>
                                <p><strong>Orbital Depth:</strong> {planet.koi_depth || "Unknown"}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Chat planet={planet} />
            </div>
        </div>
    );
};

export default PlanetDetails;
