import React from "react";
import Carousel from "react-grid-carousel";

import HomePic2 from "../../img/homepic2.jpg";
import HomePic4 from "../../img/homepic4.jpg";
import HomePic8 from "../../img/homepic8.jpg";
import HomePic9 from "../../img/homepic9.jpg";
import HomePic10 from "../../img/homepic10.jpg";
import HomePic11 from "../../img/homepic11.jpg";
import HomePic12 from "../../img/homepic12.jpg";
import HomePic13 from "../../img/homepic13.jpg";
import HomePic14 from "../../img/homepic14.jpg";
import HomePic15 from "../../img/homepic15.jpg";
import HomePic16 from "../../img/homepic16.jpg";
import HomePic17 from "../../img/homepic17.jpg";

const Photos = () => {
  return (
    <div id="photos">
      <Carousel cols={2} rows={1} gap={10} loop>
        <Carousel.Item>
          <img
            width="100%"
            src={HomePic2}
            style={{
              boxShadow:
                "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
            }}
            alt="HomePic2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100%"
            src={HomePic4}
            style={{
              boxShadow:
                "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
            }}
            alt="HomePic4"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100%"
            src={HomePic8}
            style={{
              boxShadow:
                "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
            }}
            alt="HomePic8"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100%"
            src={HomePic9}
            style={{
              boxShadow:
                "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
            }}
            alt="HomePic9"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100%"
            src={HomePic10}
            style={{
              boxShadow:
                "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
            }}
            alt="HomePic10"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100%"
            src={HomePic11}
            style={{
              boxShadow:
                "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
            }}
            alt="HomePic11"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100%"
            src={HomePic12}
            style={{
              boxShadow:
                "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
            }}
            alt="HomePic12"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100%"
            src={HomePic13}
            style={{
              boxShadow:
                "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
            }}
            alt="HomePic13"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100%"
            src={HomePic14}
            style={{
              boxShadow:
                "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
            }}
            alt="HomePic14"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100%"
            src={HomePic15}
            style={{
              boxShadow:
                "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
            }}
            alt="HomePic15"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100%"
            src={HomePic16}
            style={{
              boxShadow:
                "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
            }}
            alt="HomePic16"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            width="100%"
            src={HomePic17}
            style={{
              boxShadow:
                "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
            }}
            alt="HomePic17"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Photos;
