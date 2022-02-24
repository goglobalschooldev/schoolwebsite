import React from 'react'
import { Box, Center, Image, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion"
const MotionBox = motion(Box)

export default function TravelerSystem() {
    const container = { base: "90%", sm: "90%", md: "90%", lg: "95%", xl: "90%", "2xl": "80%" }
    const title = { base: "20px", sm: "28px", md: "32px", lg: "32px", xl: "32px", '2xl': "32px" };
    const body_Text = { base: "16px", sm: "18px", md: "20px", lg: "20px", xl: "20px", '2xl': "20px" };
    const display_Text = { base: "block", sm: "block", md: "block", lg: "block", xl: "block", '2xl': "block" };
    const width_Box = { base: "100%", sm: "100%", md: "80%", lg: "80%", xl: "80%", '2xl': "80%" }
    const width_Image = { base: "100%", sm: "100%", md: "50%", lg: "50%", xl: "50%", '2xl': "50%" };
    const widthBody = { sm: "100%", md: "90%", lg: "90%", xl: "80%", "2xl": "80%" };
    const sub_Title = {
        base: "14px", //0px
        sm: "16px",  //320px
        md: "22px",  //768px
        lg: "22px",  //960px
        xl: "22px",  //1200px
        '2xl': "22px"  //1536px
    }
    const top = {
        base: "70px", //0px
        sm: "70px",  //320px
        md: "100px",  //768px
        lg: "10px",  //960px
        xl: "0px",  //1200px
        '2xl': "0px"  //1536px
    }

    return (
        <Center mt={top}>
            <Flex
                w={container}
                display={display_Text}
            >
                <Center>
                    <MotionBox 
                        w={width_Image} 
                        mt="3%" 
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        <Image src="../traveler.png"
                            w="100%"
                        />
                    </MotionBox>
                </Center>
                <Center>
                    <Box w={width_Box} color="brand.100" p="20px" >
                        <Box
                            fontSize={title}
                            fontFamily="Sushi Delivery Regular"
                            letterSpacing="3px"
                            mt='3%'
                            textAlign="center"
                        >
                            Traveler Management System
                        </Box>
                        {
                            //     <Box 
                            //     fontSize={sub_Title}
                            //     fontFamily="Sushi Delivery Regular"

                            //     letterSpacing="2px"
                            //     mt="20px"
                            // >
                            //      What is Traveler Management and its benefit?
                            // </Box>
                        }
                        <Box mt="10px"
                            fontSize={body_Text}
                            align="justify"
                            body={widthBody}
                        >
                            As many of the Covid-19 cases in Siem Reap are mostly from outside,
                            Siem Reap Administration had opened checkpoints at its border with
                            other provinces to keep the pandemic under control. Traveler Management System
                            is created to help the Contact Tracing process, especially when the Covid-19 cases
                            imported from other provinces. The most important purpose of this system is to enable
                            the authority to effectively find the location of Covid-19 patients and their connection.
                        </Box>
                        {
                        //     <Box
                        //     fontSize={sub_Title}
                        //     fontFamily="Sushi Delivery Regular"

                        //     letterSpacing="2px"
                        //     mt="20px"
                        // >
                        //     Traveler Management System Users
                        // </Box>


                        // <Box mt="10px"
                        //     fontSize={body_Text}
                        //     align="justify"
                        //     body={widthBody}
                        // >
                        //     The system is now under the direct control of the Provincial Administration.
                        //     Active users include District Administrations, mainly districts bordered other provinces,
                        //     and the Union Youth Federations of Cambodia. These users have the authority
                        //     to scan and authorize the legibility of travelers to Siem Reap. Travelers and tourists
                        //     who are traveling to Siem Reap will need to create their own account using the link
                        //     provided and register their names into the system before they arrive at the checkpoint.
                        // </Box>
                        // <Box
                        //     fontSize={sub_Title}
                        //     fontFamily="Sushi Delivery Regular"

                        //     letterSpacing="2px"
                        //     mt="20px"
                        // >
                        //     Factors for System Creation
                        // </Box>


                        // <Box mt="10px"
                        //     fontSize={body_Text}
                        //     align="justify"
                        //     body={widthBody}
                        // >
                        //     Siem Reap is the only province that open primary health checkpoint at its border with other provinces.
                        //     These posts were originally manage using manual paperwork, which requires official to write down
                        //     the name of every traveler, and then report to Provincial Administration twice a day.
                        //     This, in turn, is causing the area to be full of travelers, who are waiting to get their names
                        //     registered and this leaves no rooms for social distancing or any other preventive measures.
                        //     To improve the process and safety, the Traveler Management System was created and divided into two phases.
                        //     Phase I requires officials to directly input traveler names into the system with PC.
                        //     Phase II has the travelers register their own information using mobile devices at their own convenient.
                        //     With the two phases ready, reports to provincial administration are quicker and it reduces the crowd at each post.
                        // </Box>


                        }
                    </Box>
                </Center>

            </Flex>
        </Center>
    )
}
