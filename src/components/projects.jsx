import React from 'react';
import { Box, Image, Heading, Flex, Link, Text } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

const Projects = ({ title, imageSrc, repoLink, text }) => {
  return (
    <Box p={4} boxShadow="md" backgroundColor="white">
      <Box maxW="500px" maxH="400px" mx="auto">
        <Image src={imageSrc} alt={title} />
      </Box>
      <Heading mt={5} size="md" textAlign="center" color="#3B719F">
        {title}
      </Heading>
        <Text fontSize={'small'}>
            {text}
        </Text>
      <Flex justifyContent="center" mt={4} >
        <Link href={repoLink} color="blue.600" fontSize="25px">
            <FaGithub />
        </Link>
      </Flex>
    </Box>
  );
}

export default Projects;
