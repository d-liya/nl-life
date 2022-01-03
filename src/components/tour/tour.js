import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { MdLocationOn } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";

const Tour = (props) => {
  const [clicked, setClicked] = useState(false);
  const onClick = () => {
    props.setPopUpDate({
      title:props.title,
      type:props.type,
      price:props.price
    })
    props.onOpen()
  }
  return (
    <Box
      onClick={onClick}
      cursor="pointer"
      width="100%"
      height="28rem"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      letterSpacing="wide"
      margin="0.5rem"
      position="relative"
    >
      <IconButton
        icon={
          clicked ? (
            <AiTwotoneHeart color="#F56565" />
          ) : (
            <AiOutlineHeart color={props.heartColor} />
          )
        }
        backgroundColor="transparent"
        _hover={{ backgroundColor: "transparent" }}
        _active={{ backgroundColor: "transparent" }}
        _focus={{
          outline: "none",
        }}
        position="absolute"
        right="0"
        fontSize="1.8rem"
        margin="0.2rem"
        zIndex="1"
        onClick={() => setClicked(!clicked)}
      />
      <Box
        position="absolute"
        backgroundColor="rgba(0, 0, 0, 0.65)"
        borderRadius="1000px"
        margin="0.5rem"
        padding="0.3rem"
      >
        <Text color="white" fontSize="0.8rem">
          {props.type}
        </Text>
      </Box>
      <video
        style={{ height: "18rem", width: "100%", objectFit: "fill" }}
        poster={props.image}
        onMouseOver={(event) => event.target.play()}
        onMouseOut={(event) => event.target.pause()}
        src={props.video}
      ></video>
      <Box href={props.link} padding="1rem" marginX="0.5rem">
        <Flex
          alignItems="center"
          marginTop={
            props.title === "Gros Morne National Park" ? "0.1rem" : "0.8rem"
          }
          marginBottom="0"
          position="relative"
        >
          <Heading as="h4" size="md" marginRight="0.4rem" maxW="250px">
            {props.title}
          </Heading>
          <Flex position="absolute" top="0" right="0">
            <Icon as={FaStar} color="yellow.400" fontSize="lg" />
            <Text>{props.stars}</Text>
          </Flex>
        </Flex>
        <Flex flexDirection="row" marginY="1rem">
          <Icon as={MdLocationOn} fontSize="xl" color="red.400" />
          <Text>{props.location}</Text>
        </Flex>
        <Text>
          From <b>${props.price}/person</b>
        </Text>
      </Box>
    </Box>
  );
};

export default Tour;
