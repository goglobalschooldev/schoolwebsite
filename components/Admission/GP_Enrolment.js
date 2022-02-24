import { Center, Image, Flex, Box, Icon, } from "@chakra-ui/react";
import { CgEditBlackPoint, CgFileDocument } from "react-icons/cg";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineIdcard } from "react-icons/ai";


export default function GP_Enrolment() {
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

 
    const title = {
        base: "20px", //0px
        sm: "28px",  //320px
        md: "28px",  //768px
        lg: "28px",  //960px
        xl: "28px",  //1200px
        '2xl': "28px"  //1536px
    };
    let container = {
        base: "90%", //0px
        sm: "100%",  //320px
        md: "100%",  //768px
        lg: "90%",  //960px
        xl: "70%",  //1200px
        '2xl': "80%"  //1536px
    };
    const body_Text = {
        base: "15px", //0px
        sm: "20px",  //320px
        md: "20px",  //768px
        lg: "20px",  //960px
        xl: "20px",  //1200px
        '2xl': "20px"  //1536px
    }
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
                // mt="120px"
                display={display}
            >
                <Box width={{ sm: "100%", md: "50%", lg: "50%", xl: "50%", "2xl": "50%" }} p="50px">
                    <Image src="GP_Enrollment.png"/>
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
                        //mt={{ sm: "0%", md: "90px", lg: "80px", xl: "80px", "2xl": "120px" }}
                    >
                        General Programme
                    </Box>
                    <Box
                        mt="20px"
                        fontSize={body_Text}
                    >
                        General English Programme will need to take the Placement Test (all levels).
                        Computer programme will need to take the test unless it is their first time.
                        Arts (Music and Dance) will need to take the test unless it is their first time.
                        Required Document for Enrolment:
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
