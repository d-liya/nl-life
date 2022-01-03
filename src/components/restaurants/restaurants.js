import { useEffect, useState } from "react";
import { RestaurantCard } from "./restaurant-card";
import data from "./json-data";
import {
  Box,
  Heading,
  Wrap,
  WrapItem,
  Text,
  Image,
  Flex,
  Input,
} from "@chakra-ui/react";

function Restaurants() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <Box width="90%" p="20" pb="10" minH="70vh" display="flex">
        <Box
          width="40%"
          display="flex"
          justifyContent="center"
          flexDirection="column"
        >
          <Heading>Dine At Your Favourite Restaurant, Safely</Heading>
          <Text>Find A Local Restaurant</Text>
        </Box>
        <Box width="60%" display="flex">
          <Image
            src="/Images/dine-in.jpg"
            mr="10"
            borderRadius="lg"
            width="28%"
            height="80%"
          />
          <Image
            src="/Images/dine-in2.jpg"
            mt="50"
            mr="10"
            borderRadius="lg"
            width="28%"
            height="80%"
          />
          <Image
            src="/Images/dine-in3.jpg"
            mr="10"
            borderRadius="lg"
            width="28%"
            height="80%"
          />
        </Box>
      </Box>
      <Box width="100%" p="10">
        <Flex justifyContent="space-between" p="10px">
          <Text>Book outdoor dining</Text>
          <Input width="250px" placeholder="Search Restaurants" />
        </Flex>
        <Wrap spacing="30px">
          {data.map((el) => (
            <WrapItem key={el.title}>
              <RestaurantCard property={el} />
            </WrapItem>
          ))}
        </Wrap>
      </Box>
      <Box width="100%" p="10">
        <Flex p="10px">
          <Text>Order takeout</Text>
        </Flex>
        <Wrap spacing="30px">
          {data.map((el) => (
            <WrapItem key={el.title}>
              <RestaurantCard property={el} />
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </div>
  );
}
export default Restaurants;
