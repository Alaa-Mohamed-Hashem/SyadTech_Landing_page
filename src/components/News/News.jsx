import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import { FaArrowLeft } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./News.module.css";

import img1 from "../../assets/imgs/new1.png";
import img2 from "../../assets/imgs/new2.png";

const sliderItems = [
  {
    id: 1,
    h6: "المستجدات",
    h4: "السعودية الخضراء .. حلم يتحقق",
    p: " أعطى سمو ولي العهد الأمير محمد بن سلمان أولوية خاصة للجانب البيئي ومكافحة التصحر اهتمامًا كبيرًا، توجه سموه بإعلان «مبادرة السعودية الخضراء»، و»مبادرة الشرق الأوسط الأخضر» اللتين سيتم إطلاقهما قريبًا",
    imageUrl: img1,
    a: "التفاصيل",
  },
  {
    id: 2,
    h6: "المستجدات",
    h4: " الفيصل يستعرض مبادرة (أخضر مكة) وآليات التوسع في المسطحات الخضراء بالمنطقة",
    p: "رأس صاحب السمو الملكي الأمير خالد الفيصل مستشار خادم الحرمين الشريفين أمير منطقة مكة المكرمة رئيس هيئة تطوير المنطقة في الإمارة بجدة، اجتماعاً لاستعراض أهداف مبادرة (اخضر مكة)، تم خلاله مناقشة آليات التوسع في المسطحات الخضراء بالمنطقة",
    imageUrl: img2,
    a: "التفاصيل",
  },
  {
    id: 3,
    h6: "المستجدات",
    h4: "السعودية الخضراء .. حلم يتحقق",
    p: " أعطى سمو ولي العهد الأمير محمد بن سلمان أولوية خاصة للجانب البيئي ومكافحة التصحر اهتمامًا كبيرًا، توجه سموه بإعلان «مبادرة السعودية الخضراء»، و»مبادرة الشرق الأوسط الأخضر» اللتين سيتم إطلاقهما قريبًا",
    imageUrl: img1,
    a: "التفاصيل",
  },
  {
    id: 4,
    h6: "المستجدات",
    h4: " الفيصل يستعرض مبادرة (أخضر مكة) وآليات التوسع في المسطحات الخضراء بالمنطقة",
    p: "رأس صاحب السمو الملكي الأمير خالد الفيصل مستشار خادم الحرمين الشريفين أمير منطقة مكة المكرمة رئيس هيئة تطوير المنطقة في الإمارة بجدة، اجتماعاً لاستعراض أهداف مبادرة (اخضر مكة)، تم خلاله مناقشة آليات التوسع في المسطحات الخضراء بالمنطقة",
    imageUrl: img2,
    a: "التفاصيل",
  },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
};

const News = () => (
  <div className={`${styles.news} p-5 px-4`}>
    <Container>
      <h3 className={styles.newsTitle}>الأخبار</h3>
      <Slider {...sliderSettings}>
        {sliderItems.map((item) => (
          <div key={item.id} className={styles.slideContainer}>
            <Row>
              <Col
                md={{ span: 12, order: 1 }}
                lg={{ span: 6, order: 1 }}
                xs={{ order: 2 }}
              >
                <Fade left>
                  <div className={styles.content}>
                    <div className={styles.slideTitle}>
                      <h6>{item.h6}</h6>
                      <div className={styles.separator}></div>
                      <h4>{item.h4}</h4>
                      <p>{item.p}</p>
                      <a href="#" className={styles.newsDetailsLink}>
                        {item.a}
                        <FaArrowLeft className={styles.arrowLeft} />
                      </a>
                    </div>
                  </div>
                </Fade>
              </Col>
              <Col
                md={{ span: 12, order: 2 }}
                lg={{ span: 6, order: 2 }}
                xs={{ order: 1 }}
              >
                <Fade right>
                  <div className={styles.imgContainer}>
                    <img
                      src={item.imageUrl}
                      alt={item.h4}
                      className="img-fluid"
                    />
                  </div>
                </Fade>
              </Col>
            </Row>
          </div>
        ))}
      </Slider>
      <div className={styles.showAllNews}>
        <Link to="/" className={styles.showNewsLink}>
          استعراض جميع الأخبار
          <FaArrowLeft className={styles.arrowLeft} />
        </Link>
      </div>
    </Container>
  </div>
);

export default News;
