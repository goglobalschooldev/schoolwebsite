import React from 'react'
import { Center, Image, SimpleGrid, Box, Flex,FormControl,FormLabel, Input, Button} from "@chakra-ui/react"
import { useDisclosure } from "@chakra-ui/react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react"

export default function TestForm() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef()
    const finalRef = React.useRef()
    return (
        <div>
            <ModalFooter>
                <Button 
                    mr={3}
                    bg="#ED2777" 
                    variant="solid"
                    color="#fff"
                    onClick={onOpen}
                >
                    Sign In
                </Button> 
            </ModalFooter>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Box>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type 
                        specimen book. It has survived not only five centuries, but also the leap into 
                        electronic typesetting, remaining essentially unchanged. It was popularised in 
                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Box>
                </ModalBody>
                <ModalFooter>
                    <Center>
                        <Button 
                            bg="#ED2777" 
                            variant="solid"
                            color="#fff" mr={3} onClick={onClose}
                        >
                            Next
                        </Button>
                    </Center>
                </ModalFooter>
                </ModalContent>
            </Modal>

        </div>
    )
}


