import { ISlideViewProps } from "@/global/interface";
import { Variants, motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const SlideIntoView = (props: ISlideViewProps) => {
    const {
        children,
        direction,
        delay,
        duration,
        visibleThreshold,
        ...rest
    } = props;

    const animateControls = useAnimation();
    const [ref, inView] = useInView({
        threshold: visibleThreshold ? visibleThreshold : 0.35,
    });

    const DEFAULT_DURATION = 0.3;
    const DEFAULT_DELAY = 0;

    useEffect(() => {
        if (inView) {
            animateControls.start('visible');
        }
    }, [animateControls, inView]);

    let xStart, yStart;
    switch (direction) {
        case 'top':
            xStart = 0;
            yStart = -20;
            break;
        case 'bottom':
            xStart = 0;
            yStart = 20;
            break;
        case 'left':
            xStart = -20;
            yStart = 0;
            break;
        case 'right':
            xStart = 20;
            yStart = 0;
            break;
    }

    const containerVariants: Variants = {
        hidden: {
            opacity: 0,
            y: yStart,
            x: xStart,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                delay: delay ? delay : DEFAULT_DELAY,
                duration: duration ? duration : DEFAULT_DURATION,
            },
        },
    };

    return (
        <motion.div
            variants={containerVariants}
            ref={ref}
            animate={animateControls}
            initial={'hidden'}
            {...rest}
        >
            {children}
        </motion.div>
    )
}

export default SlideIntoView;