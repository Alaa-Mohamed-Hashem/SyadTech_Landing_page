import { Container, Row, Col } from "react-bootstrap";
import styles from "./AkhdarApp.module.css";
import iphoneImg from "../../assets/imgs/iphone.png";
import googleplayImg from "../../assets/imgs/googleplay.png";
import Fade from "react-reveal/Fade";

const AkhdarApp = () => {
  return (
    <div className={styles.akhdarApp}>
      <Container>
        <Row>
          <Col md={12} lg={6}>
            <Fade right>
              <img
                alt="akhdarApp"
                src={iphoneImg}
                className={styles.akhdarAppImg}
              />
            </Fade>
          </Col>
          <Col md={12} lg={6} className={styles.akhdarAppTextCol}>
            <Fade bottom>
              <div className={styles.appTexts}>
                <h5>تطبيق أخضر مكة</h5>
                <hr />
                <p>
                  يوفر مستكشف أخضر مكة علي الجوال ﻟﻠﻤﻮاﻃﻨﻴﻦ واﻟﻤﺴﺘﺨﺪﻣﻴﻦ البحث عن
                  الأماكن الخضراء المتاحة في قاعدة البيانات الجغرافية
                </p>
                <Row>
                  <Col md={12}>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      href="https://play.google.com/store/apps/details?id=com.green.Makkah"
                    >
                      <img alt="googlePlay" src={googleplayImg} />
                    </a>
                  </Col>
                </Row>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AkhdarApp;
