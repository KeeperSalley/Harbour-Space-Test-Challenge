import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Testimonials = () => {


    return (

        <section id="slider" className="format-section grid-item main background-center" style={{ backgroundImage: "url(/img/Background.png)" }}>

            <div className="items">
            <Carousel centerMode={true} autoPlay={true} emulateTouch={true} showArrows={false} showStatus={false} centerSlidePercentage={55} showIndicators={false} showThumbs={false}>
                <div id="slides" className="profile-card format-column-item format-90pc-item format-item-box item item1">
                    <header>
                        <div className="format-row-item format-wrap-item">
                            <div className="format-row-item card">
                                <img className="rounded-img" src="/img/profilePic.png" alt="Profile pic"/>
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

                <div id="slides" className="profile-card format-column-item format-90pc-item format-item-box item item3">
                    <header>
                        <div className="format-row-item format-wrap-item">
                            <div className="format-row-item card">
                                <img className="rounded-img" src="/img/profilePic.png" alt="Profile pic"/>
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

                <div id="slides" className="profile-card format-column-item format-90pc-item format-item-box item item3">
                    <header>
                        <div className="format-row-item format-wrap-item">
                            <div className="format-row-item card">
                                <img className="rounded-img" src="/img/profilePic.png" alt="Profile pic"/>
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

                </Carousel>
            </div>
        </section>
    )
}

export default Testimonials;
