import React, { useEffect, useState } from "react";
import "./testimoninals.css";
import { Card } from "react-bootstrap";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
  id: number;
  title: string;
  acf: {
    testimonial_role: string;
    testimonial_name: string;
    testimonial_rating: number;
    testimonial_text: string;
    testimonial_image: {
      url: string;
    };
  };
}

const Testimonials = () => {
  const [reviewData, setReviewData] = useState<Props[]>([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    axios
      .get(
        "http://localhost:8000/wp-json/wp/v2/testimonial?acf_format=standard&_fields=id,title,acf"
      )
      .then((response) => {
        console.log("API Response:", response.data); // Log the response data
        setReviewData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Log any errors
      });

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine the number of cards per slide based on screen width
  const cardsPerSlide = windowWidth < 980 ? 1 : windowWidth < 1440 ? 2 : 3;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: cardsPerSlide,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
  };

  return (
    <div className="testimonial-slider-container">
      <Slider {...settings}>
        {reviewData.map((item) => (
          <div key={item.id}>
            <Card
              className="  p-3 h-100 shadow-lg border-0 rounded-lg bg-white card-hover"
              style={{
                minHeight: "100%",
                borderRadius: "1rem",
                width: "100%",
              }}
            >
              <Card.Body className="d-flex flex-column flex-grow-1 p-4 h-100">
                <Card.Text
                  className="text-start flex-grow-1 my-4"
                  style={{
                    fontStyle: "italic",
                    color: "#333",
                    fontSize: "1.1rem",
                    overflow: "hidden",
                    whiteSpace: "normal",
                    textOverflow: "clip",
                  }}
                >
                  "{item.acf.testimonial_text}"
                </Card.Text>
                <div className="d-flex flex-row align-items-center mt-auto">
                  <img
                    src={item.acf.testimonial_image.url}
                    alt={item.acf.testimonial_name}
                    className="rounded-circle me-3 shadow"
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                      border: "3px solid #fff",
                      boxShadow: "0 0 0 2px #e5e7eb",
                    }}
                  />
                  <div className="d-flex flex-column text-start">
                    <Card.Text
                      className="font-weight-bold mb-1"
                      style={{
                        fontSize: "1.125rem",
                        color: "#000",
                        wordBreak: "break-word",
                        overflowWrap: "break-word",
                      }}
                    >
                      {item.acf.testimonial_name}
                    </Card.Text>
                    <Card.Text
                      className="text-muted"
                      style={{
                        fontSize: "0.875rem",
                        color: "#555",
                        wordBreak: "break-word",
                        overflowWrap: "break-word",
                      }}
                    >
                      {item.acf.testimonial_role}
                    </Card.Text>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
