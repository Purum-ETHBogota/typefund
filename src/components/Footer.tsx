import Image from "next/image";
import styles from "../styles/Footer.module.css";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.leftSection}>
        <ul>
          <li className={styles.title}>type.fund</li>
          <li className={styles.element}>Home</li>
          <li className={styles.element}>Fonts</li>
        </ul>
        <ul>
          <li className={styles.title}>Resources</li>
          <li className={styles.element}>Docs</li>
          <li className={styles.element}>Discord</li>
        </ul>
        <ul>
          <li className={styles.title}>About</li>
          <li className={styles.element}>DAO</li>
          <li className={styles.element}>How to join</li>
          <li className={styles.element}>Pricing</li>
          <li className={styles.element}>Updates</li>
        </ul>
      </div>
      <div className={styles.rightSection}>
        <ul>
          <li className={styles.elementRight}>
            <Image
              src="/bx_bx-map.png"
              alt="map"
              width={25}
              height={25}
            />
            7480 Mockingbird Hill undefined
          </li>
          <li className={styles.elementRight}>
            <Image
              src="/ic_baseline-phone-android.png"
              alt="phone"
              width={25}
              height={25}
            />
            (239) 555-0108
            </li>
          <li className={styles.icons}>
            <Image
              src="/ant-design_twitter-outlined.png"
              alt="Twitter"
              className={styles.icon}
              width={25}
              height={25}
            />
            <Image
              src="/ant-design_linkedin-filled.png"
              alt="Linkedin"
              className={styles.icon}
              width={25}
              height={25}
            />
            <Image
              src="/ant-design_facebook-filled.png"
              className={styles.icon}
              alt="Facebook"
              width={25}
              height={25}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
