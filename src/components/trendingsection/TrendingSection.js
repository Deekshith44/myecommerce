import React from "react";
import "./trendingsection.css";
import Card from "../common/card/Card";
import teddy from "../../assets/TrendingSectionImages/doll.jpg";
import gym from "../../assets/TrendingSectionImages/gym.jpg";
import headphone from "../../assets/TrendingSectionImages/headphone.jpg";
import laptop from "../../assets/TrendingSectionImages/laptop.jpg";
import phone from "../../assets/TrendingSectionImages/phone.jpg";
import shoe from "../../assets/TrendingSectionImages/shoe.jpg";
import shuttle from "../../assets/TrendingSectionImages/shuttle.jpg";
import Tshirt from "../../assets/TrendingSectionImages/tshirt.jpg";
import Tv from "../../assets/TrendingSectionImages/tv.jpg";
import watch from "../../assets/TrendingSectionImages/watch.jpg";
import webcam from "../../assets/TrendingSectionImages/webcam.jpg";
import fruits from "../../assets/TrendingSectionImages/fruite.png";
import doll2 from "../../assets/TrendingSectionImages/doll3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TData = [
  {
    id: 1,
    name: "Teddy Bear",
    rate: "$10.55",
    img: teddy,
  },
  {
    id: 2,
    name: "Gym Items",
    rate: "$250",
    img: gym,
  },
  {
    id: 3,
    name: "Head Phone",
    rate: "$40.60",
    img: headphone,
  },
  {
    id: 4,
    name: "Laptop",
    rate: "$800",
    img: laptop,
  },
  {
    id: 5,
    name: "Phone",
    rate: "$160",
    img: phone,
  },
  {
    id: 6,
    name: "Shoe",
    rate: "$70",
    img: shoe,
  },
  {
    id: 7,
    name: "Shuttle",
    rate: "$10",
    img: shuttle,
  },
  {
    id: 8,
    name: "TShirts",
    rate: "$28.60",
    img: Tshirt,
  },
  {
    id: 9,
    name: "T.V",
    rate: "$200",
    img: Tv,
  },
  {
    id: 10,
    name: "Watch",
    rate: "$30",
    img: watch,
  },
  {
    id: 11,
    name: "WebCam",
    rate: "$45",
    img: webcam,
  },
  {
    id: 12,
    name: "Fruits",
    rate: "&5.50",
    img: fruits,
  },
  {
    id: 13,
    name: "Doll",
    rate: "$5.50",
    img: doll2,
  },
];

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

const TrendingSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="section container trending__container">
      <div className="trending__title">
        <h2>Our Trending Items</h2>
      </div>

      <div className="item__card">
        <Slider {...settings}>
          {TData.map((elem) => {
            return (
              <Card
                key={elem.id}
                imgsrc={elem.img}
                title={elem.name}
                rating={elem.rate}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default TrendingSection;
