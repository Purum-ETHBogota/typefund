import React from "react";
import styles from "../styles/Inputs.module.css";

type Props = {
  setCustomText: any;
};

const CustomText = (props: Props) => {
  const { setCustomText } = props;
  const handleCustomText = (e: { target: { value: string } }) => {
    setCustomText(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Try your own text"
      onChange={handleCustomText}
      className={styles.inputText}
    />
  );
};

export default CustomText;
