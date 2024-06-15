import React from 'react';
import { Flex, Box, Heading } from '@chakra-ui/react';
import Projects from '../components/projects';
import ShopMate from '../assets/shopMate.png';
import CryptoB from '../assets/crypoBazaar.png';
import NoteTake from '../assets/noteTaker.png';
import WeathDash from '../assets/weathDashboard.png';


const Portfolio = () => {
  const projectsCard = [
    {
      title: 'Shop Mate',
      imageSrc: ShopMate,
      repoLink: 'https://github.com/adellemaeocampo/Shop-Mate.git',
      text: 'This was a group project done for the University of Adelaide Bootcamp. Which allows user to create, share and add items to lists.'
    },
    {
      title: 'Crypto Bazaar',
      imageSrc: CryptoB,
      repoLink: 'https://github.com/adellemaeocampo/crypto-bazaar.git',
      text: 'This was a group project done for the University of Adelaide Bootcamp. Which aids user in trading crypto and NTFs.'
    },
    {
      title: 'Note Taker',
      imageSrc: NoteTake,
      repoLink: 'https://github.com/adellemaeocampo/Note_Taker.git',
      text: 'This application was a project created for the Adelaide University coding bootcamp. This is an app that allows are user to create notes.'
    },
    {
      title: 'Weather Dashboard',
      imageSrc: WeathDash,
      repoLink: 'https://github.com/adellemaeocampo/weather-app.git',
      text: 'This application was a project created for the Adelaide University coding bootcamp. This is an app that allows are user to look up weather conditons in different.'
    },

  ];

  return (
    <Flex direction="column" align="center" py={8} bg="#F7F7F7">
      <Heading fontSize="4xl" mb={4} color="#3B719F" pt={5}>
        Portfolio
      </Heading>
      <Flex justify="center" align="center" flexWrap="wrap">
        {projectsCard.map((project, index) => (
          <Box
            key={index}
            p={4}
            m={4}
            borderWidth="1px"
            overflow="hidden"
            boxShadow="md"
            bg="white"
            _hover={{ bg: '#D3D3D3' }}
          >
            <Projects
              title={project.title}
              imageSrc={project.imageSrc}
              repoLink={project.repoLink}
              appLink={project.text}
            />
          </Box>
        ))}
      </Flex>
    </Flex>
  );
}

export default Portfolio;
