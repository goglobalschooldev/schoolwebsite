import { Center, Flex, Spacer, Box, Menu, MenuButton, Text, MenuList, } from "@chakra-ui/react";
import Link from 'next/link';
import { useRouter } from 'next/router'
import { Image } from "@chakra-ui/react";
import { ChevronDownIcon } from '@chakra-ui/icons'
import { compus, academic, admission } from './SubMenuData'
import SubMenu from "./SubMenu";
import SubAcademicMenu from './SubAcademicMenu'

const Menuq = () => {
 
    const marginRight = ["0px", "0px", "20px", "20px", "40px"];
    const font = ["0px", "0px", "20px", "20px", "20px"];
    const router = useRouter();

    return (
        <Center p="10px">
            <Flex
                width={{ sm: "100%", md: "100%", lg: "98%", xl: "85%" }}
                position="relative"
                zIndex="2"
            >
                <Box
                    width={{ sm: "100%", md: "25%", lg: "30%", xl: "30%" }}
                >
                    <Link href="/">
                        <a>
                            <Image
                                alt="Segun Adebayo"
                                src="../Go_global_school.png"
                            />
                        </a>
                    </Link>
                </Box>
                <Spacer />
                <Flex fontSize={font} mt="20px">
                <Link href="/">
                    <Box
                        cursor="pointer"
                        mr={marginRight}
                        color="brand.100"
                        borderBottom={router.pathname === '/' ? "2px" : ""}
                        h="40px"
                    >
                        <a>
                            Home
                        </a>
                    </Box>
                    </Link>
                    <Link href="/about_us">
                    <Box 
                        cursor="pointer"
                        mr={marginRight}
                        color="brand.100"
                        borderBottom={router.pathname === '/about_us' ? "2px" : ""}
                        h="40px"
                    >
                        <a className="testAct">
                             About US
                        </a>
                    </Box>
                    </Link>
                    <Menu isLazy>
                        <MenuButton
                            as={Text}
                            mr={marginRight}
                            cursor="pointer"
                            color="brand.100"
                            borderBottom={router.pathname === '/enrolment' ? "2px" : ""}
                            h="40px"
                        >
                            Admission
                            <ChevronDownIcon mr="-10px" />
                        </MenuButton>
                        <MenuList
                            mt="-15px"
                            position="absolute"
                            zIndex="2"
                            color="brand.100"
                        >
                            {
                                admission.map(item => <SubMenu key={item.id} item={item.item} link={item.link} />)
                            }
                        </MenuList>
                    </Menu>
                    <Menu isLazy >
                        <MenuButton
                            as={Text}
                            mr={marginRight}
                            cursor="pointer"
                            color="brand.100"
                            borderBottom={router.pathname === '/programme/[programme]' || router.pathname === '/programme/academicCalendar' ? "2px" : ""}
                            h="40px"
                        >
                            Academic
                            <ChevronDownIcon mr="-10px" />
                        </MenuButton>
                        <MenuList
                            mt="-15px"
                            position="absolute"
                            zIndex="2"
                            color="brand.100"
                        >
                            {
                                academic.map(item => <SubAcademicMenu key={item.id} item={item.item} link={item.link} />)
                            }
                        </MenuList>
                    </Menu>
                    <Menu isLazy >
                        <MenuButton
                            as={Text}
                            mr={marginRight}
                            cursor="pointer"
                            borderBottom={router.pathname === '/students-service' || router.pathname === '/student-activity-involvement' ? "2px" : ""}
                            h="40px"
                            color="brand.100"
                        >
                            Campus
                            <ChevronDownIcon mr="-10px" />
                        </MenuButton>
                        <MenuList
                            mt="-15px"
                            position="absolute"
                            zIndex="2"
                            color="brand.100"
                        >
                            {
                                compus.map(item => <SubMenu key={item.id} item={item.item} link={item.link} />)
                            }
                        </MenuList>
                    </Menu>
                    <Flex
                        color="brand.100"
                        borderBottom={router.pathname === '/tech-dev' ? "2px" : ""}
                        h="40px"
                    >
                        <Link href="/tech-dev">
                            <Box cursor="pointer">
                                <a>
                                    Tech Dev
                                </a>
                            </Box>
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
        </Center>
    );
}

export default Menuq;