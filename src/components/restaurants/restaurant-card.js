import { Box, Image, Text } from '@chakra-ui/react';
import { StarIcon, PhoneIcon } from '@chakra-ui/icons';

export function RestaurantCard({property}) {
    return (
      <Box maxW="250px" height="300px" cursor="pointer" overflow="hidden">
        <Image src={property.imageUrl} borderRadius="lg" height="180px" />
        <Box p="5">
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {property.title} | {property.type}
          </Box>
          <Box d="flex" alignItems="center" >
              <PhoneIcon fontSize="sm" mr="2"/>
              <Text fontSize="sm" >{property.number}</Text>
          </Box>
          <Box d="flex" mt="2" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? "yellow.300" : "gray.300"}
              />
            ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {property.reviewCount} reviews
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }
