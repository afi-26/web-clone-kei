import React, { useEffect, useRef } from 'react';
import './welcome.css';
import { ReactComponent as KeiIcon } from '../icon-kei.svg';
import arrowImage from '../logo-img/arrow.svg';

const Welcome = () => {
    const iconRef = useRef(null);
    const eyebrowRef = useRef(null);
    const headingRef = useRef(null);
    const descriptionRef = useRef(null);
    const buttonContainerRef = useRef(null);

    useEffect(() => {
        const animateElement = (ref, delay, translateX = 0, translateY = 0) => {
            if (ref.current) {
                ref.current.style.transform = `translate(${translateX}%, ${translateY}%)`;
                ref.current.style.opacity = '0';
                setTimeout(() => {
                    ref.current.style.transition = 'transform 0.6s ease-out, opacity 0.6s ease-out';
                    ref.current.style.transform = 'translate(0, 0)';
                    ref.current.style.opacity = '1';
                }, delay);
            }
        };

        animateElement(iconRef, 50, 20);
        animateElement(eyebrowRef, 100, 0, -20);
        animateElement(headingRef, 150, -20);
        animateElement(descriptionRef, 200, 20);
        animateElement(buttonContainerRef, 250, 0, 20);
    }, []);

    const generateRandomCircles = () => {
        const circles = [];
        for (let i = 0; i < 8; i++) {
            circles.push(<div key={i} className="circle" />);
        }
        return circles;
    };

    const generateGlitter = () => {
        const glitter = [];
        for (let i = 0; i < 50; i++) {
            const style = {
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
            };
            glitter.push(<div key={i} className="glitter" style={style} />);
        }
        return glitter;
    };

    return (
        <>
            <div className="welcome-container" style={{ backgroundColor: 'transparent' }}>
                {generateRandomCircles()}
                {generateGlitter()}
                <div className="welcome-content">
                    <div className="left-side">
                        <p ref={eyebrowRef} className="eyebrow-text">Welcome to KEI finance</p>
                        <h1 ref={headingRef} className="main-heading">Automated Trading<br />& Crypto Payment<br />Protocol</h1>
                        <p ref={descriptionRef} className="description-text">
                            Simplify your DeFi experience with KEI finance's automated trading strategies, 
                            growing your portfolio 24/7. Access 200+ assets, use KEI Debit Cards to spend 
                            crypto worldwide, without third-party management.
                        </p>
                        <div ref={buttonContainerRef} className="button-container">
                            <button className="welcome-button">Docs</button>
                            <button className="welcome-button primary">App</button>
                        </div>
                    </div>
                    <div className="right-side">
                        <div ref={iconRef}>
                            <KeiIcon />
                        </div>
                    </div>
                </div>
            </div>
            <div className="arrow-container">
                <img src={arrowImage} alt="Arrow" />
            </div>
        </>
    );
};

export default Welcome;
