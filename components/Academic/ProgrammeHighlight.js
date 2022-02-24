import React from 'react'
import { Center, Box, Image, SimpleGrid, Flex } from "@chakra-ui/react";

export default function ProgrammeHighlight({ programmeHighlight }) {

    let container = { base: "90%", sm: "95%", md: "95%", lg: "95%", xl: "80%", "2xl": "80%" };
    let title_Text = { base: "25px", sm: "30px", md: "30px", lg: "30px", xl: "32px", '2xl': "32px" };
    let body_Text = { base: "17px", sm: "18px", md: "20px", lg: "20px", xl: "20px", '2xl': "20px" };
    let top = { base: "70px", sm: "90px", md: "90px", lg: "30px", xl: "30px", '2xl': "30px" }
    let p_Id = { base: "4px", sm: "2px", md: "2px", lg: "2px", xl: "2px", '2xl': "2px" }
    let hbody_Box = { base: "175px", sm: "170px", md: "120px", lg: "110px", xl: "175px", '2xl': "150px" }

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
                    color="brand.100">
                    PROGRAMME HIGHLIGHT
                </Box>
                <Box position="relative">
                    <SimpleGrid columns={[1, 1, 1, 1, 2, 2]} spacing="10px">
                        {
                            programmeHighlight.map((d, index) =>
                                <Box key={index} data-aos="slide-up">
                                    <Box
                                        boxShadow="2px 3px 10px #5F5F5F"
                                        bg="white"
                                        fontSize={body_Text}
                                        fontWeight="bold"
                                        color="brand.100"
                                        textAlign="center"
                                        w="35px"
                                        h="35px"
                                        p={p_Id}
                                        borderRadius="35px"
                                        position="absolute">
                                        {d.id}
                                    </Box>
                                    <Box
                                        boxShadow="1px 2px 8px #C0C0C0"
                                        h={hbody_Box}
                                        fontSize={body_Text}
                                        color="white"
                                        p="18px"
                                        bg={d.color}
                                        mt="15px"
                                        ml="10px"
                                        borderRadius="10px"
                                    >
                                        {d.prHighlightBody}
                                    </Box>
                                </Box>
                            )}
                    </SimpleGrid>
                </Box>
            </Box>
        </Center>
    )
}
