'use client'

import { 
    Box, 
    Flex,
    Text,
    Divider, 
    Center,
    Image,
    VStack,
    Stack
} from "@chakra-ui/react";
import SlideIntoView from "./SlideIntoView";
import Gym from "./svg/Gym";
import Diver from "./svg/Diver";
import Typewriter from 'typewriter-effect';

const AboutMe = () => {
    return (
        <Stack id="about-me" mt={[0, 150]} mb={[0, 50]} position={'relative'} justify={'center'} spacing={'80px'} minH={'100vh'}>  
            <SlideIntoView direction="bottom">
                <Flex w='full' alignItems="center">
                    <Box pr='5'>
                        <Text w='auto' fontWeight="bold" fontSize="2xl">About Me</Text>
                    </Box>
                    <Box flex='1 0 auto'>
                        <Divider />
                    </Box>
                </Flex>
                <Flex mt={4} w={'100%'} flexDir={'row'} gap={10}>
                    <Center w={['full', 'full', 'auto']}>
                        <Image
                            borderRadius='full'
                            boxSize='300px'
                            src='/portfolio/images/profile-pic.jpg'
                            alt='Zhi Qin profile picture'
                        />
                    </Center>
                    <VStack px={{ base: 5, md: 0}} align="flex-start" flex='1' spacing={2.5}>
                        <Text textAlign={['center', 'justify']} __css={{ 'text-wrap': 'balance'}}>
                            I am an experienced Data Visualization Developer, continuously nurturing my passion for 
                            building beautiful, modern web and mobile applications with React, Flutter, and the Next framework. 
                        </Text>
                        <Text textAlign={['center', 'justify']} __css={{ 'text-wrap': 'balance'}}>
                            I am now eager to leverage the skills I've acquired and fully immerse myself in this professional endeavor 
                            by joining an agile team as a React/Flutter developer. I find great satisfaction in blending my expertise 
                            in designing and developing data-intensive business intelligence applications with my enthusiasm for 
                            front-end development using React and Flutter.
                        </Text>
                        <Text textAlign={['center', 'justify']} __css={{ 'text-wrap': 'balance'}}>
                            As a self-taught developer with a couple years of personal study I'm eager to embark on the next stage 
                            in my career as a front end developer!
                        </Text>
                    </VStack>
                </Flex>
            </SlideIntoView>
            <SlideIntoView
                direction="left"
                delay={0.2}
                duration={0.4}
            >
                <Text
                    as='i'
                    pl={'50px'}
                    fontSize={['lg', '2xl']}
                    variant='primary'
                    fontWeight='bold'
                >
                    <Typewriter
                        options={{
                            delay: 50,
                            skipAddStyles: true,
                            loop: false,
                            deleteSpeed: 100,
                        }}
                        onInit={(typewriter) => {
                            typewriter
                            .pauseFor(2000)
                            .typeString('"Do one thing ')
                            .pauseFor(1000)
                            .typeString('every day that scares you."')
                            .pauseFor(500)
                            .typeString(' - Eleanor Roosevelt')
                            .pauseFor(1000)
                            .start();
                        }}
                        />
                </Text>
            </SlideIntoView>
            <Box
                position='absolute'
                bottom={[55, 10]}
                right={[75, -160]}
                w={[80, 180]}
                h={[80, 180]}
                zIndex={2}
            >
                <Gym />
            </Box>
            <Box
                position='absolute'
                top={[55, 85]}
                left={[75, -200]}
                w={[80, 180]}
                h={[80, 180]}
                zIndex={2}
            >
                <Diver />
            </Box>
        </Stack>
    )
}

export default AboutMe;