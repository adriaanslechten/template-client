// components/Chip.js
import React from "react";
import styles from "./Chip.module.css"; // Make sure to create this CSS file

const Chip = ({ label, value }) => {
  return (
    <div className={styles.chip}>
      {label}: {value}
    </div>
  );
};

export default Chip;
