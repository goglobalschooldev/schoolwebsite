import { Box, Center, Image } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { motion } from "framer-motion"
const MotionBox = motion(Box)


export default function JoinCover() {
    let container = { sm: "100%", md: "100%", lg: "98%", xl: "80%", "2xl": "80%" };
    let widthBody = { sm: "100%", md: "90%", lg: "90%", xl: "80%", "2xl": "80%" };
    const titleSize = {
        base: "25px", //0px
        sm: "30px",  //320px
        md: "30px",  //768px
        lg: "35px",  //960px
        xl: "35px",  //1200px
        '2xl': "38px"  //1536px
    };
    const bodyTextSize = {
        base: "15px", //0px
        sm: "20px",  //320px
        md: "20px",  //768px
        lg: "20px",  //960px
        xl: "20px",  //1200px
        '2xl': "20px"  //1536px
    }
    const top = {
        base: "70px", //0px
        sm: "80px",  //320px
        md: "120px",  //768px
        lg: "30px",  //960px
        xl: "30px",  //1200px
        '2xl': "30px"  //1536px
    }
    return (
        <Center >
            <Box
                width={container}
                p="10px"
                mt={top}
            >
                <MotionBox
                    initial={{ x: -100, opacity:0}}
                    animate={{ x: 0, opacity:1 }}
                    transition={{ delay: 1, duration:1.5 }}
                >
                    <Center>
                        <Image w="70px" src="../icon_top.png" />
                    </Center>
                </MotionBox>
                <Center>
                    <MotionBox
                        fontSize={titleSize}
                        fontFamily="Sushi Delivery Regular"
                        letterSpacing="3px"
                        color="brand.100"
                        initial={{ x: -100, opacity:0}}
                        animate={{ x: 0, opacity:1 }}
                        transition={{ delay: 0.2, duration:1.2 }}
                    >
                        Join Our Team
                    </MotionBox>
                </Center>
                <Center>
                    <Box w={widthBody} align="justify" mt='20px' color="brand.100" fontSize={bodyTextSize} p='10px'>
                        Go Global School is always ready to improve education for our young generations.
                        If you are willing to change the education quality internally and internationally, 
                        let us know you and come join us!!
                    </Box>
                </Center>
            </Box>
        </Center>
    )
}
