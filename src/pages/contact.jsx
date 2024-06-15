import React, { useState } from 'react';
import { Heading, FormControl, FormLabel, Input, Textarea, Button, VStack, Box } from '@chakra-ui/react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <VStack spacing={8} align="center" bg="white" py={3} my={8}>
      <Box bg="white" p={20} borderRadius="lg" boxShadow="lg" maxW="xl">
        <Heading as="h2" fontSize="2xl" mb={4} color="#3B719F">
          Contact Me
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl id="name" isRequired>
            <FormLabel color="#3B719F" fontSize={'small'}>Name</FormLabel>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              bg="white"
            />
          </FormControl>
          <FormControl id="email" isRequired mt={4}>
            <FormLabel color="#3B719F" fontSize={'small'}>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              bg="white"
            />
          </FormControl>
          <FormControl id="message" isRequired mt={4}>
            <FormLabel color="#3B719F" fontSize={'small'}>Message</FormLabel>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="Enter your message"
              bg="white"
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" mt={6} fontSize={'small'}>
            Submit
          </Button>
        </form>
      </Box>
    </VStack>
  );
};

export default Contact;
