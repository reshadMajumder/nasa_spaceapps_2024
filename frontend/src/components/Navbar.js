import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  // Retrieve user information from local storage
  const userName = localStorage.getItem("userName");
  const userId = localStorage.getItem("userId");

  const handleLogout = () => {
    // Clear user data from local storage
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("userName");
    localStorage.removeItem("userId");

    // Redirect to the login page or homepage
    navigate("/login"); // Adjust this as needed
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "rgb(2 6 23)", position: "sticky" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand px-5" to="/">
          <span
            style={{
              fontWeight: "900",
              fontSize: "24px",
              letterSpacing: "2px",
              color: "rgb(208, 0, 228)",
              background: "linear-gradient(90deg, gray, lightgray)", 
              WebkitBackgroundClip: "text", 
              WebkitTextFillColor: "transparent",
            }}
          >
            SLING-RING
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            width: "auto",
            padding: "0.25rem 0.75rem",
            backgroundColor: "rgba(0.1, 0.5, 0.3, 0.5)",
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 34,
              paddingTop: 18,
            }}
          >
            <li className="nav-item">
              <Link
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
                to="/streaming"
              >
                Streamings
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
                to="/explore"
              >
                Explore
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
                to="/lab"
              >
                Exo Lab
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/community"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                Community
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/vr"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                VR-mode
              </Link>
            </li>
          </ul>

          {/* Conditional rendering for logged in user */}
          {userId ? (
            <div className="navbar-text ms-auto d-flex align-items-center">
              <span className="text-light me-3">Hello, {userName}!</span>
              <button
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontWeight: "600",
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer"
                }}
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className=" ms-auto">
              <Link
                to="/login"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontWeight: "600",
                }}
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
