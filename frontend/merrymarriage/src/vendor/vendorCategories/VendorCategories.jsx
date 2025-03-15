import React, { useEffect, useState } from "react";
import styles from "./vendorCategories.module.css";
import axios from "axios";
import toast from "react-hot-toast";

const VendorCategories = () => {
  const [allVendors, setAllVendors] = useState([]);

  const getAllVendors = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/vendor/categories"
      );
      setAllVendors(response?.data?.data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    // getAllVendors();
    setAllVendors([
      {
        image: "",
        title: "PhotoGraphers",
      },
      {
        image: "",
        title: "PhotoGraphers",
      },
      {
        image: "",
        title: "PhotoGraphers",
      },
      {
        image: "",
        title: "PhotoGraphers",
      },
      {
        image: "",
        title: "PhotoGraphers",
      },
      {
        image: "",
        title: "PhotoGraphers",
      },
      {
        image: "",
        title: "PhotoGraphers",
      },
      {
        image: "",
        title: "PhotoGraphers",
      },
    ]);
  }, []);
  return (
    <section className={styles.VendorCategories}>
      {allVendors.map(() => {
        return (
          <div className={styles.vendorCard}>
            <img src="" alt="" />
            <p className={styles.vendorCardTitle}>vendor Category ICON</p>
          </div>
        );
      })}
    </section>
  );
};

export default VendorCategories;
