import React from 'react'
import { Box, Center, Image } from "@chakra-ui/react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion"
const MotionBox = motion(Box)

// https://www.npmjs.com/package/react-responsive-carousel

export default function NewsCover({ allnews }) {
    let container = { sm: "100%", md: "100%", lg: "98%", xl: "80%", "2xl": "80%" };
    let widthBody = { sm: "100%", md: "90%", lg: "90%", xl: "80%", "2xl": "80%" };
    const titleSize = { base: "25px", sm: "30px", md: "30px", lg: "35px", xl: "35px", '2xl': "38px" };
    const bodyTextSize = { base: "15px", sm: "20px", md: "20px", lg: "20px", xl: "20px", '2xl': "20px" }
    const top = { base: "90px", sm: "100px", md: "100px", lg: "30px", xl: "30px", '2xl': "30px" }

    return (
        <Center >
            <Box
                width={container}
                p="10px"
                mt={top}
            >
                <MotionBox
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 1.5 }}
                >
                    <Center>
                        <Image w="70px" src="../icon_top.png" />
                    </Center>
                </MotionBox>
                <Center>
                    <MotionBox
                        fontSize={titleSize}
                        fontFamily="Sushi Delivery Regular"
                        letterSpacing="3px"
                        color="brand.100"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1.2 }}
                    >
                        Our News
                    </MotionBox>
                </Center>
                <Center>
                    <Box w={widthBody} align="justify" p='10px' mt='20px' color="brand.100" fontSize={bodyTextSize}>
                        Find our news update about education, tech dev information,
                        events and many other activities with our students here!
                    </Box>
                </Center>
            </Box>
        </Center>
    )
}
