import { useRouter } from "next/router";
import fontsMetadata from "@/components/FontMetadata";
import { useEffect, useState } from "react";
import styles from '../../../styles/Cart.module.css';
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

  const { name } = router.query;

  useEffect(() => {
    const currentFont = fontsMetadata.filter(
      (font) => font.name.toLowerCase() === name
    );
    setFont(currentFont[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDescentralized = (e: { target: { checked: boolean }}) => {
    setDescentralized(e.target.checked);
  }

  return (
    <div className={styles.cartWrapper}>
      <h1 style={{ textTransform: "capitalize" }}>Buy {name}</h1>
      <br />
      <div className={styles.licenseWrapper}>
        <h2>1. Choose license</h2>
        <div className={styles.license}>
          <input type="checkbox" checked={descentralized} onChange={handleDescentralized} />
          
        </div>
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
