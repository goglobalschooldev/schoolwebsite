import {
    Image,
    Flex,
    Box,
    FormControl,
    Input,
    Center,
    Icon,
    Textarea,
    Button,
    useToast,
    Tooltip
} from '@chakra-ui/react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLogoFacebook, IoLogoInstagram, IoLogoYoutube, IoLocation } from "react-icons/io5";
import GoogleMapReact from 'google-map-react';
import { motion } from "framer-motion"
const MotionBox = motion(Box)

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function ContactUs() {
    const toast = useToast();

    const Top = ["0px", "0px", "-60px", "-100px", "-100px"];
    let container = { sm: "100%", md: "100%", lg: "98%", xl: "80%", "2xl": "80%" };
    let title = {  base: "20px", sm: "28px",md: "28px",lg: "28px",xl: "28px",'2xl': "28px"};
    let body_Text = { base: "15px",sm: "20px", md: "20px", lg: "20px", xl: "20px", '2xl': "20px"};
    const display_box = { base: "block", sm: "block", md: "flex", lg: "flex", xl: "flex", '2xl': "flex"};
    const height_box = {base: "1100px",sm: "1200px", md: "600px", lg: "600px", xl: "600px", '2xl': "600px"};
    const margin_btn = { base: "350px", sm: "350px", md: "0px", lg: "0px", xl: "0px", '2xl': "0px" };
    const width_box = { base: "100%", sm: "100%", md: "50%", lg: "50%", xl: "50%", '2xl': "50%" };
    const top = {base:"90px",sm: "100px",md:"100px",lg:"30px",xl:"30px",'2xl': "30px"}
    
    const defaultProps = {
        center: {
            lat: 13.347964962666703,
            lng: 103.84405281311926
        },
        zoom: 17
    };

    return (
        <div>
            <Center>
                <Flex
                    w={container}
                    bg="white"
                    h={height_box}
                    shadow="lg"
                    color="brand.100"
                    display={display_box}
                    mt={top}
                >
                    <Box
                        width={width_box}
                        h="200px"
                        p="20px"
                        mb={margin_btn}
                    >
                        <MotionBox
                            initial={{ x: -100, opacity:0}}
                            animate={{ x: 0, opacity:1 }}
                            transition={{ delay: 1, duration:1.5 }}
                        >
                        <Image w="70px" src="../icon_top.png" />
                        </MotionBox>
                         
                        <MotionBox
                            fontSize={title}
                            letterSpacing="3px"
                            fontFamily="Sushi Delivery Regular"
                            initial={{ x: -100, opacity:0}}
                            animate={{ x: 0, opacity:1 }}
                            transition={{ delay: 0.2, duration:1.2 }}
                        >
                            Leave Us Message!
                        </MotionBox>
                        <MotionBox
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 1.5 }}
                        >
                            <FormControl mt='15px'>
                                <Input type='text' placeholder='Name' />
                            </FormControl>
                            <FormControl mt='15px'>
                                <Input type='email' placeholder='Email' />
                            </FormControl>
                            <FormControl mt='15px'>
                                <Textarea type='text' placeholder='Write your message here!' resize='none' h='300px' />
                            </FormControl>
                            <Button mt='15px' w='100%' bg="brand.100" color="white">Send</Button>
                        </MotionBox>
                    </Box>
                    <Box width={width_box}
                        h="200px"
                        p="20px" 
                        mt='70px'>
                        <MotionBox
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 1.5 }}
                        >
                            <Box>
                                <Icon ml="3px" mr="10px" fontSize="20px" as={IoLocation} />
                                Thmey Village, Svay Dangkum Siem Reap
                            </Box>
                            <Box mt="10px">
                                <CopyToClipboard text="+855 78 900 998"
                                    onCopy={() =>
                                        toast({
                                            title: `Copied to clipboard!`,
                                            status: "success",
                                            isClosable: true,
                                        })
                                    }
                                >
                                    <Box bg='none' cursor='pointer' ml="5px">
                                        <Icon mb={1} mr={2} as={FaPhoneAlt} />
                                        <Tooltip label="Copy This Number" hasArrow arrowSize={15} >
                                            063 50 66 999/017 511 168
                                        </Tooltip>
                                    </Box>
                                </CopyToClipboard>
                            </Box>
                            <Box mt="10px">
                                <Icon ml="3px" mr="10px" fontSize="20px" as={IoMdMail} />
                                info@go-globalschool.com
                            </Box>
                            <Box mt="10px" mb='10px'>
                                Follow Us:
                                <a target='_blank' href="https://www.facebook.com/goglobalschool15">
                                    <Icon ml="10px" fontSize="20px" as={IoLogoFacebook} />
                                </a>
                                <a target='_blank' href="https://www.instagram.com/goglobalschool/">
                                    <Icon ml="5px" fontSize="20px" as={IoLogoInstagram} />
                                </a>
                                <a target='_blank' href="https://www.youtube.com/channel/UCZgj2YSaSfRtrmLNe9s126w">
                                    <Icon ml="5px" fontSize="20px" as={IoLogoYoutube} />
                                </a>
                            </Box>
                        </MotionBox>
                        <MotionBox 
                            width="100%" 
                            h="325px"
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 1.5 }}
                        >
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "AIzaSyCPy78uNk-DG98yYv7bGEWt3SCidRf0dms" }}
                                defaultCenter={defaultProps.center}
                                defaultZoom={defaultProps.zoom}
                            >
                                <AnyReactComponent
                                    lat={13.347996279852236}
                                    lng={103.8440313555189}
                                    text={
                                        <a>
                                            <Icon fontSize="30px" as={IoLocation} />
                                        </a>
                                    }
                                />
                            </GoogleMapReact>
                        </MotionBox>
                    </Box>
                </Flex>
            </Center>
        </div>
    )
}
