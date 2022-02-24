import { Center, Flex, Box, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion"
const MotionBox = motion(Box)

export default function MissionAndVission() {

    let container = {base: "100%",sm: "100%",md: "100%",lg: "100%",xl: "90%",'2xl': "70%"};
    let boxSize = {base:"100%",sm: "100%",md: "50%",lg: "50%",xl: "50%",'2xl': "50%"};
    let layouDispay = {base: "block",sm: "block",md: "flex",lg: "flex",xl: "flex",'2xl': "flex"}
    const titleSize = {base: "25px",sm: "30px",md: "30px",lg: "20px",xl: "30px",'2xl': "30px"};

    const top = {
        base: "0px", //0px
        sm: "0px",  //320px
        md: "120px",  //768px
        lg: "10px",  //960px
        xl: "0px",  //1200px
        '2xl': "0px"  //1536px
    }
    return (
        <Center>
            <Flex
                width={container}
                display={layouDispay}
                mt={top}
            >
                <Box
                    width={boxSize}
                    mt={
                        {
                            base: "120px", //0px
                            sm: "120px",  //320px
                            md: "50px",  //768px
                            lg: "100px",  //960px
                            xl: "110px",  //1200px
                            '2xl': "110px"  //1536px 
                        }
                    }
                >
                    <Box>
                    <Image src="../vission.png" />
                    </Box>
                    <Center>
                        <MotionBox
                            color="white"
                            bg="#ED2777"
                            pt="15px"
                            pb="15px"
                            pr="20px"
                            pl="20px"
                            borderRadius="10px"
                            width="95%"
                            h="120px"
                            mt="10px"
                            initial={{ x: -100, opacity:0}}
                            animate={{ x: 0, opacity:1 }}
                            transition={{ delay: 0.3, duration:1.5 }}
                        >
                            <Text
                                fontSize={titleSize}
                                fontFamily="Sushi Delivery Regular"
                                letterSpacing="3px"
                            >
                                Our Vision
                            </Text>
                            <Box mt="5px">
                                To educate Cambodian future generations to become international human resources.
                            </Box>
                        </MotionBox>
                    </Center>
                    <Center>
                        <MotionBox
                            mt="10px"
                            color="white"
                            bg="#a34a97"
                            pt="15px"
                            pb="15px"
                            pr="20px"
                            pl="20px"
                            borderRadius="10px"
                            width="95%"
                            h="120px"
                            initial={{ x: -100, opacity:0}}
                            animate={{ x: 0, opacity:1 }}
                            transition={{ delay: 1, duration:1.5 }}
                        >
                            <Text
                                fontSize={titleSize}
                                fontFamily="Sushi Delivery Regular"
                                letterSpacing="3px"
                            >
                                Our Mission
                            </Text>
                            <Box mt="5px">
                                To provide comprehensive general knowledge to our children.
                            </Box>
                        </MotionBox>
                    </Center>
                </Box>
                <Box
                    width={boxSize} >
                    <Center>
                        <MotionBox
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 1 }}
                        >
                        <Image src="../About_US.png"/>
                        </MotionBox>
                    </Center>
                </Box>
            </Flex>
        </Center>
    )
}
