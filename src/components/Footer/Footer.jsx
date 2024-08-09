import { Container, Row, Col } from "react-bootstrap";
import styles from "./Footer.module.css";

import logoImg from "../../assets/imgs/download.png";
import { BsYoutube } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

import { FaFirefoxBrowser } from "react-icons/fa";
import { FaChrome } from "react-icons/fa";
import { FaInternetExplorer } from "react-icons/fa";
import { FaSafari } from "react-icons/fa";

import LogoWhiteMakkah from "../../common/LogoWhiteMakkah";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.footerNav}>
          <div className={styles.footerNav_img}>
            <LogoWhiteMakkah />
            <img src={logoImg} alt="" />
          </div>
          <div className={styles.footerNav_socialMedia}>
            <BsYoutube className={styles.BsYoutube} />
            <span>|</span>
            <FaTwitter className={styles.FaTwitter} />
          </div>
        </div>
        <div className={styles.footerContent}>
          <Row>
            <Col xs={24} sm={12} md={12} lg={3}>
              <h5>روابط هامة</h5>
              <ul>
                <li>
                  <a
                    className={styles.iconLink}
                    href="https://www.mrda.gov.sa/index.aspx"
                    target="_blank"
                    rel="noreferrer"
                  >
                    هيئة تطوير منطقة مكة المكرمة
                  </a>
                </li>
                <li>
                  <a
                    className={styles.iconLink}
                    href="https://www.makkah.gov.sa/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    أمانة مكة المكرمة
                  </a>
                </li>
                <li>
                  <a
                    className={styles.iconLink}
                    href="https://almobdioon.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    مركز المبدعون
                  </a>
                </li>
              </ul>
            </Col>
            <Col xs={24} sm={12} md={12} lg={3}>
              <h5>مبادرة أخضر مكة</h5>
              <ul>
                <li>
                  <a className={styles.iconLink} href="/greenmakkah/vision">
                    الرؤية
                  </a>
                </li>
                <li>
                  <a className={styles.iconLink} href="/greenmakkah/goals">
                    الأهداف
                  </a>
                </li>
              </ul>
            </Col>
            <Col xs={24} sm={12} md={12} lg={3}>
              <h5>المركز الإعلامي</h5>
              <ul>
                <li>
                  <a className={styles.iconLink} href="/greenmakkah/news">
                    الأخبار
                  </a>
                </li>
                <li>
                  <a className={styles.iconLink} href="/greenmakkah/events">
                    الأحداث والفعاليات
                  </a>
                </li>
                <li>
                  <a
                    className={styles.iconLink}
                    href="/greenmakkah/photoGallery"
                  >
                    معرض الصور
                  </a>
                </li>
              </ul>
            </Col>
            <Col xs={24} sm={12} md={12} lg={3}>
              <h5>تواصل معنا</h5>
              <ul>
                <li>
                  <a className={styles.iconLink} href="tel:0122454321">
                    جهات الاتصال
                  </a>
                </li>
                <li>
                  <a className={styles.iconLink} href="mailto:info@mrda.gov.sa">
                    راسلنا
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </Container>
      <div className={styles.footCondition}>
        <p>الشروط اللازمة التي يجب توافرها في البنية المشغلة للموقع</p>
        <p>
          مقاس الشاشة لا يقل عن 600 يدعم متصفحات جوجل كروم - فايرفوكس - سفاري و
          إيدج بالإضافة لجميع الأجهزة الذكية
        </p>
        <div className={styles.social}>
          <FaSafari />
          <FaInternetExplorer />
          <FaChrome />
          <FaFirefoxBrowser />
        </div>
      </div>
      <div className={`${styles.footerYear}`}>
        <span>جميع الحقوق محفوظة ٢٠٢٤ لهيئة تطوير منطقة مكة المكرمة</span>
      </div>
    </div>
  );
};

export default Footer;
