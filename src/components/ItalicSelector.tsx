import React from "react";
import styles from "@/styles/Italic.module.css";

type Props = {
  value: boolean;
  setter: any;
};

const ItalicSelector = (props: Props) => {
  const { value, setter } = props;

  const handleChangeCheckbox = (e: { target: { checked: boolean } }) => {
    setter(e.target.checked);
  };
  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={value} onChange={handleChangeCheckbox} />
      <span className={styles.slider}></span>
    </label>
  );
};

export default ItalicSelector;
