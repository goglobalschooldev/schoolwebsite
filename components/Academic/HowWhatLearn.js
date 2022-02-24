import React from 'react'
import { Center, Box, List, ListItem, ListIcon,Image } from "@chakra-ui/react";
import { MdCheckCircle, MdSettings } from "react-icons/md";

export default function SubProgramme({howLearn, whatLearn }) {

    let container = { base:"90%",sm:"95%", md:"95%", lg:"95%", xl:"80%","2xl":"80%" };
    // // let widthBody = { sm: "100%", md: "90%", lg: "90%", xl: "80%", "2xl": "80%" };
    let title_Text = {base: "25px",sm: "30px",md: "30px",lg: "30px",xl: "32px",'2xl': "32px"};
    let body_Text = {  base: "16px",sm: "20px", md: "20px", lg: "20px", xl: "20px", '2xl': "20px"};
    const top = {base: "60px",sm: "60px",md: "60px",lg: "50px",xl: "50px", '2xl': "50px"}

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
                        How Children Will Learn
                </Box>
                <List
                    ml="50px"
                    color="brand.100"
                    borderRadius="10px">
                    {
                    howLearn.map(d => 
                   <ListItem fontSize={body_Text}>
                       <ListIcon mb="2px" as={MdCheckCircle} color="brand.100" />
                            {d}
                   </ListItem>
                    )}
                </List>
                <Box mt="30px">
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
                        What Children Will Learn
                </Box>
                <List
                    ml="50px"
                    color="brand.100"
                    borderRadius="10px">
                    {
                    whatLearn.map(d => 
                        <ListItem fontSize={body_Text}>
                            <ListIcon mb="2px" as={MdCheckCircle} color="brand.100" />
                                {d}
                       </ListItem>
                    )}
                </List>
            </Box>
        </Center> 
    )
}