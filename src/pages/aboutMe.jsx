import React from 'react';
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import Pic from '../assets/adelle.png';

const AboutMe = () => {
  return (
    <Flex
      className="about-section"
      direction={{ base: 'column', md: 'row' }}
      align="center"
      justify="center"
      bg="white"
      py={20}
      px={8}
      borderRadius="lg"
      boxShadow="md"
    >
      <Box maxW={{ base: '80%', md: '30%' }} mb={{ base: 4, md: 0 }} pb={6}>
        <Image src={Pic} alt="Profile" borderRadius="full" />
      </Box>
      <Box maxW={{ base: '100%', md: '60%' }} pl={{ base: 0, md: 8 }}>
        <Heading
          as="h2"
          fontSize="2xl"
          mb={4}
          color="#3B719F"
        >
          About Me
        </Heading>

        <Text fontSize={{ base: 'md', md: 'sm' }} color="#3B719F">
          Hi I'm Adelle, I am a university student currently studying at the University of Adelaide with a double degree of Computer Science and Project Management.
          <br/><br/>
          Recently I completes a coding bootcamp in webdevelopment, also run by the University of Adelaide to further strengthen my skills.
        </Text>
      </Box>
    </Flex>
  );
}

export default AboutMe;
