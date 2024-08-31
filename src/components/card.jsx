import React, { useEffect, useRef } from 'react';
import './card.css';
import cardImage from '../card.svg';
import { ReactComponent as LockIcon } from '../logo-img/lock.svg';
import { ReactComponent as RectangleIcon } from '../logo-img/rectangle.svg';

const Card = () => {
    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const textElement = textRef.current;
        const imageElement = imageRef.current;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target === textElement) {
                        entry.target.classList.add('slide-up');
                    } else if (entry.target === imageElement) {
                        entry.target.classList.add('fade-in');
                    }
                }
            });
        }, { threshold: 0.1 });

        if (textElement) observer.observe(textElement);
        if (imageElement) observer.observe(imageElement);

        return () => {
            if (textElement) observer.unobserve(textElement);
            if (imageElement) observer.unobserve(imageElement);
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
                            <div className="circle-icon">
                                <LockIcon />
                            </div>
                            <span>Customized KEI finance payment cards unlock the value trapped in your portfolio</span>
                        </li>
                        <li>
                            <div className="circle-icon">
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
