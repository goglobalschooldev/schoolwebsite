import React from 'react'
import { Center, Image, Flex, Box, Icon, Collapse, ScaleFade, Slide, SlideFade, Button, SimpleGrid } from "@chakra-ui/react";
import { CgEditBlackPoint, CgFileDocument } from "react-icons/cg";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineIdcard } from "react-icons/ai";
import { motion } from 'framer-motion';

const MotionBox = motion(Box)

export default function KP_Enrolment() {
    const data =
        [{
            id: 1,
            title: "Birth Certificate, Parents’ /Legal Guardians’ National ID",
            icon: AiOutlineIdcard

        }, {
            id: 2,
            title: "Phone Numbers for Telegram",
            icon: FaTelegramPlane

        }, {
            id: 3,
            title: "Admission Form",
            icon: CgFileDocument
        }]

    const [showCrech, setShowshowCrech] = React.useState(false)
    const [showKind, setShowKind] = React.useState(false)
    const [showPrimary, setShowPrimary] = React.useState(false)

    const title = {
        base: "20px", //0px
        sm: "28px",  //320px
        md: "28px",  //768px
        lg: "28px",  //960px
        xl: "28px",  //1200px
        '2xl': "28px"  //1536px
    };
    let container = { base: "90%", sm: "100%", md: "100%", lg: "90%", xl: "70%", '2xl': "80%" };
    const body_Text = { base: "15px", sm: "20px", md: "20px", lg: "20px", xl: "20px", '2xl': "20px" }
    const display_Text = { base: "block", sm: "block", md: "flex", lg: "flex", xl: "flex", '2xl': "flex" };
    const magin_Top = { base: "15px", sm: "15px", md: "15px", lg: "14px", xl: "14px", '2xl': "14px" };

    return (
        <Center >
            <Flex
                width={container}
                p="10px"
                display={display_Text}
            >
                <MotionBox
                    width={{ sm: "100%", md: "50%", lg: "50%", xl: "50%", "2xl": "50%" }} p="50px"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 1.5 }}
                >
                    <Image src="KP_Enrollment.png" />
                </MotionBox>
                <Box
                    width={{ sm: "100%", md: "50%", lg: "50%", xl: "50%", "2xl": "50%" }}
                    color="brand.100"
                    p="10px" 
                >
                    <Box>
                        <Image w="70px" src="../icon_top.png" />
                    </Box>
                    <Box 
                        fontSize={title}
                        fontFamily="Sushi Delivery Regular"
                        letterSpacing="3px"
                    >
                        <a id='KP'>Khmer Programme</a>
                        
                    </Box>
                    <Box
                        mt="20px"
                        fontSize={body_Text}
                    >
                        Early Childhood Education (all levels) will not sit the Placement Test.
                        Required Document for Enrolment.
                        <Box
                            fontSize={body_Text}
                            fontWeight="semibold"
                            mt="10px"
                            onClick={() => setShowshowCrech(!showCrech)}
                            cursor="pointer"
                        >
                            Crèche/Nursery
                        </Box>
                        <Collapse startingHeight={20} in={showCrech}  >
                            {
                                data.map(item => <Box key={item.id} mt={magin_Top} fontSize={body_Text} >
                                    <Icon as={item.icon} mr="5px" />
                                    {item.title}
                                </Box>)
                            }
                        </Collapse>
                        <Box
                            fontSize={body_Text}
                            fontWeight="semibold"
                            onClick={() => setShowKind(!showKind)}
                            cursor="pointer"
                            mt="10px"
                        >
                            Kindergarten Education
                        </Box>

                        <Collapse startingHeight={20} in={showKind}  >
                            {
                                data.map(item => <Box key={item.id} mt={magin_Top} fontSize={body_Text} >
                                    <Icon as={item.icon} mr="5px" />
                                    {item.title}
                                </Box>)
                            }
                        </Collapse>
                        <Box
                            fontSize={body_Text}
                            fontWeight="semibold"
                            onClick={() => setShowPrimary(!showPrimary)}
                            cursor="pointer"
                            mt="10px"
                        >
                            Primary and Secondary Education
                        </Box>
                        <Collapse startingHeight={20} in={showPrimary}  >
                            {
                                data.map(item => <Box key={item.id} mt={magin_Top} fontSize={body_Text} >
                                    <Icon as={item.icon} mr="5px" />
                                    {item.title}
                                </Box>)
                            }
                        </Collapse>
                    </Box>
                </Box>
            </Flex>
        </Center>
    )
}
