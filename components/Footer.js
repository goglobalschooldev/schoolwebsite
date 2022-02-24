import React from 'react'
import { SimpleGrid, Center, Flex, Box, List, ListItem,ListIcon } from "@chakra-ui/react"
import FooterItems from './FooterItems'
import { IoLogoFacebook, IoLogoInstagram, IoLogoYoutube } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
    const menu = [
        {
            id: 1,
            munu: "Admission",
            subMenu: [
                {
                    id: 1,
                    menu: "Enrolment",
                    link: '/enrolment'
                },
                {
                    id: 2,
                    menu: "School Fees",
                    link: '/school-fees'
                },
            ]
        },
        {
            id: 2,
            munu: "Academic",
            subMenu: [
                {
                    id: 1,
                    menu: "Khmer Programme",
                    link: '/khmer-programme'
                },
                {
                    id: 2,
                    menu: "Foreign Languange Programme",
                    link: '/foreign-languange-programme'
                },
                {
                    id: 3,
                    menu: "General Programme",
                    link: '/general-programme'
                },
                {
                    id: 4,
                    menu: "Academic Calendar",
                    link: '/academic-calendar'
                }
            ]
        },
        {
            id: 3,
            munu: "More About US",
            subMenu: [
                {
                    id: 1,
                    menu: "Who we are?",
                    link: '/about_us#WhoWeAre'
                },
                {
                    id: 2,
                    menu: "Contact US",
                    link: '/contact-us'
                },
                {
                    id: 3,
                    menu: "Join US",
                    link: '/join-us'
                }
            ]
        }
    ]
    const Title = {  base: "20px", sm: "28px",md: "32px",lg: "32px",xl: "32px",'2xl': "32px"};
    return (
        <Center
            width="100%"
            bg="brand.100"
            mt='80px'
        >
            <Box p="10px" 
               >
                <Flex>
                    <SimpleGrid
                        columns={[2, null, 3]}
                        spacing={{ bass: "40px", sm: "5px", md: "10px", lg: "30px", xl: "30px", "2xl": "30px" }}
                        mt="30px"
                    >
                        {
                            menu.map(m => <FooterItems key={m.id} id={m.id} menu={m.munu} subMenu={m.subMenu} />
                            )
                        }
                    </SimpleGrid>
                </Flex>
                <Box
                    fontSize="25px"
                    fontFamily="Sushi Delivery Regular"
                    letterSpacing="2px"
                    textAlign="center"
                    color="white"
                    mt="30px"
                >
                    Find us on social media
                </Box>
                <Center>
                    <List>
                        <ListItem>
                            <a target='_blank' href="https://www.facebook.com/goglobalschool15" rel="noopener noreferrer" >
                                <ListIcon color="white" fontSize="20px" as={IoLogoFacebook} w="24px" h="24px"/>
                            </a>
                            <a target='_blank' href="https://www.instagram.com/goglobalschool/" rel="noopener noreferrer" >
                                <ListIcon color="white" ml="5px" fontSize="20px" as={IoLogoInstagram} w="24px" h="24px"/>
                            </a>
                            <a target='_blank' href="https://www.youtube.com/channel/UCZgj2YSaSfRtrmLNe9s126w" rel="noopener noreferrer">
                                <ListIcon color="white" ml="5px" fontSize="20px" as={IoLogoYoutube} w="24px" h="24px"/>
                            </a>
                            <a target='_blank' href="https://t.me/joinchat/2M669ivHk5JhZTE1" rel="noopener noreferrer">
                                <ListIcon color="white" ml="5px" fontSize="20px" as={FaTelegramPlane} w="24px" h="24px"/>
                            </a>
                        </ListItem>
                    </List>
                </Center>
                <Box
                    textAlign="center"
                    color="white"
                    mt="30px"
                    mb="30px"
                    letterSpacing="2px"
                >
                    © 2021 Go Global School
                </Box>
            </Box>
        </Center>
    )
}


      
 