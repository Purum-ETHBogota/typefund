import React from "react";
import styles from "@/styles/Italic.module.css";

type Props = {
  value: boolean;
  setter: any;
  disabled: boolean;
};

const ItalicSelector = (props: Props) => {
  const { value, setter, disabled } = props;

  const handleChangeCheckbox = (e: { target: { checked: boolean } }) => {
    setter(e.target.checked);
  };
  return (
    <div className={styles.wrapper}>
      <span>Italic</span>
      <label
        className={styles.switch}
        style={{ opacity: `${disabled ? "0.3" : "1"}` }}
      >
        <input
          type="checkbox"
          disabled={disabled}
          checked={value}
          onChange={handleChangeCheckbox}
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};

export default ItalicSelector;
