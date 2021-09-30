import React, {useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Testimonials = () => {

    const Slide = () => {
      return (

              <div id="slides" className="profile-card format-column-item format-90pc-item format-item-box item item1">
                  <header>
                      <div className="format-row-item format-wrap-item">
                          <div className="format-row-item card">
                            <img className={`rounded-img ${toggleState}`} id="rounded-img" src="/img/profilePic.png" alt="Profile pic"/>
                              <div className="format-column-item format-align-center-item">
                                  <h2 className="margin-0">Irene Pereyra</h2>
                                  <p className="margin-0 text-small">Intecartion Design Fellow '19</p>
                              </div>
                          </div>
                          <img className="logo" src="/img/linkedin.svg" alt="logo LinkedIn"/>
                      </div>

                  </header>
                  <div>
                      <p>This Fellowship was a turning point in my career. I wouldn’t be where I am today without the financial support and experienced offered through the program.

                      </p>
                       <p className="text-small">Education - virtual design</p>
                  </div>
              </div>
      )
    }
      const [toggleState, setToggleState] = useState("");
      function toggle() {
        setToggleState(toggleState === "" ? "scale-up-center" : "");
      }
      const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "25%",
        slidesToShow: 1,
        speed: 500,
        initialSlide: 1,
        onInit: current => toggle(),
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
        {
          breakpoint: 1140,
          settings: {
            centerMode: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            autoHeight: true
          }
        }],
      }

    return (
      <div className="grid-item main background-center" id="slider" style={{ backgroundImage: "url(/img/Background.png)" }}>
      <Slider {...settings}>

        <Slide />
        <Slide />
        <Slide />

      </Slider>
      </div>
    )
}

export default Testimonials;
