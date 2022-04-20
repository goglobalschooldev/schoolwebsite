import React from 'react'
import { Center, Image, SimpleGrid, Box,Spacer } from "@chakra-ui/react"
import SignInForm from "./SignInForm"

export default function Placement() {
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
    const subTitle = { base:"20px", sm:"20px", md:"18px", lg:"18px", '2xl': "18px" }
    const ml_Image = { lg:"60px",xl:'60px', '2xl': "200px" }
    const ml_Placement = { lg:"40px",xl:'100px', '2xl': "50px" }
    const display_Placement = {base: "none", sm: "none", md: "flex", lg: "flex",xl:"flex", '2xl': "flex"}

    return (
        <div>
            <Center>
                <Box
                    display={display_Placement}
                    ml={ml_Placement}
                    width={container}
                    mt={marginTop}
                    p="10px"
                >
                <SimpleGrid 
                        columns={[2]}
                        spacing={{
                            base: "10px", //0px
                            sm: "5px",  //320px
                            md: "10px",  //768px
                            lg: "10px",  //960px
                            xl: "10px",  //1200px
                            '2xl': "20px"  //1536px
                        }}
                    >
                            <Box
                                fontSize={titleSize}
                                letterSpacing="3px"
                                fontFamily="Sushi Delivery Regular"
                                color="brand.100"
                                mt="80px"
                            >
                                <p>Placement test</p>
                                <p>is available here!</p>
                                <Box
                                    fontSize={subTitle}
                                    letterSpacing="0px"
                                    fontFamily="Segoe UI"
                                >
                                    <p>Test and Match your capability here with us at Go Global School. </p>
                                </Box>
                                <Box>
                                    <SignInForm />
                                </Box>
                            </Box>
                            <Box ml={ml_Image} w="400px">
                                <Image src="../Placement test mointor.png" />
                            </Box>
                    </SimpleGrid>
                </Box>
            </Center>
        </div>
    )
}



