import { Box, Center, AspectRatio, Button, Flex, Link, Image } from "@chakra-ui/react";

const OurVideo = () => {
    let container = {base: "90%",sm: "100%",md: "100%",lg: "90%",xl: "70%",'2xl': "80%"};
    const titleSize = {base: "25px",sm: "30px",md: "30px",lg: "30px",xl: "32px",'2xl': "32px"};
    const bodyTextSize = {base: "15px",sm: "20px",md: "20px",lg: "20px",xl: "20px",'2xl': "20px"}
    const boxSize = {
        base: "100%", //0px
        sm: "100%",  //320px
        md: "50%",  //768px
        lg: "50%",  //960px
        xl: "50%",  //1200px
        '2xl': "50%"  //1536px
    }
    const marginTop = { base: "30px", sm: "30px", md: "30px", lg: "70px", '2xl': "70px" }
    return (
        <Center>
            <Flex
                width={container}
                p="10px"
                display={{
                    base: "block", //0px
                    sm: "block",  //320px
                    md: "flex",  //768px
                    lg: "flex",  //960px
                    xl: "flex",  //1200px
                    '2xl': "flex"  //1536px
                }}
                mt={marginTop}
            >
                <Box
                    w={boxSize}
                    color="brand.100"
                    p={{
                        base: "0px", //0px
                        sm: "20px",  //320px
                        md: "30px",  //768px
                        lg: "20px",  //960px
                        xl: "40px",  //1200px
                        '2xl': "40px"  //1536px
                    }}
                >
                     <Box>
                        <Image w="70px" src="../icon_top.png" />
                    </Box>
                    <Box
                        fontSize={titleSize}
                        fontFamily="Sushi Delivery Regular"
                        letterSpacing="3px"
                    >
                        WATCH
                        OUR VIDEO
                    </Box>
                    <Box mt="5px"
                        fontSize={bodyTextSize}
                    >
                        Want to know more about us? Check our videos to find various things that could be your study assistant and information
                    </Box>
                    <Box mt="5px">
                        <Link
                            target='_blank'
                            href="https://www.youtube.com/watch?v=Zl7KJ2UNhTo&list=PLrhrOt6llysNG6rE1CYscEskiITaoJ_dV"
                            fontSize={bodyTextSize}
                            fontWeight="semibold"
                        >
                            See More
                        </Link>
                    </Box>
                </Box>
                <Box
                    w={boxSize}
                    mt="20px"
                >
                    <AspectRatio
                        ratio={2}
                    >
                        <iframe
                            title="naruto"
                            src="https://www.youtube.com/embed/JpeYfX7-rG0"
                            allowFullScreen
                        />
                    </AspectRatio>
                </Box>
            </Flex>
        </Center>
    );
}

export default OurVideo;