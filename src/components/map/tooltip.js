import { Box,  Image, Text, Flex,Heading,Link } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import {BsGeoAlt} from 'react-icons/bs';
import { useRef, useEffect } from 'react';

function MapTooltip({lat,lng,text,imageUrl,isOpen, onToggle,setIsOpen, right, top,type}) {
    const ref = useRef()
    const handleClickOutSide = (e) => {
		if(ref.current && !ref.current.contains(e.target)){
			setIsOpen(0)
		}
	}

	useEffect(() => {
		document.addEventListener('click' , handleClickOutSide ,true);
		return () => {
			document.removeEventListener('click',handleClickOutSide,true)
		}
	});
    return(
        <Box lat={lat} lng={lng} position="absolute" ref={ref}>
            <BsGeoAlt color={isOpen?'#16acea':"#d71b3b"} 
            size="20px" onClick={onToggle} cursor="pointer" />
            <Box visibility={isOpen?'visible':'hidden'} zIndex="10"
            position="relative" 
            top={top} 
            right={right}>
            <Box  
                color="black"
                width="230px"
                height="auto"
                mt="4"
                bg="white"
                rounded="md"
                shadow="md"
            >
            <Image src={imageUrl} 
            alt={text} width="230px" height="100px" roundedTop="md"  />
            <Flex alignItems="center" p="10px" marginTop="0.8rem" marginBottom="0">
                <Heading size="sm">
                    {text}
                </Heading>
                <StarIcon ml="10px" mr="5px" color="yellow.400" fontSize="lg"/>
                <Text>{4}</Text>
            </Flex>
            <Box pl="10px" pb="5px" d="flex">
                <Text>Tour Type:&nbsp; </Text>
                <Text>{type}</Text>
            </Box>
            <Box pr="20px" pb="10px" d="flex" justifyContent="flex-end">
            <Link >Learn More</Link>
            </Box>
            
        </Box>
            </Box>
        </Box>
    )
}

export default MapTooltip;

