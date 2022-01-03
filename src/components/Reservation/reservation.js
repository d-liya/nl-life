import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    Box,
    Flex,
    Input
  } from "@chakra-ui/react";

function ReservationPopUp({isOpen,onClose,data}){
    return(
        <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>{data.title === 'Gros Morne National Park' ? 'Gros Morne Park' : data.title} | {data.type}</ModalHeader>
                <ModalCloseButton />
                <ModalBody margin="10px">
                    <Flex m="10px" mt="20px">
                        <Input type="date" defaultValue={new Date().toDateString} />
                        <Input type="text" defaultValue="Number of guests"/>
                    </Flex>
                    <Flex justifyContent="space-between" m="10px" mt="25px">
                        <Box>
                            <Text fontWeight="bold">Mon, Feb 22</Text>
                            <Text>10:00 a.m - 11:30 a.m</Text>
                        </Box>
                        <Box>
                            <Text>From ${data.price} / person</Text>
                            <Button background="#d71b3b" mt="5px" float="right" color="white" >Choose</Button>
                        </Box>
                    </Flex >
                    <Flex justifyContent="space-between" m="10px"  mt="25px">
                        <Box>
                            <Text fontWeight="bold">Mon, Feb 22</Text>
                            <Text>01:00 p.m - 02:30 p.m</Text>
                        </Box>
                        <Box>
                            <Text>From ${data.price} / person</Text>
                            <Button float="right" background="#d71b3b" mt="5px" color="white">Choose</Button>
                        </Box>
                    </Flex>
                    <Flex justifyContent="space-between" m="10px"  mt="25px">
                        <Box>
                            <Text fontWeight="bold">Mon, Feb 22</Text>
                            <Text>02:45 p.m - 06:15 p.m</Text>
                        </Box>
                        <Box>
                            <Text>From ${data.price} / person</Text>
                            <Button float="right" background="#d71b3b" mt="5px" color="white">Choose</Button>
                        </Box>
                    </Flex>
                    <Button marginTop="30px" width="100%">See more dates</Button>
                </ModalBody>
                </ModalContent>
            </Modal>
    )
}
export default ReservationPopUp;