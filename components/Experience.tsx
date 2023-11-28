import {
    Box,
    Flex,
    Text,
    Divider,
    Accordion,
    AccordionItem,
    AccordionButton,
    HStack,
    AccordionIcon,
    AccordionPanel,
    Icon
} from "@chakra-ui/react";
import SlideIntoView from "./SlideIntoView";
import { experiences } from "@/json/experience";
import { Link } from "@chakra-ui/next-js";
import { FaLink, FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineSwapRight } from 'react-icons/ai';

const Experience = () => {
    return (
        <Flex
            id="experience"
            minH={'100vh'}
            flexDir={'column'}
            justifyContent={'center'}
            mt={[0, 150]}
            mb={[0, 50]}
        >
            <SlideIntoView direction="left">
                <Flex mt={'100px'} w='full' alignItems="center">
                    <Box pr='5'>
                        <Text w='auto' fontWeight="bold" fontSize="2xl">Work Experience</Text>
                    </Box>
                    <Box flex='1 0 auto'>
                        <Divider />
                    </Box>
                </Flex>
            </SlideIntoView>
            <SlideIntoView direction="right">
                <Accordion w='full' px={{ base: 0, md: 10 }} pt={5} pb={20} defaultIndex={0}>
                    {experiences.map((job, index) => (
                        <AccordionItem border='none' my={3} key={index}>
                            <AccordionButton bgColor='blue.600' py={3} px={5} borderRadius={'md'} _hover={{ bgColor: 'blue.600' }}>
                                <HStack w='full' borderRadius={'xl'}>
                                    <Box flex={1} textAlign='left'>
                                        {job.positionTitle} @ {job.companyName}
                                    </Box>
                                    <Box>
                                        {job.dateRange}
                                    </Box>
                                    <AccordionIcon />
                                </HStack>
                            </AccordionButton>
                            <AccordionPanel my={2} bg='blue.800' borderRadius={'md'}>
                                <Flex py={2} gap={{ base: 2, md: 10 }} flexWrap='wrap'>
                                    <HStack w={{ base: 'full', md: 'auto' }}>
                                        <Icon as={FaMapMarkerAlt} color='blue.400' />
                                        <Text color='cyan.100'>
                                            {job.companyAddress}
                                        </Text>
                                    </HStack>
                                    {job.companyLink &&
                                        <HStack>
                                            <Icon as={FaLink} color='blue.400' />
                                            <Link color='cyan.100' href={job.companyLink} isExternal>
                                                {job.companyLink!}
                                            </Link>
                                        </HStack>
                                    }
                                </Flex>
                                <Flex flexWrap={'wrap'} gap={2.5} py={4}>
                                    {
                                        job.technologies.map((tech, i) => {
                                            return (
                                                <Box
                                                    bg='blue.700'
                                                    key={i}
                                                    borderRadius='full'
                                                    px={3}
                                                    py={0.5}
                                                >
                                                    <Text color='cyan.100' fontSize={14}>{tech}</Text>
                                                </Box>
                                            )
                                        })
                                    }
                                </Flex>
                                {
                                    job.description.map((description, index) => {
                                        return (
                                            <HStack pt='2.5' alignItems="top" key={index}>
                                                <Icon as={AiOutlineSwapRight} color="secondary.500" mt='1' />
                                                <Text color='cyan.100'>
                                                    {description}
                                                </Text>
                                            </HStack>
                                        );
                                    })
                                }
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </SlideIntoView>
        </Flex>
    )
}

export default Experience;