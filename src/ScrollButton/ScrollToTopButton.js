import { useState, useEffect } from 'react';

export function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    // Handle scroll events to show/hide the button
    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true); // Show the button if scrolled more than 300px
        } else {
            setIsVisible(false); // Hide the button if at the top of the page
        }
    };

    // Scroll to top functionality
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scroll effect
        });
    };

    useEffect(() => {
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up event listener on unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className={`fixed bottom-5 right-5 p-3 md:p-4 rounded-full bg-blue-500 text-white cursor-pointer transition-opacity 
                        ${isVisible ? 'opacity-100' : 'opacity-0'} 
                        md:right-2 right-2 lg:right-2 md:bottom-8 lg:bottom-10 
                        shadow-lg hover:bg-blue-600`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <div className="text-sm md:text-base lg:text-lg">Scroll To Top</div>
        </div>
    );
}
