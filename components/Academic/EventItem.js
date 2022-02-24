import React from 'react'
import { Box, Flex, Center } from "@chakra-ui/react";
import moment from 'moment'

export default function EventItem({ title, date, color }) {
    const display_Text = { base: "block", sm: "block", md: "flex", lg: "flex", xl: "flex", '2xl': "flex" };
    const padding_Box = { base: "15px", sm: "15px", md: "20px", lg: "20px", xl: "20px", '2xl': "20px" };
    const body_Text = { base: "15px",sm: "20px",md: "20px",lg: "20px",xl: "20px",'2xl': "20px"}
    const width_Datebox = { base: "52px", sm: "60px", md: "60px", lg: "70px", xl: "70px", '2xl': "70px" }
    const height_Datebox = { base: "52px", sm: "60px", md: "60px", lg: "70px", xl: "70px", '2xl': "70px" }
    const pt_Datebox = { base: "1px", sm: "2px", md: "2px", lg: "3px", xl: "3px", '2xl': "3px" }
    const date_Text = { base: "20px", sm: "22px", md: "22px", lg: "25px", xl: "25px", '2xl': "25px" }
    return (
        <Flex
            p={padding_Box}
            display={display_Text}
        >
            <Center> 
                <Box
                pt={pt_Datebox}
                bg={color}
                color="white"
                borderRadius="5px"
                width={width_Datebox}
                h={height_Datebox}
            >
                <Box textAlign="center" fontSize={date_Text} fontWeight="semibold">
                    {
                        moment(date).format("DD")
                    }
                </Box>
                <Box textAlign="center" mt="-7px">
                    {
                        moment(date).format("MMM")
                    }
                </Box>
                </Box>
                </Center>
                <Center> 
                    <Box
                        textAlign="center"
                        fontSize={body_Text}
                        color="brand.100"
                        ml="20px"
                        mt="15px"
                    >
                        {title}
                    </Box>
                </Center>
        </Flex>
    )
 }