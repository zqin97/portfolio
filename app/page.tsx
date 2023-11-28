'use client'

import AboutMe from '@/components/AboutMe'
import Experience from '@/components/Experience';
import Hero from '@/components/Hero'
import useScrollToView from '@/hooks/useScrollToView';
import { RefObject, useEffect, useRef, useState } from 'react';

interface SectionRefs {
    [key: string]: RefObject<HTMLDivElement>;
}

export default function Portfolio() {
    const heroRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
    const showcaseRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);
    const [currentSection, setCurrentSection] = useState('');

    const sections: SectionRefs = {
        '/': heroRef,
        'about-me': aboutRef,
        'experience': experienceRef,
        'showcase': showcaseRef,
        'contact': contactRef
    };

    useEffect(() => {
        const handleScroll = () => {
            for (const key in sections) {
                const ref = sections[key];
                if (ref.current) {
                    const top = ref.current.offsetTop;
                    const height = ref.current.offsetHeight;
                    if (window.scrollY >= top && window.scrollY < top + height) {
                        if (currentSection !== key) {
                            setCurrentSection(key);
                            window.history.pushState({}, '', `#${key}`);
                        }
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [currentSection, sections]);

    return (
        <>
            <Hero />
            <AboutMe />
            <Experience />
        </>
    )
}
