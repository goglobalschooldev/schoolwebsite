import React from 'react'
import { Center, Box, Image, Flex } from "@chakra-ui/react";
import HeaderSlider from './HeaderSlider';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { motion } from "framer-motion"

const MotionBox = motion(Box)
const MotionCenter = motion(Center)

export default function HeaderDetails({ title, images, des }) {

    let title_Size = { base: "28px", sm: "40px", md: "45px", lg: "50px", xl: "50px", '2xl': "50px" };
    let body_Text = { base: "16px", sm: "20px", md: "20px", lg: "20px", xl: "20px", '2xl': "20px" };
    let widthBody = { sm: "100%", md: "80%", lg: "80%", xl: "80%", "2xl": "80%" };
    const top = { base: "70px", sm: "90px", md: "90px", lg: "30px", xl: "30px", '2xl': "30px" }

    return (
        <Box p="20px">
            <Center mt={top}>  
                <MotionBox initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 1.5 }}
                        >
                <Image src="../vission.png" />
                </MotionBox>
            </Center>
            <MotionCenter
                fontSize={title_Size}
                fontFamily="Sushi Delivery Regular"
                letterSpacing="3px"
                color="brand.100"
                align="center"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 1.2 }}
            >
                {title}
            </MotionCenter>
            <Center >
                {/* {images.map(i => <Image src={i}/>)} */}
                <div className="headerSlider">
                    <HeaderSlider images={images}/>
                </div>
            </Center>
            <Center>
                <Box w={widthBody} align="justify" mt='20px' color="brand.100" fontSize={body_Text}>
                    {des}
                </Box>
            </Center>
            
        </Box>
    )
}


