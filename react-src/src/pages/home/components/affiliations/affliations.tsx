import React, { useEffect, useState } from "react";
import "./affliations.css";
import { Card } from "react-bootstrap";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Post {
  id: number;
  title: {
    rendered: string;
  };
  acf: {
    logo_home: {
      url: string;
    };
  };
}

const Affiliations = () => {
  const [customData, setCustomData] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:8000/wp-json/wp/v2/affiliations-logo?acf_format=standard&_fields=id,title,acf"
      )
      .then((response) => {
        setCustomData(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  console.log(customData);

  const settings = {
    infinite: true,
    speed: 5000, // Slower speed for smoother transitions
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Continuous scroll
    cssEase: "linear",
    arrows: false,
    dots: false,
    pauseOnHover: false,
    variableWidth: false,
    centerMode: false, // Disabling centerMode can sometimes help with glitches
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div>
      {" "}
      <h1 className="mt-1">
        <span style={{ color: "rgb(0, 166, 162)", fontSize: "23.284px" }}>
          Featured by
        </span>
        <br /> Industry leaders and top brands
      </h1>
      <div
        className="mt-2 mb-3 mx-auto"
        style={{ borderBottom: "1px solid rgb(0,166,162)", width: "10%" }}
      ></div>
      <div className=" p-5 pt-0 mt-5 d-flex flex-column justify-content-start align-items-center affliations">
        <div className="carousel-container mt-4" style={{ width: "100%" }}>
          <Slider {...settings}>
            {customData.map((item, index) => (
              <div key={item.id}>
                <Card className="bg-light shadow-sm affiliations-card mx-3">
                  <Card.Body className="d-flex justify-content-center align-items-center p-3">
                    <img
                      src={item.acf.logo_home.url}
                      alt={item.title.rendered}
                      height={"auto"}
                      width={200}
                      style={{ maxHeight: "100px" }}
                    />
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Affiliations;
