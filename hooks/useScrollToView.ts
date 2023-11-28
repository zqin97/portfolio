import { useEffect } from 'react';

const useScrollToView = () => {
    useEffect(() => {
        // Function to handle scrolling to an element
        const scrollToElement = () => {
            const hash = window.location.hash;
            if (hash) {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        // Call the function on mount
        scrollToElement();

        // Add the function as an event listener for hash changes
        window.addEventListener('hashchange', scrollToElement);

        // Cleanup the event listener on unmount
        return () => window.removeEventListener('hashchange', scrollToElement);
    }, []);
};

export default useScrollToView;