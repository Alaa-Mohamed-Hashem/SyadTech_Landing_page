// HeroSection.jsx
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft } from "react-icons/fa";

// Import CSS Module
import styles from "./Events.module.css";

import img2 from "../../assets/imgs/eventSlide.jpg";
import img1 from "../../assets/imgs/eventSlide1.jpg";
import Fade from "react-reveal/Fade";

const sliderItems = [
  {
    id: 1,
    h6: "ملتقى صناع العقار  بغرفة مكة",
    p: " أعطى سمو ولي العهد الأمير محمد بن سلمان أولوية خاصة للجانب البيئي ومكافحة التصحر اهتمامًا كبيرًا، توجه سموه بإعلان «مبادرة السعودية الخضراء»، و»مبادرة الشرق الأوسط الأخضر» اللتين سيتم إطلاقهما قريبًا",
    imageUrl: img1,
    imageUrl2: img2,
    a: "اكتشف المزيد",
  },
  {
    id: 2,
    h6: "مؤتمر الأمن الغذائي المستدام",
    p: "رأس صاحب السمو الملكي الأمير خالد الفيصل مستشار خادم الحرمين الشريفين أمير منطقة مكة المكرمة رئيس هيئة تطوير المنطقة في الإمارة بجدة، اجتماعاً لاستعراض أهداف مبادرة (اخضر مكة)، تم خلاله مناقشة آليات التوسع في المسطحات الخضراء بالمنطقة",
    imageUrl: img2,
    imageUrl2: img1,
    a: "اكتشف المزيد",
  },
  {
    id: 3,
    h6: "ملتقى صناع العقار  بغرفة مكة",
    p: " أعطى سمو ولي العهد الأمير محمد بن سلمان أولوية خاصة للجانب البيئي ومكافحة التصحر اهتمامًا كبيرًا، توجه سموه بإعلان «مبادرة السعودية الخضراء»، و»مبادرة الشرق الأوسط الأخضر» اللتين سيتم إطلاقهما قريبًا",
    imageUrl: img1,
    imageUrl2: img2,
    a: "اكتشف المزيد",
  },
  {
    id: 4,
    h6: "مؤتمر الأمن الغذائي المستدام",
    p: "رأس صاحب السمو الملكي الأمير خالد الفيصل مستشار خادم الحرمين الشريفين أمير منطقة مكة المكرمة رئيس هيئة تطوير المنطقة في الإمارة بجدة، اجتماعاً لاستعراض أهداف مبادرة (اخضر مكة)، تم خلاله مناقشة آليات التوسع في المسطحات الخضراء بالمنطقة",
    imageUrl: img2,
    imageUrl2: img1,
    a: "اكتشف المزيد",
  },
];

const Events = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
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

  return (
    <div className={`${styles.events} p-5 px-4`}>
      <Container>
        <h3 className={styles.newsTitle}>الفعاليات والأحداث</h3>
        <div className={styles.borderUnderLine}></div>
        <Slider {...settings}>
          {sliderItems.map((item) => (
            <div key={item.id} className={styles.slideContainer}>
              <Row>
                <Col
                  md={{ span: 12, order: 1 }}
                  lg={{ span: 6, order: 2 }}
                  xs={{ order: 2 }}
                >
                  <Fade right>
                    <div className={styles.card}>
                      <div className={styles.content}>
                        <div className={styles.slideTitle}>
                          <h6>{item.h6}</h6>
                          <p>{item.p}</p>
                          <a href="" className={styles.newsDetailsLink}>
                            {item.a}
                            <FaArrowLeft className={styles.arrowLeft} />
                          </a>
                        </div>
                      </div>
                      <div className={styles.imageWrapper}>
                        <img
                          src={item.imageUrl2}
                          alt={item.title}
                          className="img-fluid bg"
                        />
                      </div>
                    </div>
                  </Fade>
                </Col>
                <Col
                  md={{ span: 12, order: 2 }}
                  lg={{ span: 6, order: 1 }}
                  xs={{ order: 1 }}
                >
                  <Fade left>
                    <div className={styles.imgContainer}>
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="img-fluid bg"
                      />
                    </div>
                  </Fade>
                </Col>
              </Row>
            </div>
          ))}
        </Slider>
        <div className=" pt-5 text-center">
          <Link to="/" className={styles.showEvent}>
            استعراض جميع الفعاليات
            <FaArrowLeft className={styles.arrowLeft} />
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Events;
