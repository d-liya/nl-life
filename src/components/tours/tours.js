import React, { useState } from "react";
import { Box, Flex, Heading, IconButton, Button, useDisclosure } from "@chakra-ui/react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";

import Tour from "../tour/tour";
import ReservationPopUp from "../Reservation/reservation";
// images
import whaleImage from "./images/whale.png";
import icebergImage from "./images/iceberg.png";
import grosMorneImage from "./images/gros-morne.png";
import signalHillImage from "./images/signal-hill.png";
import jellyBeanRowImage from "./images/jellybeanrow.png";
import lanseAuxMeadowsImage from "./images/lanse-aux-meadows.png";
// videos
import whaleVideo from "./videos/whaleTour.mp4";
import icebergVideo from "./videos/icebergTour.mp4";
import grosMorneVideo from "./videos/grosTour.mp4";
import signalHillVideo from "./videos/signalTour.mp4";
import jellyBeanRowVideo from "./videos/jellybeanTour.mp4";
import lanseAuxMeadowsVideo from "./videos/meadowsTour.mp4";

const Tours = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [popUpData,setPopUpDate] = useState({title:'',type:''});
  return (
    <Box
      width={["100%", "95%"]}
      alignItems="center"
      justifyContent="center"
      padding="0.5rem"
      margin="0 auto"
      marginTop="2rem"
      id="Tours"
    >
      <Heading margin="0.5rem" marginBottom="1rem">
        Explore NL with Virtual Tours
      </Heading>
      <Flex flexDirection="column">
        <Heading marginLeft="3rem" fontSize="2xl">
          Bestsellers
        </Heading>
        <Flex alignItems="center" justifyContent="center" minWidth="100%">
          <IconButton
            icon={<FaArrowCircleLeft />}
            backgroundColor="transparent"
            fontSize="2rem"
          />
          <Tour
            title="Whale Watching"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            location="St. John's"
            link="/"
            price="16"
            image={whaleImage}
            video={whaleVideo}
            stars="4.96"
            type="LIVE"
            setPopUpDate={setPopUpDate}
            onOpen={onOpen}
            heartColor="black"
          />
          <Tour
            title="Iceberg Boat Tour"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            location="Twillingate"
            link="/"
            price="12"
            image={icebergImage}
            video={icebergVideo}
            stars="5.00"
            type="LIVE"
            setPopUpDate={setPopUpDate}
            onOpen={onOpen}
            heartColor="white"
          />
          <Tour
            title="Gros Morne National Park"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            location="Rocky Harbour"
            link="/"
            price="24"
            image={grosMorneImage}
            video={grosMorneVideo}
            stars="4.89"
            type="Virtual Reality"
            heartColor="white"
            setPopUpDate={setPopUpDate}
            onOpen={onOpen}
          />
          <IconButton
            icon={<FaArrowCircleRight />}
            backgroundColor="transparent"
            fontSize="2rem"
          />
        </Flex>
        <Flex flexDirection="column" marginTop="2rem">
          <Heading marginLeft="3rem" fontSize="2xl">
            Historic & Cultural
          </Heading>
          <Flex alignItems="center" justifyContent="center" minWidth="100%">
            <IconButton
              backgroundColor="transparent"
              icon={<FaArrowCircleLeft />}
              fontSize="2rem"
            />
            <Tour
              title="Signal HIll"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              location="St. John's"
              link="/"
              price="12"
              image={signalHillImage}
              video={signalHillVideo}
              stars="4.92"
              type="360° Video Tour"
              heartColor="white"
            setPopUpDate={setPopUpDate}
            onOpen={onOpen}
            />
            <Tour
              title="Jelly Bean Row"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              location="St. John's"
              link="/"
              price="14"
              image={jellyBeanRowImage}
              video={jellyBeanRowVideo}
              stars="5.00"
              type="LIVE"
              heartColor="white"
            setPopUpDate={setPopUpDate}
            onOpen={onOpen}
            />
            <Tour
              title="L'Anse aux Meadows"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              location="Great Northern Peninsula"
              link="/"
              price="20"
              image={lanseAuxMeadowsImage}
              video={lanseAuxMeadowsVideo}
              stars="4.85"
              type="Virtual Reality"
              heartColor="black"
            setPopUpDate={setPopUpDate}
            onOpen={onOpen}
            />
            <IconButton
              icon={<FaArrowCircleRight />}
              backgroundColor="transparent"
              fontSize="2rem"
            />
          </Flex>
        </Flex>
        <Button
          colorScheme="teal"
          margin="1rem auto"
          rightIcon={<FaAngleDoubleRight />}
        >
          See All Experiences
        </Button>
      </Flex>
      <ReservationPopUp data={popUpData} isOpen={isOpen} onClose={onClose}/>
    </Box>
  );
};

export default Tours;
