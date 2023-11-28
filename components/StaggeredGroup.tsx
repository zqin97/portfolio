import { IStaggeredGroupProps } from "@/global/interface";
import { Stack, Box } from '@chakra-ui/layout';
import { motion } from 'framer-motion';

const StagGroup = motion(Stack);
const GroupItem = motion(Box);

const StaggeredGroup = (props: IStaggeredGroupProps) => {
    const {
        item,
        staggerInterval,
        childAnimationDuration,
        delay = 0,
        children,
        ...rest
    } = props;

    const groupVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                delay: delay,
                when: 'beforeChildren',
                staggerChildren: staggerInterval,
            },
        },
    };

    const groupItemVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: childAnimationDuration,
            },
        },
    };

    return (
        <StagGroup
            variants={groupVariants}
            initial='hidden'
            animate='visible'
            {...rest}
        >
             <GroupItem variants={groupItemVariants}>
                {item}
            </GroupItem>
        </StagGroup>
    )
}

export default StaggeredGroup;