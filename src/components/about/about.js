import React from "react";
import { Box, Heading, Flex, Image, Text, Icon } from "@chakra-ui/react";
import NLImage from "./images/nl.png";
import {
  BsFillChatFill,
  BsLockFill,
  BsPeopleFill,
  BsFillStarFill,
} from "react-icons/bs";

const About = () => {
  return (
    <Box backgroundColor="#eeeeee" width="100%" marginTop="3.5rem" id="About">
      <Box
        width={["100%", "90%"]}
        alignItems="center"
        justifyContent="center"
        padding="0.5rem"
        paddingBottom="0.1rem"
        margin="0 auto"
        marginBottom="4rem"
      >
        <Heading marginY="1rem">About NL Life</Heading>
        <Flex>
          <Flex flexDirection="column">
            <Flex>
              <Box width="325px" height="180px" margin="0.6rem" marginLeft="0">
                <Flex>
                  <Icon
                    as={BsFillChatFill}
                    fontSize="1.4rem"
                    marginRight="0.5rem"
                    color="#F56565"
                  />
                  <Heading fontSize="1.5rem" marginBottom="0.5rem">
                    Live and Interactive
                  </Heading>
                </Flex>
                <Text>
                  Live tours allow you to interact directly with experienced
                  tour guides.
                </Text>
                <Text marginTop="0.5rem">
                  The latest Virtual Reality and 360° video technology makes our
                  tours truly immersive and interactive.
                </Text>
              </Box>
              <Box
                width="325px"
                height="180px"
                marginY="0.6rem"
                marginX="1.5rem"
              >
                <Flex>
                  <Icon
                    as={BsPeopleFill}
                    fontSize="1.4rem"
                    marginRight="0.5rem"
                    color="#4299E1"
                  />
                  <Heading fontSize="1.5rem" marginBottom="0.5rem">
                    Group and Private Tours
                  </Heading>
                </Flex>
                <Text>
                  We provide experiences to be enjoyed either with a group or
                  privately.
                </Text>
                <Text marginTop="0.5rem">
                  Options to reserve a tour for friends, family, or coworkers
                  are available.
                </Text>
              </Box>
            </Flex>
            <Flex>
              <Box width="325px" height="180px" margin="0.6rem" marginLeft="0">
                <Flex>
                  <Icon
                    as={BsFillStarFill}
                    fontSize="1.4rem"
                    marginRight="0.5rem"
                    color="#ECC94B"
                  />
                  <Heading fontSize="1.5rem" marginBottom="0.5rem">
                    Excellent Experiences
                  </Heading>
                </Flex>
                <Text>
                  Our virtual tours are highly rated and enjoyable for all ages.
                </Text>
                <Text marginTop="0.5rem">
                  Qualified tour guides and hosts make experiencing the rich
                  culture and scenery of NL even better.
                </Text>
              </Box>
              <Box
                width="325px"
                height="180px"
                marginY="0.6rem"
                marginX="1.5rem"
              >
                <Flex>
                  <Icon
                    as={BsLockFill}
                    fontSize="1.4rem"
                    marginRight="0.5rem"
                    color="#38B2AC"
                  />
                  <Heading fontSize="1.5rem" marginBottom="0.5rem">
                    Safe and Secure
                  </Heading>
                </Flex>
                <Text>
                  Experience travelling to an exciting new place without leaving
                  the safety of home.{" "}
                </Text>
                <Text marginTop="0.5rem">
                  Purchases made through NL Life are guaranteed to be secure and
                  reliable.
                </Text>
              </Box>
            </Flex>
          </Flex>
          <Box
            margin="0 auto"
            width="100%"
            alignItems="center"
            justifyContent="center"
            position="relative"
            marginBottom="2.5rem"
          >
            <Image
              src={NLImage}
              boxShadow="5px 6px 10px rgba(0, 0, 0, 0.3)"
              width="auto"
              height="auto"
              maxH="100%"
              maxW="100%"
              position="absolute"
              top="0"
              bottom="0"
              left="0"
              right="0"
              margin="auto"
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default About;
