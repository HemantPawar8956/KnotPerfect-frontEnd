import React from "react";
import { motion } from "framer-motion";
import { FaTasks, FaUsers } from "react-icons/fa";
import styles from "./userDashBoard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      {/* Profile Section */}
      <motion.div
        className={styles.profileCard}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}>
        <div className={styles.profileContent}>
          <h2>Hello Maria!</h2>
          <p>Add a detailed profile to get personalised suggestions</p>
          <button className={styles.setupButton}>Set Up Profile</button>
        </div>
        <img
          src="https://t4.ftcdn.net/jpg/06/23/19/05/360_F_623190597_vKwXSZNFqr5IZtPk6nIVwwkWfMPyvOj5.jpg"
          alt="Profile"
          className={styles.profileImage}
        />
      </motion.div>

      {/* Countdown Section */}
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}>
        <p className={styles.cardTitle}>
          Upcoming <strong>Wedding</strong>
        </p>
        <h1 className={styles.highlightText}>
          150 <span>Days</span>
        </h1>
        <p className={styles.date}>06/12/2025</p>
      </motion.div>

      {/* Budget Section */}
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}>
        <p className={styles.cardTitle}>Budget</p>
        <h1 className={styles.highlightText}>
          40<span>% Spent</span>
        </h1>
        <p className={styles.date}>$20k</p>
      </motion.div>

      {/* Guest List Section */}
      <motion.div
        className={styles.card}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}>
        <div className={styles.cardHeader}>
          <p className={styles.cardTitle}>Upcoming</p>
          <a href="#" className={styles.viewAll}>
            View All Tasks
          </a>
        </div>
        <h2 className={styles.guestTitle}>Guest List</h2>
        <p>VIP, VIP Guest</p>
        <p>Family & Friends</p>
        <div className={styles.iconContainer}>
          <FaUsers className={styles.icon} />
          <span>8</span>
          <FaTasks className={styles.icon} />
        </div>
      </motion.div>

      {/* Vendor Categories Section */}
      <div className={styles.vendorSection}>
        <h3>Vendor Categories</h3>
        <div className={styles.vendorGrid}>
          {["Catering", "Photographers", "Pandits", "Venue", "decorators"].map(
            (category, index) => (
              <motion.div
                key={index}
                className={styles.vendorCard}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}>
                <img
                  src={`/images/${category.toLowerCase()}.jpg`}
                  alt={category}
                  className={styles.vendorImage}
                />
                <p>{category}</p>
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
