import { Center, Image, Box, SimpleGrid } from "@chakra-ui/react";

const WhyChooseUs = () => {
    const titleSize = {base: "25px",sm: "30px",md: "30px",lg: "30px",xl: "32px",'2xl': "32px"};
    let container = {base: "90%",sm: "100%",md: "100%",lg: "90%",xl: "90%",'2xl': "80%"};
    const bodyTextSize = {base: "15px",sm: "20px",md: "20px",lg: "20px",xl: "20px",'2xl': "20px"}

    const bodyTextMt = {
        base: "15px", //0px
        sm: "20px",  //320px
        md: "0px",  //768px
        lg: "20px",  //960px
        xl: "80px",  //1200px
        '2xl': "60px"  //1536px
    }
    const marginTop = { base: "30px", sm: "30px", md: "30px", lg: "70px", '2xl': "70px" }
    return (
        <Center>
            <Box
                width={container}
                p="10px"
                mt={marginTop}
                color="brand.100"
            >
                <Center>
                    <SimpleGrid
                        columns={[
                            1, //0px
                            1,  //320px
                            2,  //768px
                            2,  //960px
                            2,  //1200px
                            2  //1536px
                        ]}
                        spacing={{
                            base: "10px", //0px
                            sm: "5px",  //320px
                            md: "10px",  //768px
                            lg: "10px",  //960px
                            xl: "10px",  //1200px
                            '2xl': "5px"  //1536px
                        }}
                    >
                        <Box>
                            <Center>
                                <Image
                                    src="Why-chooses-us__1.png"
                                    width={{ base: "80%", sm: "70%", md: "100%", lg: "80%", xl: "70%", '2xl': "70%" }}
                                />
                            </Center>
                        </Box>
                        <Box
                            mt={bodyTextMt}
                        >
                            <Box>
                                <Image src="../whyChooseUs.png"
                                />
                            </Box>
                            <Box
                                fontSize={titleSize}
                                letterSpacing="3px"
                                fontFamily="Sushi Delivery Regular"
                            >
                                Why Choose US
                            </Box>
                            <Box
                                mt='10px'
                                fontSize={bodyTextSize}
                            >
                                Go Global School has been founded by a group of educational
                                specialists, who collectively hold over 10 years of experience in
                                the field. The curriculum has been developed in accordance
                                with the academic programme set by the Ministry of Education,
                                Youth, and Sport of The Kingdom of Cambodia and
                                the British National Curriculum.
                            </Box>
                        </Box>
                    </SimpleGrid>
                </Center>
            </Box>
        </Center>
    );
}

export default WhyChooseUs;