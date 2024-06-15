import React from 'react';
import { Box, Flex, Text, Link } from '@chakra-ui/react';
import { FaGithub, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as="footer" backgroundColor="lightgray" color="white" py={8}>
      <Flex flexDirection="column" alignItems="center" maxWidth="1000px" marginX="auto">
        <Flex>
          <Link
            href="https://github.com/adellemaeocampo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            fontSize="30px"
            marginRight={15}
            color="#3B719F"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://linkedin.com/in/adelle-ocampo-4a1719268/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            fontSize="30px"
            marginRight={15}
            color="#3B719F"
          >
            <FaLinkedin />
          </Link>
        </Flex>
        <Flex justifyContent="center" marginTop={4}>
          <Text color="#3B719F">Adelle Ocampo's Portfolio</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
