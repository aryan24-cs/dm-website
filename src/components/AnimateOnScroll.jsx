import { useEffect, useRef, useState } from 'react';

const AnimateOnScroll = ({
    children,
    animation = 'fade-in-up',
    delay = 0,
    threshold = 0.1,
    className = ''
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    const animations = {
        'fade-in-up': 'opacity-0 translate-y-8',
        'fade-in': 'opacity-0',
        'slide-left': 'opacity-0 -translate-x-8',
        'slide-right': 'opacity-0 translate-x-8',
        'scale-up': 'opacity-0 scale-95',
    };

    const visibleClasses = {
        'fade-in-up': 'opacity-100 translate-y-0',
        'fade-in': 'opacity-100',
        'slide-left': 'opacity-100 translate-x-0',
        'slide-right': 'opacity-100 translate-x-0',
        'scale-up': 'opacity-100 scale-100',
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [threshold]);

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${isVisible ? visibleClasses[animation] : animations[animation]
                } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default AnimateOnScroll;
