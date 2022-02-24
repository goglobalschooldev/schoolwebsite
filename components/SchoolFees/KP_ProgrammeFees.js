import React from 'react'
import { Center, Image, Box, Button, Collapse, useDisclosure, Flex } from "@chakra-ui/react";
import { KPfees } from './fees'
import FeesCard from './FeesCard';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const MotionBox = motion(Box);
const MotionCenter = motion(Center)

export default function KP_ProgrammeFees() {

    const { t } = useTranslation();

    const titleSize = { base: "28px", sm: "40px", md: "45px", lg: "50px", xl: "50px", '2xl': "50px" }
    const subTitle = { base: "20px", sm: "22px", md: "27px", lg: "30px", xl: "30px", '2xl': "30px" }
    const bodyTextSize = { base: "15px", sm: "20px", md: "20px", lg: "20px", xl: "20px", '2xl': "20px" }
    let container = { sm: "100%", md: "100%", lg: "98%", xl: "80%", "2xl": "80%" };
    let widthBody = { sm: "100%", md: "90%", lg: "90%", xl: "80%", "2xl": "80%" };

    const top = {
        base: "90px", //0px
        sm: "100px",  //320px
        md: "100px",  //768px
        lg: "30px",  //960px
        xl: "30px",  //1200px
        '2xl': "30px"  //1536px
    }
    const { isOpen, onToggle } = useDisclosure()


    return (
        <Box
            mt={top}
        >
            <Center >
                <Box
                    width={container}
                    p="10px"
                >
                    <Button onClick={onToggle} mb="20px" >
                        <Image
                            borderRadius='full'
                            boxSize='25px'
                            src={t('src').toString()}
                            alt='Dan Abramov'
                            mr="10px"

                        />
                        <Box fontFamily={t('font')}>
                            {
                                t('ln')
                            }
                        </Box>
                    </Button>
                    <Collapse in={isOpen} animateOpacity>
                        <Box
                            cursor='pointer'
                            ml="20px"
                            bg="white"
                            mt="10px"
                            onClick={() => {
                                i18next.changeLanguage("kh")
                                onToggle()
                            }}
                        >
                            <Flex>
                                <Image
                                    borderRadius='full'
                                    boxSize='25px'
                                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/1200px-Flag_of_Cambodia.svg.png'
                                    alt='Dan Abramov'
                                />
                                <Box ml="10px" fontFamily={'Kantumruy'}>ខ្មែរ</Box>
                            </Flex>

                        </Box>
                        <Box
                            cursor='pointer'
                            ml="20px"
                            bg="white"
                            mt="10px"
                            onClick={() => {
                                i18next.changeLanguage("en")
                                onToggle()
                            }}
                        >
                            <Flex>
                                <Image
                                    borderRadius='full'
                                    boxSize='25px'
                                    src='https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png'
                                    alt='Dan Abramov'
                                />
                                <Box ml="10px">English</Box>
                            </Flex>

                        </Box>
                    </Collapse>
                    <MotionCenter
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1, duration: 1.5 }}
                    >
                        <Image src="../vission.png" />
                    </MotionCenter>
                    <Center>
                        <MotionBox
                            fontSize={titleSize}
                            // fontFamily="Sushi Delivery Regular"
                            letterSpacing="3px"
                            color="#ED2777"
                            textAlign="center"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 1.2 }}
                            fontFamily={"Bayon"}
                        >
                            {
                                t('klp_title')
                            }
                        </MotionBox>
                    </Center>
                    <Center>
                        <Box fontFamily={t('font')} w={widthBody} align="justify" p='10px' mt="10px" color="#ED2777" fontSize={bodyTextSize}>
                            {
                                t('klp_description')
                            }
                        </Box>
                    </Center>
                </Box>
            </Center>
            <Center >
                <Box
                    width={container}
                    p="10px"
                >
                    {
                        KPfees.map(fees =>
                            <Box key={fees.id}>
                                <Center>
                                    <Box
                                        fontSize={subTitle}
                                        fontFamily="Bayon"
                                        letterSpacing="1px"
                                        color="#ED2777"
                                        mt="50px"
                                    >
                                        {
                                            t(fees.subProgramme)
                                        }
                                    </Box>
                                </Center>
                                <Center>
                                    <Link href={fees.link}>
                                        <Button
                                            border="1px"
                                            mt="10px"
                                            mb="20px"
                                            fontWeight="normal"
                                            borderColor="#ED2777"
                                            color="#ED2777"
                                            bg="none"
                                            size="sm" F
                                            h='35px'
                                            fontFamily={t('font')}
                                        >
                                            {
                                                t('programme')
                                            }
                                        </Button>
                                    </Link>
                                </Center>
                                <Center>
                                    <FeesCard gradPrice={fees.grad} />
                                </Center>
                            </Box>
                        )
                    }
                </Box>
            </Center>
        </Box>

    )
}
