import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import styles from "./LandingStats.module.css";

import Wetlands from "../../assets/imgs/card1.png";
import BodiesWater from "../../assets/imgs/card2.png";
import desert from "../../assets/imgs/card3.png";
import GreenSpaces from "../../assets/imgs/card4.png";

const stats = [
  {
    imgSrc: GreenSpaces,
    delay: 0,
    title: "5871.32 كم2",
    description: "المساحات الخضراء",
  },
  {
    imgSrc: desert,
    delay: 200,
    title: "132615.26 كم2",
    description: "المناطق الصحراوية",
    isTop: true,
  },
  {
    imgSrc: BodiesWater,
    delay: 400,
    title: "174.85 كم2",
    description: "المسطحات المائية",
  },
  {
    imgSrc: Wetlands,
    delay: 600,
    title: "7.02 كم2",
    description: "الأراضي الرطبة",
    isTop: true,
  },
];

// eslint-disable-next-line react/prop-types
const StatCard = ({ imgSrc, delay, title, description, isTop }) => (
  <Col xs={12} md={12} lg={3} className={styles.statCard}>
    <Fade right delay={delay}>
      <div className={`${styles.statDiv} ${isTop ? styles.statTop : ""}`}>
        <div className={styles.statDivImg}>
          <img className="img-fluid bg" src={imgSrc} alt="statBG" />
        </div>
        <div className={styles.statDivInfo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="128"
            height="128"
            viewBox="0 0 128 128"
            fill="none"
            className={styles.statIcon}
          >
            <path
              d="M100 120C96.4892 120.196 92.9929 119.412 89.9029 117.733C86.8129 116.055 84.251 113.55 82.5042 110.498C80.7574 107.446 79.8947 103.969 80.0126 100.454C80.1306 96.9399 81.2245 93.5278 83.172 90.6L96.644 69.824C97.007 69.2643 97.5042 68.8043 98.0903 68.4858C98.6764 68.1674 99.3329 68.0005 100 68.0005C100.667 68.0005 101.324 68.1674 101.91 68.4858C102.496 68.8043 102.993 69.2643 103.356 69.824L116.616 90.264C118.734 93.4117 119.908 97.0992 120 100.892C119.873 106.075 117.697 110.997 113.948 114.578C110.199 118.16 105.184 120.11 100 120ZM100 79.348L89.968 94.812C89.1483 96.3601 88.6866 98.0724 88.6168 99.8227C88.5471 101.573 88.8711 103.317 89.565 104.925C90.2589 106.533 91.3049 107.965 92.626 109.116C93.9471 110.266 95.5095 111.105 97.1981 111.571C98.8866 112.037 100.658 112.118 102.382 111.808C104.106 111.498 105.739 110.805 107.159 109.78C108.58 108.755 109.752 107.425 110.59 105.886C111.428 104.348 111.91 102.641 112 100.892C111.914 98.5884 111.158 96.3599 109.824 94.48L100 79.348ZM44 96H36C36.0212 77.9718 43.1922 60.688 55.9401 47.9401C68.688 35.1922 85.9718 28.0212 104 28H120V36H104C88.0925 36.018 72.8418 42.3452 61.5935 53.5935C50.3452 64.8418 44.018 80.0925 44 96Z"
              fill="white"
            />
            <path
              d="M64 96H56C56.0148 83.2742 61.0767 71.0738 70.0752 62.0752C79.0738 53.0767 91.2742 48.0148 104 48H120V56H104C93.3949 56.0116 83.2275 60.2297 75.7286 67.7286C68.2297 75.2275 64.0116 85.3949 64 96Z"
              fill="white"
            />
            <path
              d="M104 8.00004C86.9476 7.98627 70.2632 12.9582 56 22.304C41.7375 12.9567 25.0526 7.98464 8 8.00004V16C22.4594 15.9764 36.6513 19.8971 49.048 27.34C45.7614 29.975 42.6669 32.8409 39.788 35.916C29.9953 30.7265 19.0827 28.009 8 28V36C17.1806 35.9985 26.2393 38.1017 34.48 42.148C31.9791 45.3694 29.7043 48.7602 27.672 52.296C21.4909 49.493 14.7869 48.029 8 48V56C13.512 56.0056 18.962 57.1638 24 59.4C18.7205 70.8788 15.9912 83.3654 16 96H24C24.0243 74.7902 32.4607 54.456 47.4584 39.4584C62.456 24.4608 82.7902 16.0244 104 16H120V8.00004H104Z"
              fill="white"
            />
          </svg>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </Fade>
  </Col>
);

const LandingStats = () => (
  <div className={styles.landingStats}>
    <Container>
      <Row>
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </Row>
    </Container>
  </div>
);

export default LandingStats;
