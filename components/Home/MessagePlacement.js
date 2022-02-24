import React from 'react'
import { Center, Box } from "@chakra-ui/react"

export default function MessagePlacement() {
    let container = {
        base: "90%", //0px
        sm: "90%",  //320px
        md: "90%",  //768px
        lg: "90%",  //960px
        xl: "90%",  //1200px
        '2xl': "80%"  //1536px
    };
    const titleSize = {base:"25px",sm:"30px",md:"30px",lg:"20px",xl:"32px",'2xl': "32px"};
    const marginTop = { base:"30px",sm:"30px", md:"30px", lg:"70px", '2xl': "70px" }
    const display_Message = {base: "block", sm: "block", md: "none", lg: "none",xl:"none", '2xl': "none"}

    return (
        <div>
            <Center>
                <Box
                    display={display_Message}
                    width={container}
                    mt={marginTop}
                    p="10px"
                    fontSize={titleSize}
                    textAlign="center"
                    letterSpacing="2px"
                    fontFamily="Sushi Delivery Regular"
                    color="brand.100"
                >
                    To do plcement test you need to use laptop or desktop!
                </Box>
            </Center>
        </div>
    )
}



