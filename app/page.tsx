'use client'

import AboutMe from '@/components/AboutMe'
import Experience from '@/components/Experience';
import Hero from '@/components/Hero'
import useScrollToView from '@/hooks/useScrollToView';

export default function Portfolio() {
    useScrollToView();
    
    return (
        <>
            <Hero />
            <AboutMe />
            <Experience />
        </>
    )
}
