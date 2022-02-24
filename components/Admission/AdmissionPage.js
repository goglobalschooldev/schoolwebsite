import { Center, Image, Box, } from "@chakra-ui/react";
import FLP_Enrolment from "./FLP_Enrolment";
import GP_Enrolment from "./GP_Enrolment";
import KP_Enrolment from "./KP_Enrolment";
import Visit from "./Visit";
import { motion } from "framer-motion"

const MotionBox = motion(Box)

export default function AdmissionPage() {
    let container = { sm: "100%", md: "100%", lg: "98%", xl: "80%", "2xl": "80%" };
    let widthBody = { sm: "100%", md: "90%", lg: "90%", xl: "80%", "2xl": "80%" };
    const titleSize = {base: "28px",sm: "40px",md: "45px",lg: "50px",xl: "50px",'2xl': "50px"};
    const bodyTextSize = {base: "15px",sm: "20px",md: "20px",lg:"20px",xl: "20px",'2xl': "20px"}
    const top = {
        base: "90px", //0px
        sm: "100px",  //320px
        md: "100px",  //768px
        lg: "30px",  //960px
        xl: "30px",  //1200px
        '2xl': "30px"  //1536px
    }

    return (
        <Box>
            <Center >
                <Box
                    width={container}
                    p="10px"
                    mt={top}
                >
                    <Center>
                        <MotionBox 
                            initial={{ x: -100, opacity:0}}
                            animate={{ x: 0, opacity:1 }}
                            transition={{ delay: 1, duration:1.5 }}
                        >
                            <Image src="../vission.png" />
                        </MotionBox>
                    </Center>
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
                            Enrolment
                        </MotionBox>
                    </Center>
                    <Center>
                        <Box w={widthBody} align="justify" mt='20px' color="brand.100" fontSize={bodyTextSize} p="10px">
                            Find our help or seek information with the enrolment process at Go Global School 
                            during open hours, 7:30-5:30 PM, Monday-Saturday, or visit our Facebook 
                            Page (Go Global School) and Contact Us (link build in).
                        </Box>
                    </Center>
                </Box>
            </Center>
            <KP_Enrolment />
            <FLP_Enrolment />
            <GP_Enrolment />
            <Visit />
        </Box>
    )
}
