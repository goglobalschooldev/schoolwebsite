import React from 'react'
import { Center, Image, Box, Button } from "@chakra-ui/react";
import { FPfees } from './fees'
import FeesCard from './FeesCard';
import { useTranslation } from 'react-i18next';
import Link from 'next/link'

export default function FP_ProgrammeFees() {
    const { t } = useTranslation()
    const titleSize = { base: "28px", sm: "40px", md: "45px", lg: "50px", xl: "50px", '2xl': "50px" };
    const subTitle = { base: "20px", sm: "22px", md: "27px", lg: "30px", xl: "30px", '2xl': "30px" }
    const bodyTextSize = { base: "15px", sm: "20px", md: "20px", lg: "20px", xl: "20px", '2xl': "20px" }
    let container = { sm: "100%", md: "100%", lg: "98%", xl: "80%", "2xl": "80%" };
    let widthBody = { sm: "100%", md: "90%", lg: "90%", xl: "80%", "2xl": "80%" };
    const top = {
        base: "100px", //0px
        sm: "80px",  //320px
        md: "120px",  //768px
        lg: "10px",  //960px
        xl: "0px",  //1200px
        '2xl': "0px"  //1536px
    }
    const marginTop = { base: "0px", sm: "0px", md: "0px", lg: "60px", xl: "60px", "2xl": "60px" };
    return (
        <Box mt={top}>
            <Center >
                <Box
                    width={container}
                    p="10px"
                >
                    <Center>
                        <Box
                            mt={marginTop}
                        // w="50%"
                        >
                            <Image src="../vission.png"
                            />
                        </Box>
                    </Center>
                    <Center>
                        <Box
                            fontSize={titleSize}
                            fontFamily="Bayon"
                            color="#ED2777"
                            textAlign="center"
                        >
                            {
                                t('flp_title')
                            }
                        </Box>
                    </Center>
                    <Center>
                        <Box fontFamily={'Kantumruy'} w={widthBody} align="justify" p='10px' mt="10px" color="#ED2777" fontSize={bodyTextSize}>
                            {
                                t('flp_description')
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
                        FPfees.map(fees =>
                            <Box key={fees.id}>
                                <Center>
                                    <Box
                                        fontSize={subTitle}
                                        color="#ED2777"
                                        fontFamily="Sushi Delivery Regular"
                                        letterSpacing="1px"
                                        mt="50px"
                                    >
                                        {fees.subProgramme}
                                    </Box>
                                </Center>
                                <Center>
                                    <Link href={fees.link}>
                                        <Button
                                            border="1px"
                                            mt="10px"
                                            fontWeight="normal"
                                            borderColor="#ED2777"
                                            color="#ED2777"
                                            bg="none"
                                            size="sm" F
                                            h='35px'
                                            fontFamily={'Kantumruy'}
                                        >
                                            {
                                                t("programme")
                                            }
                                        </Button>
                                    </Link>
                                </Center>
                                <Center
                                    mt="10px"
                                >
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
