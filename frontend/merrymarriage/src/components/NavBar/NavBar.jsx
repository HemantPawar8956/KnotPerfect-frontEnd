import React, { useState } from "react";
import styles from "./navBar.module.css";
import { Button, IconButton } from "@mui/material";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import SearchBar from "../SearchBar";

const dropdownContent = {
  Venues: {
    type: [
      "Banquet Halls",
      "Marriage Garden / Lawns",
      "Wedding Resorts",
      "Small Function / Party Halls",
      "Destination Wedding Venues",
      "Kalyana Mandapams",
      "4 Star & Above Wedding Hotels",
      "View all Venues",
    ],
    city: [
      "Mumbai",
      "Bangalore",
      "Pune",
      "Kolkata",
      "Jaipur",
      "Lucknow",
      "Hyderabad",
      "More",
    ],
  },
  Vendors: {
    categories: {
      Photographers: ["Photographers"],
      Makeup: ["Bridal Makeup", "Family Makeup"],
      "Pre Wedding Shoot": [
        "Pre Wedding Shoot Locations",
        "Pre Wedding Photographers",
      ],
      "Planning & Decor": ["Wedding Planners", "Decorators"],
    },
  },
  Photos: {
    categories: {
      Outfit: [
        "Bridal Lehenga",
        "Wedding Sarees",
        "Engagement",
        "Mehndi",
        "Blouse Designs",
        "More",
      ],
      "Jewellery & Accessories": [
        "Bridal Jewellery",
        "Engagement Rings",
        "Floral Jewellery",
        "More",
      ],
      Mehndi: ["Arabic", "Mehndi Designs", "Simple", "Unique", "More"],
      "Decor & Ideas": [
        "Wedding Decor",
        "Bridal Entry",
        "Groom Entry",
        "Wedding Games",
        "More",
      ],
      "Wedding Card Designs": [
        "Designs",
        "Wedding Gifts",
        "Wedding Invitations",
        "More",
      ],
      "Wedding Photography": [
        "Pre Wedding Shoot",
        "Wedding",
        "Wedding Photoshoot & Poses",
        "More",
      ],
      "Groom Wear": ["Sherwani for Groom", "Wedding Suits for Groom", "More"],
      "Bridal Makeup & Hair": [
        "Bridal Makeup",
        "Bridal Hairstyles",
        "Engagement",
        "Mehndi",
        "More",
      ],
    },
  },
  RealWeddings: {
    categories: {
      "By City": ["Mumbai", "Bangalore", "Pune", "Kolkata", "Jaipur", "Others"],
      "By Culture": [
        "Maharashtrian",
        "Punjabi / Sikh",
        "Bengali",
        "Gujarati",
        "Marwari",
        "Telugu",
        "Others",
      ],
      "By Theme": [
        "Destination",
        "Grand & Luxurious",
        "Pocket Friendly Stunners",
        "Intimate & Minimalist",
        "Modern & Stylish",
        "International",
        "Others",
      ],
    },
    images: [
      { src: "wedding1.jpg", label: "Vathsalya & Karthik (Bangalore)" },
      { src: "wedding2.jpg", label: "Gargi & Rhythm (Mumbai)" },
    ],
  },
};

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Knot Perfect</div>

      <IconButton className={styles.menuIcon} onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </IconButton>

      <ul className={styles.navLinks}>
        {Object.keys(dropdownContent).map((item) => (
          <li
            key={item}
            className={styles.navItem}
            onMouseEnter={() => setActiveDropdown(item)}
            onMouseLeave={() => setActiveDropdown(null)}>
            {item}
            {activeDropdown === item && dropdownContent[item] && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={styles.dropdownContainer}>
                {Object.entries(
                  dropdownContent[item].categories || dropdownContent[item]
                ).map(([category, values]) => (
                  <div key={category} className={styles.dropdownColumn}>
                    <h4>{category}</h4>
                    {Array.isArray(values)
                      ? values.map((value) => (
                          <p key={value} className={styles.dropdownItem}>
                            {value}
                          </p>
                        ))
                      : Object.entries(values).map(
                          ([subCategory, subValues]) => (
                            <div key={subCategory}>
                              <h5>{subCategory}</h5>
                              {subValues.map((subValue) => (
                                <p
                                  key={subValue}
                                  className={styles.dropdownItem}>
                                  {subValue}
                                </p>
                              ))}
                            </div>
                          )
                        )}
                  </div>
                ))}
              </motion.div>
            )}
          </li>
        ))}
        <li>
          <SearchBar />
        </li>
        <Button variant="contained" className={styles.loginButton}>
          Log In
        </Button>
      </ul>

      {menuOpen && (
        <section className={styles.mobileMenu}>
          <div className={styles.mobileMenuItem}>
            {Object.keys(dropdownContent).map((item) => (
              <div key={item} className={styles.mobileNavItem}>
                {item}
              </div>
            ))}
            <Button variant="contained" className={styles.mobileLoginButton}>
              Log In
            </Button>
          </div>
        </section>
      )}
    </nav>
  );
};

export default NavBar;
