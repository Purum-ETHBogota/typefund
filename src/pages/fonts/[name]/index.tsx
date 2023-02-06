import { useRouter } from "next/router";
import fontsMetadata from "@/components/FontMetadata";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../../styles/Cart.module.css";
import { idText } from "typescript";
type Props = {
  font: any;
};

const Font = (props: Props) => {
  const router = useRouter();
  const [font, setFont] = useState({
    weight: [400],
    italic: false,
    name: "",
    author: "",
  });
  const [descentralized, setDescentralized] = useState(false);
  const [selfHosted, setSelfHosted] = useState(false);
  const [quantityD, setQuantityD] = useState(1);
  const [quantityS, setQuantityS] = useState(1);
  const [frequencyD, setFrequencyD] = useState(1);
  const [frequencyS, setFrequencyS] = useState(1);
  const [collection, setCollection] = useState(false);
  const [selectedFonts, setSelectedFonts] = useState<any[]>([]);

  const { name } = router.query;

  useEffect(() => {
    const currentFont = fontsMetadata.filter(
      (font) => font.name.toLowerCase() === String(name).split('-').join(' ')
    );
    setFont(currentFont[0]);
    let arraySelected: boolean[] = [];
    console.log('currentFont ', currentFont[0])
    const variations = currentFont[0].italic
      ? currentFont[0].weight.length * 2
      : currentFont[0].weight.length;
    for (let i = 1; i <= variations; i++) {
      arraySelected.push(false);
    }
    setSelectedFonts(arraySelected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDescentralized = (e: { target: { checked: boolean } }) => {
    setDescentralized(e.target.checked);
  };

  const handleCollection = (e: { target: { checked: boolean } }) => {
    setCollection(e.target.checked);
  };

  const handleSelfHosted = (e: { target: { checked: boolean } }) => {
    setSelfHosted(e.target.checked);
  };

  const handleQuantityD = (e: any) => {
    setQuantityD(e.target.value);
  };

  const handleQuantityS = (e: any) => {
    setQuantityS(e.target.value);
  };

  const handleFrequencyD = (e: any) => {
    setFrequencyD(e.target.value);
  };

  const handleFrequencyS = (e: any) => {
    setFrequencyS(e.target.value);
  };

  const getWeight = (weight: number) => {
    if (weight === 100) {
      return "Thin";
    } else if (weight === 200) {
      return "Extra Light";
    } else if (weight === 300) {
      return "Light";
    } else if (weight === 400) {
      return "Regular";
    } else if (weight === 500) {
      return "Medium";
    } else if (weight === 600) {
      return "Semi Bold";
    } else if (weight === 700) {
      return "Bold";
    } else if (weight === 800) {
      return "Extra Bold";
    } else if (weight === 900) {
      return "Black";
    }
  };

  console.log('selected Fonts ', selectedFonts);

  const handleSelectedFont = (e: any, idx: number) => {
    const modifiedArr: boolean[] = selectedFonts
    modifiedArr.splice(
      idx,
      1,
      !e.target.checked
    );

    setSelectedFonts(modifiedArr);
  };

  return (
    <div className={styles.cartWrapper}>
      <h1 style={{ textTransform: "capitalize" }}>Buy {name}</h1>
      <br />
      <div className={styles.licenseWrapper}>
        <h2 className={styles.licenseTitle}>1. Choose license</h2>
        <div className={styles.license}>
          <input
            type="checkbox"
            checked={descentralized}
            onChange={handleDescentralized}
          />
          <Image
            src="/descentralized.png"
            width={25}
            height={25}
            alt="Decentralized hosting"
          />
          <h3>Decentralized Hosting</h3>
          <span>Host fonts on IPFS</span>
          <select
            className={styles.select}
            onChange={handleQuantityD}
            value={quantityD}
          >
            <option value={1}>5000</option>
            <option value={2}>10000</option>
            <option value={3}>15000</option>
            <option value={4}>20000</option>
            <option value={5}>25000+</option>
          </select>
          <select
            className={styles.select}
            onChange={handleFrequencyD}
            value={frequencyD}
          >
            <option value={1}>Monthly unique users</option>
            <option value={2}>Quarterly unique users</option>
            <option value={3}>Semesterly unique users</option>
            <option value={4}>Yearly unique users</option>
          </select>
        </div>
        <div className={styles.license}>
          <input
            type="checkbox"
            checked={selfHosted}
            onChange={handleSelfHosted}
          />
          <Image
            src="/selfhosted.png"
            width={25}
            height={25}
            alt="Decentralized hosting"
          />
          <h3>Self Hosting</h3>
          <span>
            Download once
            <br />
            Host on your own server
          </span>
          <select
            className={styles.select}
            onChange={handleQuantityS}
            value={quantityS}
          >
            <option value={1}>5000</option>
            <option value={2}>10000</option>
            <option value={3}>15000</option>
            <option value={4}>20000</option>
            <option value={5}>25000+</option>
          </select>
          <select
            className={styles.select}
            onChange={handleFrequencyS}
            value={frequencyS}
          >
            <option value={1}>Monthly unique users</option>
            <option value={2}>Quarterly unique users</option>
            <option value={3}>Semesterly unique users</option>
            <option value={4}>Yearly unique users</option>
          </select>
        </div>
      </div>
      <div className={styles.fontList}>
        <h2 className={styles.fontTitle}>2. Choose fonts</h2>
        <div className={styles.fontShown}>
          <input
            type="checkbox"
            checked={collection}
            onChange={handleCollection}
          />
          <div className={styles.fontNameWrapper}>
            <h2
              style={{
                fontFamily: `${font.name}`,
                fontSize: "45px",
                fontWeight: "400",
              }}
            >
              {font.name} Collection
            </h2>
            <span>
              {font.weight.length > 1
                ? `Includes all ${font.italic ? font.weight.length * 2 : font.weight.length} styles of ${font.name}`
                : ""}
            </span>
          </div>
        </div>
        {font.italic && font.weight.length > 1
          ? font.weight.map((weight, idx) => {
              const italicIndex: number = idx + font.weight.length;
              return (
                <>
                  <div className={styles.fontShown} key={idx}>
                    <input
                      type="checkbox"
                      checked={selectedFonts[idx]}
                      onChange={(e) => handleSelectedFont(e, idx)}
                    />
                    <div className={styles.fontNameWrapper}>
                      <h2
                        style={{
                          fontFamily: `${font.name}`,
                          fontSize: "45px",
                          fontWeight: `${weight}`,
                        }}
                      >
                        {`${font.name}  ${getWeight(weight)}`}
                      </h2>
                    </div>
                  </div>
                  <div className={styles.fontShown} key={italicIndex}>
                    <input
                      type="checkbox"
                      checked={selectedFonts[italicIndex]}
                      onChange={(e) => handleSelectedFont(e, italicIndex)}
                    />
                    <div className={styles.fontNameWrapper}>
                      <h2
                        style={{
                          fontFamily: `${font.name}`,
                          fontSize: "45px",
                          fontWeight: `${weight}`,
                          fontStyle: "italic",
                        }}
                      >
                        {`${font.name}  ${getWeight(weight)} Italic`}
                      </h2>
                    </div>
                  </div>
                </>
              );
            })
          : font.weight.length > 1 && font.weight.map((weight, idx) => {
              return (
                <div className={styles.fontShown} key={idx}>
                  <input
                    type="checkbox"
                    checked={selectedFonts[idx]}
                    onChange={(e) => handleSelectedFont(e, idx)}
                  />
                  <div className={styles.fontNameWrapper}>
                    <h2
                      style={{
                        fontFamily: `${font.name}`,
                        fontSize: "45px",
                        fontWeight: `${weight}`,
                      }}
                    >
                      {`${font.name}  ${getWeight(weight)}`}
                    </h2>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { name: "roboto" } },
      { params: { name: "itim" } },
      { params: { name: "inconsolata" } },
      { params: { name: "raleway" } },
      { params: { name: "source-serif-pro" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps() {
  return {
    // Passed to the page component as props
    props: { font: {} },
  };
}

export default Font;
