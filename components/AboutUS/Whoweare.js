import React from 'react'
import { Center, Box, Image } from "@chakra-ui/react";
export default function Whoweare() {

    const bodyTextSize = {base: "15px",sm: "20px",md: "20px",lg: "20px",xl: "20px",'2xl': "20px"}

    return (
        <Center>
            <Box
                width={{ sm: "100%", md: "100%", lg: "98%", xl: "80%", "2xl": "70%" }}
                // bg="#ED2777"
                // borderColor="brand.100"
                // borderWidth="1px"
                // borderRadius="20px"
                // h="370px"
                color="brand.100"
                mt="30px"
            >
                <Center>
                    <Box
                        p={{
                            base: "15px", //0px
                            sm: "20px",  //320px
                            md: "20px",  //768px
                            lg: "0px",  //960px
                            xl: "30px",  //1200px
                            '2xl': "30px"  //1536px
                        }}
                    >
                        <Center>
                            <Box
                                w={{
                                    base: "50%", //0px
                                    sm: "50%",  //320px
                                    md: "40%",  //768px
                                    lg: "30%",  //960px
                                    xl: "30%",  //1200px
                                    '2xl': "30%"  //1536px
                                }}
                                mb="20px"
                            >
                                <a id="WhoWeAre"><Image src="../who_we_are.png" /></a>
                            </Box>
                        </Center>
                        <Box
                            textAlign="justify"
                            p='10px'
                            fontSize={bodyTextSize}
                        >
                            &emsp; &emsp; Go Global School was created in 2015, but its history can be dated as far as 2013. In 2013, professor Lok Lundy and professor Chy Sangvath had come together with a group of other professors from Law Department and other departments to collect ideas and shares in starting up a company. With 62,600 shares collected, a company named Khmer Credits, a small loan company, had emerged and stayed successfully until now under the name of Go Credits.
                            <br /><br />
                            &emsp; &emsp; With the same group of shareholders, who had strong background and work in the education field, they want to improve the education system for their younger generations, where they can be recognised for their education quality internally and internationally. They once again came together and decided to create Go Global School. Go Global School was founded in 2015, and its first ever registration of students began in the 15th of March, 2015. On the 14th of July 2015, Go Global School had received its first legal Business Registration with 31,168 shares. There were only 40 students enroled back then, but now, there are 1200 students who are enroling in all three programmes.
                        </Box>
                    </Box>
                </Center>
            </Box>
        </Center>
    )
}
