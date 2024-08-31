import React, { useEffect, useRef } from 'react';
import './card.css';
import cardImage from '../card.svg';
import { ReactComponent as LockIcon } from '../logo-img/lock.svg';
import { ReactComponent as RectangleIcon } from '../logo-img/rectangle.svg';

const Card = () => {
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const lockIconRef = useRef(null);
    const rectangleIconRef = useRef(null);

    useEffect(() => {
        const textElement = textRef.current;
        const imageElement = imageRef.current;
        const lockIconElement = lockIconRef.current;
        const rectangleIconElement = rectangleIconRef.current;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target === textElement) {
                        entry.target.classList.add('slide-up');
                    } else if (entry.target === imageElement) {
                        setTimeout(() => {
                            entry.target.classList.add('fade-in');
                        }, 400);
                    } else if (entry.target === lockIconElement) {
                        setTimeout(() => {
                            entry.target.classList.add('fade-in');
                        }, 600);
                    } else if (entry.target === rectangleIconElement) {
                        setTimeout(() => {
                            entry.target.classList.add('fade-in');
                        }, 800);
                    }
                }
            });
        }, { threshold: 0.1 });

        if (textElement) observer.observe(textElement);
        if (imageElement) observer.observe(imageElement);
        if (lockIconElement) observer.observe(lockIconElement);
        if (rectangleIconElement) observer.observe(rectangleIconElement);

        return () => {
            if (textElement) observer.unobserve(textElement);
            if (imageElement) observer.unobserve(imageElement);
            if (lockIconElement) observer.unobserve(lockIconElement);
            if (rectangleIconElement) observer.unobserve(rectangleIconElement);
        };
    }, []);

    return (
        <div className="card-container">
            <div className="card-grid">
                <div ref={textRef} className="card-text">
                    <h1 className="card-title">
                        Pay In Any Store<br />
                        Using Your<br />
                        Portfolio's Value
                    </h1>
                    <ul className="card-list">
                        <li>
                            <div ref={lockIconRef} className="circle-icon">
                                <LockIcon />
                            </div>
                            <span>Customized KEI finance payment cards unlock the value trapped in your portfolio</span>
                        </li>
                        <li>
                            <div ref={rectangleIconRef} className="circle-icon">
                                <RectangleIcon />
                            </div>
                            <span>Purchase real world goods and services direct from your KEI finance assets</span>
                        </li>
                    </ul>
                </div>
                <div ref={imageRef} className="card-image">
                    <img src={cardImage} alt="KEI Finance Card" />
                </div>
            </div>
        </div>
    );
};

export default Card;
