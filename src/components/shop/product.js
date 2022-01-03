import { Box, Image, Text } from "@chakra-ui/react";

function Product({product}){
    return(
        <Box width="220px" margin="20px" p="10px" 
        borderRadius="1rem"
        background="rgba(255,255,255)"
        height="250px" 
        boxShadow="0 3px 5px rgba(0,0,0,.1)"
        transform="translate3d(0,-2px,0) scale(1.1)"
        border="1px" borderColor="#F1F0F1">
            <Image src={product.imageUrl} 
            width="200px" height="150px" borderRadius="0.5rem" />
            <Box p="10px">
                <Text fontWeight="bold" fontSize="0.9rem" >{product.name}</Text>
                <Text fontWeight="semibold" fontSize="0.85rem" >$ {product.price}</Text>
                <Text fontWeight="medium" fontSize="0.85rem" >Sold By: {product.seller}</Text>
            </Box>
        </Box>
    )
}
export default Product;
