import React, { useRef, useEffect } from 'react';
import { useScroll, animated, useSpring } from '@react-spring/web'
import img_1 from '../assets/images/chrome-gallery-1.webp';
import img_2 from '../assets/images/chrome-gallery-2.webp';
import img_3 from '../assets/images/chrome-gallery-3.webp';
import img_4 from '../assets/images/chrome-gallery-4.webp';
import img_5 from '../assets/images/chrome-gallery-5.webp';

const X_LINES = 5;
const INITIAL_WIDTH = 20;

const HeaderScroll = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    const animatedStyles = useSpring({
        transform: scrollYProgress.to(val => `translateX(-${val * (X_LINES - 1) * 50}vw)`), // Adjust the translation based on the number of images
    });

    // Calculate which images to show based on scroll progress
    const getImages = (progress) => {
        if (progress < 0.1) return [img_1, img_2, img_3, img_4, img_5]; // Show all images
        else if (progress < 0.3) return [img_2, img_3, img_4, img_5, img_1]; // Shift images
        else if (progress < 0.5) return [img_3, img_4, img_5, img_1, img_2]; // Shift images
        else if (progress < 0.7) return [img_4, img_5, img_1, img_2, img_3]; // Shift images
        else return [img_5, img_1, img_2, img_3, img_4]; // Shift images
    };

    // Define individual sizes for each image
    const imageSizes = [
        { width: '80vw', height: '80vh' }, // Image 1
        { width: '80vw', height: '80vh' }, // Image 2
        { width: '30vw', height: '80vh' }, // Image 3
        { width: '80vw', height: '80vh' }, // Image 4
        { width: '80vw', height: '80vh' }, // Image 5
    ];

    return (
        <div style={{ overflowX: 'hidden' }}>
            <div ref={containerRef} style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative', paddingLeft: '10vw', paddingRight: '10vw' }}>
                <animated.div style={{ display: 'flex', width: `${X_LINES * 120}vw`, height: '100%', ...animatedStyles }}>
                    {getImages(scrollYProgress).map((imgSrc, index) => (
                        <animated.img key={index} src={imgSrc} style={{ ...imageSizes[index], objectFit: 'cover', marginRight: '2vw', marginLeft: '2vw' }} alt={`Image ${index + 1}`} />
                    ))}
                </animated.div>
            </div>
        </div>

    );
};

export default HeaderScroll;
