import React from "react";
import { motion } from "framer-motion";
import styles from "./LoadingScreen.module.css";

const dots = Array.from({ length: 8 });

const LoadingScreen = () => {
  return (
    <div className={styles.loadingScreen}>
      <motion.div
        className={styles.spinner}
        animate={{ rotate: 440, scale: [1.2, 1, 1.2], direction: "revert" }}
        transition={{ duration: 5, repeat: Infinity, ease: "circInOut" }}>
        {dots.map((_, index) => (
          <motion.div
            key={index}
            className={styles.dot}
            animate={{
              scale: [1, 2.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: index * 0.1,
              opacity: 0.4,
            }}
            style={{ transform: `translate(-45px) rotate(${index * 45}deg) ` }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
