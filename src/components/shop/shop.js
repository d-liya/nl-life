import { Box, Button, Flex, Heading, Input, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Product from "./product";

function Shop(){
    const [category, setCategory] = useState('From Your Recent Tours');
    const onClick = (category) => {
        setCategory(category)
    }
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
    },[])
    return(
        <Box p="1" minH="90vh">
            <Box background='rgba(66, 3, 201, 0.8)' minH="350px"
            borderRadius="1rem" 
            margin="5%" marginTop="10px" marginBottom="10px">
                <Box p="15px" ml="5%" 
                mr="5%" d="flex" justifyContent="space-between" color="white">
                    <Flex position="relative" alignItems="center">
                    <Text color="black">Products &ensp;</Text>
                    {category && <Text>/ {category}</Text>}
                    </Flex>
                    <Flex justifyContent="space-between" width="50%">
                        <Heading>Shop</Heading>
                        <Input  placeholder="Product Search" width="150px" />
                    </Flex>
                </Box>
                <Box p="15px" pt="0px" d="flex" justifyContent="center">
                    <Button 
                    onClick={() => onClick('From Your Recent Tours')}
                    mr="5px">From Your Recent Tours</Button>
                    <Button mr="5px"
                    onClick={() => onClick('Best Seller')}>
                        Best Seller</Button>
                    <Button mr="5px"
                    onClick={() => onClick('Sale')}>
                        Sale</Button>
                </Box>
            </Box>
            
            <Box marginLeft="6.5%" marginRight="6.5%" position="relative" 
            top="-250" 
            padding="20px"
            d="flex" justifyContent="center" flexWrap="wrap">
                {category==="From Your Recent Tours" && data.map((el,i) => {
                    if(i < 3){
                        return <Product key={i} product={el}/>
                    }
                })}
                {category==="Best Seller" && data.map((el,i) => {
                    if(i>2 && i < 4){
                        return <Product key={i} product={el}/>
                    }
                })}
                {category==="Sale" && data.map((el,i) => {
                    if(i > 3){
                        return <Product key={i} product={el}/>
                    }
                })}
                </Box>
            
        </Box>
    )
}
export default Shop;
const data = [{
    imageUrl:'/Images/product1.PNG',
    name:'Plate | Ornament',
    price:'40.00',
    seller:'Grandmudder',
},{
    imageUrl:'/Images/product2.jpg',
    name:'Barrel | Ornament',
    price:'100.00',
    seller:'Skipper',
},{
    imageUrl:'/Images/product3.jpg',
    name:'Art | Ornament',
    price:'50.00',
    seller:'Grandmudder',
},{
    imageUrl:'/Images/product5.jpg',
    name:'Sweater',
    price:'60.00',
    seller:'Steve up da road',
},{
    imageUrl:'/Images/product5.jpg',
    name:'Sweater',
    price:'20.00',
    seller:'Whiskers the cat and co',
},{
    imageUrl:'/Images/product6.jpg',
    name:'T- Shirt',
    price:'15.00',
    seller:'Iceberg Enthusiasts',
}]

const colors = ['#d71b3b','#e8d71e','#16acea','#4203c9']