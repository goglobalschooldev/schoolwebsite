import React from 'react'
import {
    Center,
    Image,
    Box,
    Text,
    Button,
} from "@chakra-ui/react";
import { Event } from './Events'
import EventItem from './EventItem';
import { motion } from "framer-motion"

const MotionBox = motion(Box)

export default function AcademicCalendar() {

    let container = { base: "90%", sm: "90%", md: "90%", lg: "90%", xl: "80%", "2xl": "60%" };
    let title = { base: "28px", sm: "40px", md: "45px", lg: "50px", xl: "50px", '2xl': "50px" };
    let subTitle = { base: "26px", sm: "26px", md: "32px", lg: "32px", xl: "32px", "2xl": "34px" }
    const padding_Text = { base: "10px", sm: "30px", md: "30px", lg: "50px", xl: "50px", "2xl": "50px" }
    const top = {
        base: "90px", //0px
        sm: "100px",  //320px
        md: "100px",  //768px
        lg: "30px",  //960px
        xl: "30px",  //1200px
        '2xl': "30px"  //1536px
    }
    return (
        <Center>
            <Box
                mt={top}
                width={container}
                p={padding_Text}
            >
                <Box>
                    <MotionBox
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1, duration: 1.5 }}
                    >
                        <Center>
                            <Image src="../vission.png" />
                        </Center>
                    </MotionBox>
                    <MotionBox
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1.2 }}
                    >
                        <Text
                            fontSize={title}
                            fontFamily="Sushi Delivery Regular"
                            letterSpacing="3px"
                            color="brand.100"
                            textAlign="center"
                        >
                            ACADEMIC CALENDAR
                        </Text>
                        <Text
                            fontSize={subTitle}
                            fontFamily="Sushi Delivery Regular"
                            letterSpacing="3px"
                            color="brand.100"
                            textAlign="center"
                        >
                            2021-2022 ACADEMIC YEAR
                        </Text>
                    </MotionBox>
                </Box>
                <MotionBox pt="50px"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 1.6 }}>
                    {
                        Event.map(e => <EventItem key={e.id} title={e.title} date={e.date} color={e.color} />)
                    }
                </MotionBox>
                <Box
                    mt="20px"
                    p="20px"
                >

                    <a href="../Academic Calendar.pdf" download>
                        <Button bg="brand.100"
                            color="white"
                            width="100%"
                            textAlign="center">
                            Download
                        </Button>
                    </a>
                </Box>

            </Box>
        </Center>
    )
}
