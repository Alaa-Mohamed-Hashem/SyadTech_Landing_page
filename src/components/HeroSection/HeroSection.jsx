// HeroSection.jsx
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import CSS Module
import styles from "./HeroSection.module.css";

import img1 from "../../assets/imgs/3.png";
import img2 from "../../assets/imgs/2.png";
import img3 from "../../assets/imgs/1.png";
import img4 from "../../assets/imgs/4.png";

// Import React Reveal
import Fade from "react-reveal/Fade";
import { BsCaretRight } from "react-icons/bs";

const sliderItems = [
  {
    id: 1,
    h6: "مرحبا بكم في",
    h3: "بوابة اخضر مكة",
    p: "ضمن مبادرة السعودية الخضراء",
    p1: "لتحقيق رؤية المملكة 2030 والتى ترسخ توجه المملكة والمنطقة فى حماية الأرض والطبيعة ووضعها فى خارطة طريق ذات معالم واضحة وطموحة تسهم بشكل قوي فى تحقيق بيئة مستدامة.",
    imageUrl: img1,
    span: "شاهد الفيديو",
  },
  {
    id: 2,
    h6: "مرحبا بكم في",
    h3: "بوابة اخضر مكة",
    p: "ضمن مبادرة السعودية الخضراء",
    p1: "لتحقيق رؤية المملكة 2030 والتى ترسخ توجه المملكة والمنطقة فى حماية الأرض والطبيعة ووضعها فى خارطة طريق ذات معالم واضحة وطموحة تسهم بشكل قوي فى تحقيق بيئة مستدامة.",
    imageUrl: img2,
    span: "شاهد الفيديو",
  },
  {
    id: 3,
    h6: "مرحبا بكم في",
    h3: "بوابة اخضر مكة",
    p: "ضمن مبادرة السعودية الخضراء",
    p1: "لتحقيق رؤية المملكة 2030 والتى ترسخ توجه المملكة والمنطقة فى حماية الأرض والطبيعة ووضعها فى خارطة طريق ذات معالم واضحة وطموحة تسهم بشكل قوي فى تحقيق بيئة مستدامة.",
    imageUrl: img3,
    span: "شاهد الفيديو",
  },
  {
    id: 4,
    h6: "مرحبا بكم في",
    h3: "بوابة اخضر مكة",
    p: "ضمن مبادرة السعودية الخضراء",
    p1: "لتحقيق رؤية المملكة 2030 والتى ترسخ توجه المملكة والمنطقة فى حماية الأرض والطبيعة ووضعها فى خارطة طريق ذات معالم واضحة وطموحة تسهم بشكل قوي فى تحقيق بيئة مستدامة.",
    imageUrl: img4,
    span: "شاهد الفيديو",
  },
];

const CarouselComponent = () => {
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
    <div className={styles.fullHeightCarousel}>
      <Slider {...settings}>
        {sliderItems.map((item) => (
          <div key={item.id} className={styles.slideContainer}>
            <img
              src={item.imageUrl}
              alt={item.title}
              className={styles.slideImage}
            />
            <Fade top>
              <div className={styles.slideTitle}>
                <h6>{item.h6}</h6>
                <h3>{item.h3}</h3>
                <p>{item.p}</p>
                <p>{item.p1}</p>
                <div className={styles.videoSlider}>
                  <BsCaretRight className={styles.videoSliderIcon} />
                  <span>{item.span}</span>
                </div>
              </div>
            </Fade>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;
