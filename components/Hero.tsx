'use client'

import {
    Box,
    VStack,
    Text,
    useMediaQuery,
    HStack,
    Heading,
    Flex,
    Stack,
    useColorModeValue,
    Icon,
    Button
} from "@chakra-ui/react";
import { 
    SiReact, 
    SiTypescript,
    SiNextdotjs,
    SiPhp,
    SiFlutter
} from 'react-icons/si';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Typewriter from 'typewriter-effect';
import SlideIntoView from "./SlideIntoView";
import StaggeredGroup from "./StaggeredGroup";
import Tesla from "./svg/Tesla";

const Hero = () => {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
    const iconColor = useColorModeValue('#2196F3', '#82c6fb');

    const techSkills = [
        {text: 'React', icon: SiReact},
        {text: 'Typescript', icon: SiTypescript},
        {text: 'Flutter', icon: SiFlutter},
        {text: 'PHP', icon: SiPhp},
        {text: 'Learning Next.js', icon: SiNextdotjs},
    ];

    const connection = [
        {name: 'LinkedIn', icon: <FaLinkedin/>, href: 'https://www.linkedin.com/in/zhi-qin-ong-4ab577176/'},
        {name: 'GitHub', icon: <FaGithub/>, href: ''},
    ]

    const techSkillsGroupItems = () => (
        <VStack align={'start'} spacing={1}>
            {techSkills.map((item, index) => (
                <HStack key={index}>
                    <Icon as={item.icon} color={iconColor}/>
                    <Text>{item.text}</Text>
                </HStack>
            ))}
        </VStack>
    )

    const connectionGroupItems = () => (
        <HStack>
            {connection.map((item, index) => (
                <Button
                    key={index}
                    as={'a'}
                    href={item.href}
                    target='_blank'
                    variant='solid'
                    size={isLargerThan768 ? 'md' : 'sm'}
                    leftIcon={item.icon}
                >
                    {item.name}
                </Button>
            ))}
        </HStack>
    )

    const introAppearDelay = 0;
    const nameAppearDelay = introAppearDelay + 0.1;
    const typewriterAppearDelay = nameAppearDelay + 0.1;
    const buttonsAppearDelay = typewriterAppearDelay + 0.1;
    const skillsAppearDelay = buttonsAppearDelay;
    const appearanceDuration = 0.4;
    
    return (
        <Box position={'relative'} mt={[0, 150]} mb={[0, 50]} h={'100vh'}>
            <Stack position='relative' zIndex={2} spacing={10}>
                <Stack>
                    <SlideIntoView
                        direction='bottom'
                        delay={introAppearDelay}
                        duration={appearanceDuration}
                    >
                        <Text fontSize={['lg', '2xl']} textAlign='right'>
                            HELLO, I AM
                        </Text>
                    </SlideIntoView>

                    <SlideIntoView
                        direction='bottom'
                        delay={nameAppearDelay}
                        duration={appearanceDuration}
                    >
                        <Box mb={8}>
                        <Heading as='h1' fontSize={['5xl', '8xl']} mb={8} variant='title'>
                            ONG ZHI QIN.
                        </Heading>
                        </Box>
                    </SlideIntoView>

                    <SlideIntoView
                        direction='bottom'
                        delay={typewriterAppearDelay}
                        duration={appearanceDuration}
                    >
                        <Flex direction='row'>
                            <Text fontSize={['lg', '2xl']}>I am a &nbsp;</Text>
                            <Text
                                as='span'
                                fontSize={['lg', '2xl']}
                                variant='primary'
                                fontWeight='bold'
                            >
                                <Typewriter
                                options={{
                                    delay: 50,
                                    skipAddStyles: true,
                                    loop: true,
                                    deleteSpeed: 30,
                                }}
                                onInit={(typewriter) => {
                                    typewriter
                                    .pauseFor(2000)
                                    .typeString('Software Engineer.')
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString('Web Developer.')
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .typeString('Mobile App Developer.')
                                    .pauseFor(1000)
                                    .deleteAll()
                                    .start();
                                }}
                                />
                            </Text>
                        </Flex>
                    </SlideIntoView>
                </Stack>

                <StaggeredGroup
                    direction='row'
                    flexWrap='wrap'
                    staggerInterval={0.1}
                    delay={buttonsAppearDelay}
                    childAnimationDuration={0.3}
                    item={connectionGroupItems()}
                />

                <StaggeredGroup
                    spacing={[2, 4]}
                    fontSize={['md', 'lg']}
                    staggerInterval={0.1}
                    delay={skillsAppearDelay}
                    childAnimationDuration={0.3}
                    item={techSkillsGroupItems()}
                />
            </Stack>
            <Box
                position='absolute'
                top={[-55, -135]}
                left={[-75, -70]}
                w={[100, 200]}
                h={[100, 200]}
                zIndex={1}
            >
                <Tesla />
            </Box>
        </Box>
    );
}

export default Hero;