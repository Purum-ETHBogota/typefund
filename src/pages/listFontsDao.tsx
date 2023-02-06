import { useEffect, useState } from "react";
import lighthouse from "@lighthouse-web3/sdk";
import styles from "../styles/listFontsDao.module.css";

type Props = {
};

const ListFontDao = (props: Props) => {
  const [fonts, setFonts] = useState<{ uploads?: any[] , upload?: any[] }>({});

  useEffect(() => {
    const deploy = async () => {
      const output = await lighthouse.getUploads(
        `${process.env.NEXT_PUBLIC_WALLET_ADDRESS}`
      );
      console.log("output ", output);
      setFonts(output.data);
    };
    deploy();
  }, []);

  console.log('fonts ', fonts);

  return (
    <div className={styles.Dao}>
      <h1 className={styles.h1Alignment}>Type Fund DAO</h1>
      <span className={styles.spanAlignment}>
        $TYPE tokens govern the Type Fund DAO. $TYPE holders vote on proposals.{" "}
      </span>
      <span className={styles.spanAlignment}>
        A minimum of 100$TYPE is required to submit proposals.
      </span>
      <h2 className={styles.h2Alignment}>Proposals</h2>
      <div className={styles.wrapper}>
        {fonts && fonts.uploads &&
          fonts.uploads.map((font: any) => {
            return (
              <>
                <div
                  style={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    display: "flex",
                    flexWrap: "wrap",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      fontFamily: `MyCustomFont${font.cid}`,
                      fontSize: "28px",
                    }}
                    className={styles.font}
                  >
                    Look at this Text!
                  </div>
                  {font.fileName.replace(".ttf", "")}
                  <style>
                    {`
                    @font-face {
                      font-family: 'MyCustomFont${font.cid}';
                      src: url('https://ipfs.io/ipfs/${font.cid}') format('truetype');
                    }
                    `}
                  </style>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default ListFontDao;
