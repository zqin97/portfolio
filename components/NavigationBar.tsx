'use client'

import Link from "next/link";
import { 
    Box, 
    Button, 
    Container, 
    useDisclosure, 
    useMediaQuery,
    Text, 
    HStack
} from "@chakra-ui/react";
import SlideIntoView from "./SlideIntoView";
import ThemeSwitch from "./ThemeSwitch";
import _ from "lodash";

const NavigationBar = () => {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
    const {isOpen, onOpen, onClose} = useDisclosure();

    const navLinks = ['about-me', 'experience', 'showcase', 'contact'];
    let navLinkItems = navLinks.map((link) => (
        // <Link key={link} href={`/#${link}`} passHref>
            <Button
                as={Link}
                href={`${process.env.pathPrefix}#${link}`}
                variant='ghost'
                colorScheme='brand'
                fontWeight='light'
                onClick={onClose}
            >
                {'# ' + _.startCase(link)}
            </Button>
        // </Link>
    ))

    return (
        <Box
            zIndex={10}
            as="nav"
            py={2}
            position='sticky'
            top='0'
            backdropFilter='blur(20px)'
        >
            <SlideIntoView direction="top">
                <Container
                    px={0}
                    maxW={'4xl'}
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                >
                    <HStack as={Link} href={''} align={'baseline'} spacing={0} _hover={{ cursor: 'pointer' }} >
                        <Text fontSize='3xl' color='teal.200'>
                            ZHI
                        </Text>
                        <Text fontSize='3xl' color='#1A2E37'>
                            O
                        </Text>
                        <Box mb={"-10px"} mx={1} h='3px' w='17px' bgColor='purple.300' borderRadius={'full'} transform={'translatey(2px)'}/>
                    </HStack>
                    <HStack>
                        {navLinkItems}
                        <ThemeSwitch />
                    </HStack>
                </Container>
            </SlideIntoView>
        </Box>
    );
}

export default NavigationBar;