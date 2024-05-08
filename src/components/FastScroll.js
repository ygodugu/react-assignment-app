import React, { useRef, useState } from 'react';
import { useScroll, animated, useSpring } from '@react-spring/web'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Image_3 from "../assets/images/tabs-groups_desktop.webp";
import Image_1 from "../assets/images/non-chrome.webm";
import Image_2 from "../assets/images/devices_desktop.webp";
import Image_2_1 from "../assets/images/qr-code.webp";


const PAGE_COUNT = 5

const FastScroll = () => {

    const owlCarouselRef = useRef(null);
    const videoRef = useRef(null);

    const handleNext = () => {
        owlCarouselRef.current.next();
    };

    const handlePrev = () => {
        owlCarouselRef.current.prev();
    };

    return (
        <>
            <div className="fast-container">
                <div className="fast-heading">
                    <h1>The <span className="fast">&#9201; fast</span> way to do things online</h1>
                </div>
            </div>

            <div>
                <div className="container-xxl pt-5">
                    <OwlCarousel
                        ref={owlCarouselRef}
                        items={1}
                        autoplay
                        smartSpeed={100}
                        dots={true}
                        startPosition={0}
                        nav={false}
                        responsive={{
                            0: { items: 1 },
                            576: { items: 1 },
                            768: { items: 1 },
                            992: { items: 1 }
                        }}
                    >
                        <div className="item">
                            <div className="first-card">
                                <div className='container'>
                                    <div className='first-card-heading'>
                                        <div className="text-content">
                                            <div className='row'>
                                                <div className='col'>
                                                    <h2>Top Text Content</h2>
                                                    <p>This is some top text content.</p>
                                                </div>

                                                <div className='col'>
                                                    <p>
                                                        Chrome is built for performance. Optimize your experience with features like Energy Saver and Memory Saver.
                                                    </p>
                                                    <p>
                                                        Learn more about Memory and Energy Saver
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="first-card-img">
                                        <video ref={videoRef} src={Image_1} autoPlay muted loop className='video'></video>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="second-card">
                                <div className="container">
                                    <div className='second-card-heading'>
                                        <div className='row'>
                                            <div className='col'>
                                                <h2>  Stay on top <br /> of tabs </h2>
                                            </div>
                                            <div className='col'>
                                                Chrome has tools to help you manage the tabs you're not quite ready to close. Group, label, and color code your tabs to stay organized and work faster.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="second-card-img">
                                        <img src={Image_3} alt="Google Logo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="third-card">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="text-section">
                                                <div className='text-section-heading'>
                                                    <h2>Optimized for your device</h2>
                                                    <p>Chrome is built to work with your device across platforms. That means a smooth experience on whatever you're working with.</p>
                                                </div>
                                                <div className="qr-code-section">
                                                    <img src={Image_2_1} alt="QR Code" />
                                                    <p>Scan for the <br />
                                                        Chrome app</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="device-preview">
                                                <img src={Image_2} alt="Device Preview" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>

            <div className="carousel-controls">
                <div className='container'>
                    <button onClick={handlePrev}>&#171;</button>
                    <button onClick={handleNext}>&#187;</button>
                </div>
            </div>
        </>
    )
}

export default FastScroll;
