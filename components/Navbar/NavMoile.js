import { Box, Flex, Spacer, Image, Center, Icon, Divider, Collapse, Text } from '@chakra-ui/react'
import Link from 'next/link'
import React, { useState } from 'react'
import { HiViewList } from "react-icons/hi"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,

} from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons';

export default function NavMoile() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [subMen, setsubMen] = useState(false)
    const [gallery, setGallery] = useState(false)
    const [admission, setAdmission] = useState(false)
    const [academic, setAcademic] = useState(false)
    const [campus, setCampus] = useState(false)
    const btnRef = React.useRef()

    return (
        <Center
            display={{ base: "flex", sm: "flex", md: "flex", lg: "none", xl: "none", '2xl': "none" }}
        >
            <Flex
                pt="20px"
                width="100%"
                position="absolute"
                top="0"
                zIndex="2"
            >
                <Link href="/">
                    <Box
                        width={{ base: "150px", sm: "180px", md: "180px", lg: "50%", xl: "50%", '2xl': "70%" }}
                        ml="13px"
                    >
                        <a>
                            <Image
                                alt="Segun Adebayo"
                                src="../Go_global_school.png"
                            />
                        </a>
                    </Box>
                </Link>
                <Spacer />
                <Box
                    onClick={onOpen}
                    cursor='pointer'
                    mr="20px"
                >
                    <Icon
                        fontSize="30px"
                        color='brand.100'
                        as={HiViewList}
                    />
                </Box>
            </Flex>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent
                    color="brand.100"
                >
                    <DrawerCloseButton color="brand.100" mt="5px" />
                    <Divider mt="55px" />
                    <DrawerBody>
                        <Link href="/">
                            <Box
                                fontSize="18px"
                                fontWeight="semibold"
                                p="8px 0px 8px 8px"
                                onClick={onClose}
                            >
                                <a>Home</a>
                            </Box>
                        </Link>
                        <Link href="/about_us">
                            <Box
                                fontWeight="semibold"
                                fontSize="18px"
                                p="8px 0px 8px 8px"
                                onClick={onClose}
                            >
                                <a>About US</a>
                            </Box>
                        </Link>
                        <Box
                            fontWeight="semibold"
                            cursor='pointer'
                            onClick={
                                () => setAdmission(!admission)
                            }
                            fontSize="18px"
                            p="8px 0px 8px 8px"
                        >
                            Admission
                            <ChevronDownIcon mr="-10px" />
                        </Box>
                        <Collapse in={admission}>
                            <Box
                                fontSize="17px"
                                p="0px 0px 10px 20px"
                                onClick={onClose}
                            >
                                <Link href="/enrolment">
                                    <Box>
                                        Enrolment
                                    </Box>
                                </Link>
                                <br />
                                <Link href="/school-fees">
                                    <Box mt={-5}>
                                        School Fees
                                    </Box>
                                </Link>
                            </Box>
                            <Divider ml="10px" mt="5px" zIndex="3" />
                        </Collapse>
                        <Box
                            fontWeight="semibold"
                            cursor='pointer'
                            onClick={
                                () => setAcademic(!academic)
                            }
                            fontSize="18px"
                            p="8px 0px 8px 8px"
                        >
                            Academic
                            <ChevronDownIcon mr="-10px" />
                        </Box>
                        <Collapse in={academic}>
                            <Box
                                fontSize="17px"
                                p="0px 0px 10px 20px"
                                onClick={onClose}
                            >
                                <Link href="/khmer-programme">
                                    <Box>
                                        <a>
                                            Khmer Programme
                                        </a>
                                    </Box>
                                </Link>
                                <br />
                                <Link href="/foreign-languange-programme">
                                    <Box mt={-5}>
                                        <a>
                                            Foreign Language Programme
                                        </a>
                                    </Box>
                                </Link>
                                <br />
                                <Link href="/general-programme">
                                    <Box mt={-5}>
                                        <a>
                                            General Programme
                                        </a>
                                    </Box>
                                </Link>
                                <br />
                                <Link href="/academic-calendar">
                                    <Box mt={-5}>
                                        <a>
                                            Academic Calendar
                                        </a>
                                    </Box>
                                </Link>

                            </Box>
                            <Divider ml="10px" zIndex="3" />
                        </Collapse>
                        <Box
                            fontWeight="semibold"
                            cursor='pointer'
                            onClick={
                                () => setCampus(!campus)
                            }
                            fontSize="18px"
                            p="8px 0px 8px 8px"
                        >
                            Campus
                            <ChevronDownIcon mr="-10px" />
                        </Box>
                        <Collapse in={campus}>
                            <Box
                                fontSize="17px"
                                p="0px 0px 10px 20px"
                                onClick={onClose}
                            >
                                <Link href="/students-service">
                                    <Box>
                                        <a>
                                            Students Service
                                        </a>
                                    </Box>
                                </Link>
                                <br />
                                <Link href="/student-activity-involvement">
                                    <Box mt={-5}>
                                        Student Activity/Involvement
                                    </Box>
                                </Link>
                            </Box>
                            <Divider ml="10px" mt="5px" zIndex="3" />
                        </Collapse>
                        <Link href="/tech-dev">
                            <Box
                                fontWeight="semibold"
                                fontSize="18px"
                                p="8px 0px 8px 8px"
                                onClick={onClose}
                            >
                                <a>Tech Dev</a>
                            </Box>
                        </Link>
                        <Box
                            fontWeight="semibold"
                            cursor='pointer'
                            onClick={
                                () => setGallery(!gallery)
                            }
                            fontSize="18px"
                            p="8px 0px 8px 8px"
                        >
                            Gallery
                            <ChevronDownIcon mr="-10px" />
                        </Box>
                        <Collapse in={gallery}>
                            <Box
                                fontSize="17px"
                                p="0px 0px 10px 20px"
                                onClick={onClose}
                            >
                                <Link href="/gallery/academic_year_2020-2021">
                                    <Box>
                                        Academic Year 2020-2021
                                    </Box>
                                </Link>
                                <Link href="/gallery/academic_year_2021-2022">
                                    <Box mt={1}>
                                        Academic Year 2021-2022
                                    </Box>
                                </Link>
                            </Box>
                            <Divider ml="10px" mt="5px" zIndex="3" />
                        </Collapse>
                        <Box
                            fontWeight="semibold"
                            fontSize="18px"
                            p="8px 0px 8px 8px"
                            onClick={onClose}
                        >
                            <Link href="/news">
                                <Box>
                                    <a>News</a>
                                </Box>
                            </Link>
                        </Box>
                        <Box
                            fontWeight="semibold"
                            cursor='pointer'
                            onClick={
                                () => setsubMen(!subMen)
                            }
                            fontSize="18px"
                            p="8px 0px 8px 8px"
                        >
                            Faculty/Staff
                            <ChevronDownIcon mr="-10px" />
                        </Box>
                        <Collapse in={subMen}>
                            <Box
                                fontSize="17px"
                                p="0px 0px 10px 20px"
                                onClick={onClose}
                            >
                                <Link href="/faculity-staff/board_of_directors">
                                    <Box>
                                        <a>
                                            Board of Director
                                        </a>
                                    </Box>
                                </Link>
                                <br />
                                <Link href="/faculity-staff/principal">
                                    <Box mt={-5}>
                                        <a>
                                            Principal
                                        </a>
                                    </Box>
                                </Link>
                                <br />
                                <Link href="/faculity-staff/academic_affairs">
                                    <Box mt={-5}>
                                        <a>
                                            Academic Affair
                                        </a>
                                    </Box>
                                </Link>
                                <br />
                                <Link href="/faculity-staff/administrative-and-financial-affairs">
                                    <Box mt={-5}>
                                        <a>
                                            Administrative and Financial Affair
                                        </a>
                                    </Box>
                                </Link>
                                <br />
                                <Link href="/faculity-staff/our-teachers">
                                    <Box mt={-5}>
                                        <a>
                                            Our Teacher
                                        </a>
                                    </Box>
                                </Link>
                            </Box>
                            <Divider ml="10px" mt="5px" zIndex="3" />
                        </Collapse>
                        <Link href="/contact-us">
                            <Box
                                fontWeight="semibold"
                                fontSize="18px"
                                p="8px 0px 8px 8px"
                                onClick={onClose}
                            >
                                <a>Contact US</a>
                            </Box>
                        </Link>
                        <Link href="/join-us">
                            <Box
                                fontWeight="semibold"
                                fontSize="18px"
                                p="8px 0px 8px 8px"
                                onClick={onClose}
                            >
                                <a>Join US</a>
                            </Box>
                        </Link>
                    </DrawerBody>
                    <DrawerFooter textAlign="left" >
                        <Center>© 2021 Go Global School</Center>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </Center >
    )
}
