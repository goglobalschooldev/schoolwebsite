import { Center, Image, Flex, Box, Icon, } from "@chakra-ui/react";
import { useEffect } from 'react';
import { CgEditBlackPoint, CgFileDocument } from "react-icons/cg";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineIdcard } from "react-icons/ai";

export default function FLP_Enrolment() {
    const data = [
        {
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
        }

    ]
    const title = {base: "20px",sm: "28px",md: "28px",lg: "28px",xl: "28px",'2xl': "28px"};
    let container = {base: "90%",sm: "100%",md: "100%",lg: "90%",xl: "70%",'2xl': "80%"};
    const body_Text = {base: "15px",sm: "20px",md: "20px",lg: "20px",xl: "20px",'2xl': "20px"}
    const display = {
        base: "block", //0px
        sm: "block",  //320px
        md: "flex",  //768px
        lg: "flex",  //960px
        xl: "flex",  //1200px
        '2xl': "flex"  //1536px}
        };

    return (
        <Center >
            <Flex
                width={container}
                p="10px"
                display={display}
            >
                <Box 
                    width={{ sm: "100%", md: "50%", lg: "50%", xl: "50%", "2xl": "50%" }} p="50px">
                    <Image src="FLP_Enrollment.png"/>
                </Box>
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
                        <a id='FLP'>Foreign Language Programme</a>
                    </Box>
                    <Box
                        mt="20px"
                        fontSize={body_Text}
                    >
                        To enrol in Foreign Language Programme, students are required
                        to take the Placement Test (unless they have never been to school
                        before, especially for Preschoolers). Required Document to enrol
                        in the Academic Year (must pass the Placement Test First):
                        {
                            data.map(item => <Box key={item.id} mt="20px " fontSize={body_Text}>
                                <Icon as={item.icon} mr="5px" />
                                {item.title}
                            </Box>)
                        }
                    </Box>
                </Box>

            </Flex>
        </Center>
    )

}
