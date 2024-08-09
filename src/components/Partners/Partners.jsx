import React, { useMemo } from "react";
import { Container, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./Partners.module.css";

// Import images
import img1 from "../../assets/imgs/parteners.png";
import img2 from "../../assets/imgs/parteners1.png";
import img3 from "../../assets/imgs/parteners2.png";
import img4 from "../../assets/imgs/parteners3.png";
import img5 from "../../assets/imgs/parteners4.png";
import img6 from "../../assets/imgs/parteners5.png";
import img7 from "../../assets/imgs/parteners6.png";
import img8 from "../../assets/imgs/parteners7.png";
import img9 from "../../assets/imgs/parteners8.png";
import img10 from "../../assets/imgs/parteners9.png";
import img11 from "../../assets/imgs/parteners10.png";
import img12 from "../../assets/imgs/parteners11.png";

const partnerImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

// eslint-disable-next-line react/prop-types, react/display-name
const PartnerImage = React.memo(({ image, index }) => (
  <Col className={styles.imageColumn} md={12} lg={12} xs={12}>
    <div className={styles.imgContainer}>
      <img
        src={image}
        alt={`Partner ${index + 1}`}
        className={`${styles.partnerImage} img-fluid`}
      />
    </div>
  </Col>
));

const Partners = () => {
  const images = useMemo(() => partnerImages, []);

  return (
    <section className="py-5">
      <Container fluid>
        <h3 className={styles.partenersTitle}>شركاء المبادرة</h3>
        <div className={styles.titleDivider}></div>
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <PartnerImage key={index} image={image} index={index} />
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Partners;
