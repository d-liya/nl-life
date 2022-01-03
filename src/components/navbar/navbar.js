import { Box, Image, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "./nav-logo.PNG";
function Navbar() {
  return (
    <Box
      p="10px"
      pb="0"
      ml="10%"
      mr="10%"
      d="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Link to="/">
        <Image src={logo} width="150px" borderRadius="1rem" height="60px" />
      </Link>
      <Box d="flex">
        <Link to="/shop">
          <Text fontWeight="semibold" mr="20px">
            Shops
          </Text>
        </Link>
        <Link to="/restaurants">
          <Text fontWeight="semibold" mr="20px">
            Restaurants
          </Text>
        </Link>
        <Link to="/">
          <Text fontWeight="semibold">Sign up</Text>
        </Link>
      </Box>
    </Box>
  );
}
export default Navbar;
