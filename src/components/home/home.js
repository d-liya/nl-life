import React from "react";
import { Box, Flex, Heading, Image, Text, Button } from "@chakra-ui/react";
import jellyBeanRowImage from "./images/jellybeanrow2.png";

const Home = () => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box width="100%" height="90vh" textAlign="center" letterSpacing="wide">
      <Flex
        flexDirection="column"
        width="100%"
        height="90vh"
        justifyContent="center"
        position="absolute"
      >
        <Image
          width="100%"
          height="90vh"
          padding="10px"
          borderRadius="2rem"
          src={jellyBeanRowImage}
          position="absolute"
          zIndex="-999999"
        />
        <Box
          background="white"
          padding="2rem"
          ml="2.4rem"
          maxWidth="500px"
          borderRadius="1rem"
        >
          <Heading fontSize="5xl" color="black" marginBottom="1rem">
            Welcome to<br /> NL Life
          </Heading>
          <Text fontWeight="bold" fontSize="lg" margin="0.5rem" marginBottom="0.6rem">
            Tour the vibrant and charming province of Newfoundland without ever
            leaving your home.
          </Text>
          <Text fontWeight="bold" fontSize="lg" margin="0.5rem" marginTop="0.6rem">
            Iconic historic sites, beautiful scenery, and much more awaits you.
          </Text>
          <Flex
            flexDirection="row"
            minWidth="100%"
            alignItems="center"
            justifyContent="center"
            marginTop="1.5rem"
            marginBottom="0.2rem"
          >
            <Button
              colorScheme="blue"
              marginRight="0.25rem"
              color="white"
              onClick={() => scrollTo("About")}
            >
              Learn More
            </Button>
            <Button
              colorScheme="teal"
              marginLeft="0.25rem"
              color="white"
              onClick={() => scrollTo("Tours")}
            >
              Book A Virtual Tour
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
