import React from 'react'
import { Center, Box, Image, SimpleGrid, List, ListItem, ListIcon } from "@chakra-ui/react";
import { BiCheck } from "react-icons/bi";

export default function SubProgramme({ subProgramme }) {

    let container = { base: "90%", sm: "95%", md: "95%", lg: "95%", xl: "80%", "2xl": "80%" };
    // // let widthBody = { sm: "100%", md: "90%", lg: "90%", xl: "80%", "2xl": "80%" };
    let title_Text = { base: "25px", sm: "30px", md: "30px", lg: "30px", xl: "32px", '2xl': "32px" };
    let body_Text = { base: "16px", sm: "20px", md: "20px", lg: "20px", xl: "20px", '2xl': "20px" };
    const top = { base: "60px", sm: "60px", md: "60px", lg: "50px", xl: "50px", '2xl': "50px" }
    //let hbody_Box = {base: "275px",sm: "250px",md: "230px",lg: "220px",xl: "220px", '2xl': "200px"}

    return (
        <Center>
            <Box w={container} mt={top}>
                <Box>
                    <Center>
                        <Image w="70px" src="../icon_top.png" />
                    </Center>
                </Box>
                <Box

                    textAlign="center"
                    fontSize={title_Text}
                    fontFamily="Sushi Delivery Regular"
                    letterSpacing="2px"
                    color="brand.100">{ }
                    SUB-PROGRAMME
                </Box>
                <SimpleGrid columns={2}>
                    {
                        subProgramme.map((d, index) =>
                            <Box
                                key={index}
                                data-aos="slide-up"
                                boxShadow="0px 2px 8px #C0C0C0"
                                fontSize={body_Text}
                                color="brand.100"
                                p="19px"
                                bg="gray.50"
                                mt="15px"
                                ml="20px"
                                borderRadius="10px"
                            >
                                {d.id}. {d.lisTitle}
                                {d.list.map((l, index) =>
                                    <List key={index}>
                                        <ListItem  >
                                            <ListIcon key={index} ml="20px" mb="2px" as={BiCheck} color="brand.100" />
                                            {l}
                                        </ListItem>
                                    </List>
                                )}
                            </Box>
                        )}
                </SimpleGrid>
            </Box>
        </Center>
    )
}
