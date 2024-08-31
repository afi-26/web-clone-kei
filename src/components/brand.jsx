import React, { useEffect, useRef } from 'react';
import './brand.css';
import logoSvg from '../logo-img/text.svg';
import brand1 from '../logo-img/hacken.svg';
import brand2 from '../logo-img/gelato.svg';
import brand3 from '../logo-img/lifi.svg';
import brand4 from '../logo-img/zero.svg';
import brand5 from '../logo-img/arbiterium.svg';
import brand6 from '../logo-img/gelato.svg';

const Brand = () => {
    const logoRef = useRef(null);
    const brandRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.transform = 'translateY(0)';
                        entry.target.style.opacity = '1';
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (logoRef.current) {
            observer.observe(logoRef.current);
        }

        brandRefs.current.forEach((ref) => {
            if (ref) {
                observer.observe(ref);
            }
        });

        return () => {
            if (logoRef.current) {
                observer.unobserve(logoRef.current);
            }
            brandRefs.current.forEach((ref) => {
                if (ref) {
                    observer.unobserve(ref);
                }
            });
        };
    }, []);

    return (
        <div className="brand-container">
            <div className="logo-grid">
                <img 
                    ref={logoRef}
                    src={logoSvg} 
                    alt="Logo" 
                    className="text-svg" 
                    style={{ 
                        width: '80%', 
                        maxWidth: '240px',
                        transform: 'translateY(50px)',
                        opacity: 0,
                        transition: 'transform 0.5s ease-out, opacity 0.5s ease-out'
                    }} 
                />
            </div>
            <div className="brand-grid-4x1" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '32px' }}>
                {[brand1, brand2, brand3, brand4].map((brand, index) => (
                    <img 
                        key={index}
                        ref={(el) => (brandRefs.current[index] = el)}
                        src={brand} 
                        alt={`Brand ${index + 1}`} 
                        className="brand-img" 
                        style={{ 
                            maxWidth: index === 2 ? '45%' : '60%',
                            transform: 'translateY(50px)',
                            opacity: 0,
                            transition: 'transform 0.5s ease-out, opacity 0.5s ease-out'
                        }} 
                    />
                ))}
            </div>
            <div className="brand-grid-2x1" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
                {[brand5, brand6].map((brand, index) => (
                    <img 
                        key={index + 4}
                        ref={(el) => (brandRefs.current[index + 4] = el)}
                        src={brand} 
                        alt={`Brand ${index + 5}`} 
                        className="brand-img" 
                        style={{ 
                            maxWidth: '70%',
                            transform: 'translateY(50px)',
                            opacity: 0,
                            transition: 'transform 0.5s ease-out, opacity 0.5s ease-out'
                        }} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Brand;
