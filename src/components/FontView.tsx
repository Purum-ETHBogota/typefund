import { useState } from "react";
import WeightSlider from "./WeightSlider";
import CustomText from "./CustomText";
import SizeSlider from "./SizeSlider";
import ItalicSelector from "./ItalicSelector";
import styles from "../styles/FontView.module.css";

type Props = {
  font: {
    weight: number[];
    italic: boolean;
    name: string;
    author: string;
  };
};

const FontView = (props: Props) => {
  const { font } = props;
  const [italic, setItalic] = useState(false);
  const [size, setSize] = useState(60);
  const [weight, setWeight] = useState(400);
  const [customText, setCustomText] = useState("");

  return (
    <div
      className={styles.fontWrapper}
      style={{ fontFamily: `${font.name}`, fontStyle: "normal" }}
    >
      <div className={styles.configFont}>
        <div className={styles.basicInfo}>
          <h3
            style={{
              fontSize: "16px",
              fontWeight: 400,
            }}
          >
            {font.name}
          </h3>
          <h4
            style={{
              fontSize: "24px",
              opacity: 0.7,
              marginBottom: "15px",
            }}
          >
            {font.author}
          </h4>
        </div>
        <WeightSlider weights={font.weight} weight={weight} setter={setWeight} />
        <SizeSlider size={size} setter={setSize} />
        <ItalicSelector
          value={italic}
          disabled={!font.italic}
          setter={setItalic}
        />
        <CustomText setCustomText={setCustomText} />
      </div>
      <h1
        style={{
          fontStyle: `${italic ? "italic" : "normal"}`,
          fontSize: `${size}px`,
          fontWeight: `${weight}`,
        }}
      >
        {customText ? customText : font.name}
      </h1>
    </div>
  );
};

export default FontView;
