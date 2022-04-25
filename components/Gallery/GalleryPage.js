import React from 'react'
import { academicYear20_21 } from './ImageAPI'
import { academicYear21_22 } from './ImageAPI'
import DztImageGalleryComponent from "reactjs-image-gallery";
import { Box, Center, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion"
const MotionBox = motion(Box)

export default function GalleryPage() {
    let title = { base: "28px", sm: "40px", md: "45px", lg: "50px", xl: "50px", '2xl': "50px" };
    let container = { sm: "100%", md: "100%", lg: "98%", xl: "80%", "2xl": "80%" };
    const top = {
        base: "90px", //0px
        sm: "100px",  //320px
        md: "100px",  //768px
        lg: "30px",  //960px
        xl: "30px",  //1200px
        '2xl': "30px"  //1536px
    }

    return (
        <Box>
            <Center>
                <Box mt={top} width={container}>
                    <MotionBox
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}>
                        <Center>
                            <Image src="../vission.png" />
                        </Center>
                    </MotionBox>
                    <MotionBox
                        fontSize={title}
                        fontFamily="Sushi Delivery Regular"
                        letterSpacing="3px"
                        color="brand.100"
                        textAlign="center"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1.2 }}
                    >
                        <Text>
                            Gallery Of Academic Year 2020-2021
                        </Text>
                    </MotionBox>
                </Box>
            </Center>
            <DztImageGalleryComponent images={academicYear20_21} />
        </Box>
    )
}
