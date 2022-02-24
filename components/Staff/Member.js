import React from 'react'
import { Box, Image, Center } from "@chakra-ui/react";
import { motion } from 'framer-motion';

export default function Member(props) {
    const MotionBox = motion(Box)
    const subTitle = {
        base: "22px", //0px
        sm: "22px",  //320px
        md: "25px",  //768px
        lg: "25px",  //960px
        xl: "25px",  //1200px
        '2xl': "25px"  //1536px
    }
    return (
        <Box>
            <Center>
                <Box align="center"> 
                    <MotionBox
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 1 }}
                    >
                        <Image
                            alt="Segun Adebayo"
                            src={props.profile}
                            width="200px"
                        />
                    </MotionBox>
                    <Box
                        textAlign="center"
                        fontSize={subTitle}
                        fontWeight="semibold"
                    >
                        {props.name}
                    </Box>
                    <Box
                        textAlign="center"
                        fontSize="18px"
                    >
                        {props.pos}
                    </Box>
                </Box>
            </Center>
        </Box>
    )
}
