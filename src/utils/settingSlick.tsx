import { LeftNavArrow, RightNavArrow } from "@/components/ArrowButton/index";
import { Settings } from "react-slick";

export const settingSlick: Settings = {
  dots: true,
  infinite: true,
  adaptiveHeight: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplaySpeed: 4000,
  cssEase: "linear",
  dotsClass: "slick-dots slick-thumb",
  customPaging: (i) => {
    return <div className="dot">{i + 1}</div>;
  },
  nextArrow: <LeftNavArrow />,
  prevArrow: <RightNavArrow />,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};
