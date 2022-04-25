import { Center, Flex, Spacer, Box, Menu, MenuButton, Text, MenuList, useToast, Icon, Tooltip } from "@chakra-ui/react";
import Link from 'next/link';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLogoFacebook, IoLogoInstagram, IoLogoYoutube } from "react-icons/io5";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { staff, galery } from './SubMenuData';
import SubStaffMenu from "./SubStaffMenu";
import GalerySubMenu from './GalerySubMenu'
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useRouter } from "next/router";

const Header = () => {
    const toast = useToast();
    const router = useRouter();
    const path = router.pathname;

    return (
        <Center color="white" h="43px" p="5px" fontSize="14px" bg="brand.100">
            <Flex width={{ sm: "100%", md: "100%", lg: "98%", xl: "85%", '2xl': '85%' }} >
                <Box >
                    <CopyToClipboard text="+855 78 900 998"
                        onCopy={() =>
                            toast({
                                title: `Copied to clipboard!`,
                                status: "success",
                                isClosable: true,
                            })
                        }
                    >
                        <button>
                            <Icon mb={1} mr={2} as={FaPhoneAlt} />
                            <Tooltip label="Copy This Number" hasArrow arrowSize={15}>
                                +855 78 900 998
                            </Tooltip>
                        </button>
                    </CopyToClipboard>
                    <CopyToClipboard text="info@go-globalschool.com"
                        onCopy={() =>
                            toast({
                                title: `Copied to clipboard!`,
                                status: "success",
                                isClosable: true,
                            })
                        }
                    >
                        <button>
                            <Icon ml={5} mr={1} mb={1} fontSize="20px" as={IoMdMail} />
                            <Tooltip label="Copy This Number" hasArrow arrowSize={15}>
                                info@go-globalschool.com
                            </Tooltip>
                        </button>
                    </CopyToClipboard>
                    <a target='_blank' href="https://www.facebook.com/goglobalschool15">
                        <Icon ml="10px" fontSize="20px" as={IoLogoFacebook} />
                    </a>
                    <a target='_blank' href="https://www.instagram.com/goglobalschool/">
                        <Icon ml="3px" fontSize="20px" as={IoLogoInstagram} />
                    </a>
                    <a target='_blank' href="https://www.youtube.com/channel/UCZgj2YSaSfRtrmLNe9s126w">
                        <Icon ml="3px" fontSize="20px" as={IoLogoYoutube} />
                    </a>

                </Box>
                <Spacer />
                <Flex >
                    <Menu isLazy  >
                        <MenuButton
                            as={Text}
                            cursor="pointer"
                            borderBottom={path === '/gallery/[gallery]' ? "2px" : ""}
                        >
                            Gallery
                            <ChevronDownIcon mr="-10px" />
                        </MenuButton>
                        <MenuList
                            position="absolute"
                            zIndex="3"
                            color='brand.100'
                        >
                            {
                                galery.map(item => <GalerySubMenu key={item.id} item={item.item} link={item.link} />)
                            }
                        </MenuList>
                    </Menu>
                    <Box ml={3} mr={3}>|</Box>

                    <Link href="/news" >
                        <Box borderBottom={path === '/news' ? "2px" : ""} cursor="pointer">
                            <a>
                                News
                            </a>
                        </Box>
                    </Link>
                    <Box ml={3} mr={3} >|</Box>
                    <Menu isLazy  >
                        <MenuButton
                            as={Text}
                            cursor="pointer"
                            borderBottom={path === '/faculity-staff/[faculitystaff]' || path === "/faculity-staff/our-teachers" ? "2px" : ""}
                        >
                            Faculty/Staff
                            <ChevronDownIcon mr="-10px" />
                        </MenuButton>
                        <MenuList
                            position="absolute"
                            zIndex="3"
                            color='brand.100'
                        >
                            {
                                staff.map(item => <SubStaffMenu key={item.id} item={item.item} link={item.link} />)
                            }
                        </MenuList>
                    </Menu>
                    <Box ml={3} mr={3}>|</Box>
                    <Link href="/contact-us">
                        <Box
                            borderBottom={path === '/contact-us' ? "2px" : ""}
                            cursor="pointer"
                        >
                            <a>
                                Contact US
                            </a>
                        </Box>
                    </Link>
                    <Box ml={3} mr={3}>|</Box>
                    <Link href="/join-us">
                        <Box
                            borderBottom={path === '/join-us' || path === '/join-us/[jobslug]' ? "2px" : ""}
                            cursor="pointer"
                        >
                            <a>
                                JOIN US
                            </a>
                        </Box>
                    </Link>
                </Flex>
            </Flex>
        </Center>
    );
}

export default Header;