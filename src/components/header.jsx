import React from 'react';
import { Link as RouterLink } from 'react-router-dom'; 
import { Link, List, ListItem, Flex, Heading, useBreakpointValue } from '@chakra-ui/react';

const Header = () => {
  const fontSize = useBreakpointValue({ base: '1rem', md: '1.3rem' });

  return (
    <div className="navbar-container" style={{ backgroundColor: '#d3d3d3' }}>
      <Flex justifyContent="space-between" alignItems="center" py={9} px={8}>

        <Heading fontSize="2xl" color="#3B719F">
          Adelle Ocampo
        </Heading>
        
        <Flex alignItems="center">
          <List display={{ base: 'flex', md: 'flex' }} alignItems="center">
            <ListItem mr={8}>
              <Link
                as={RouterLink}
                to="/AboutMe"
                _hover={{ color: '#3498DB' }}
                _activeLink={{ color: '#2C3E50' }}
                fontSize="md"
                color="#3B719F"
              >
                About Me
              </Link>
            </ListItem>
            <ListItem mr={8}>
              <Link
                as={RouterLink}
                to="/portfolio"
                _hover={{ color: '#3498DB' }}
                _activeLink={{ color: '#2C3E50' }}
                fontSize="md"
                color="#3B719F"
              >
                Portfolio
              </Link>
            </ListItem>
            <ListItem mr={8}>
              <Link
                as={RouterLink}
                to="/contact"
                _hover={{ color: '#3498DB' }}
                _activeLink={{ color: '#2C3E50' }}
                fontSize="md"
                color="#3B719F"
              >
                Contact
              </Link>
            </ListItem>
          </List>
        </Flex>
      </Flex>
    </div>
  );
};

export default Header;
