import { Box, Center, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next';
// import i18next from 'i18next';

const MotionBox = motion(Box)

export default function FeesItems({ name, shift, morning, evening, discountAsPer, fullPrice, duration, discountAsDoll, adminFee }) {

    const subTitle = { base: "20px", sm: "25px", md: "25px", lg: "15px", xl: "25px", '2xl': "25px" }
    const checkHeigh = () => {
        var Heigh = 470;
        if ((discountAsPer == 0) && (discountAsDoll == 0)) {
            Heigh = 310;
        } else {
            Heigh = 470;
        }
        return Heigh;
    }
    const { t } = useTranslation()
    const bodyTextSize = {
        base: "15px", //0px
        sm: "15px",  //315px
        md: "15px",  //768px
        lg: "15px",  //960px
        xl: "15px",  //1150px
        '2xl': "15px"  //1536px
    }


    return (
        <MotionBox
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            w={{
                base: "180px", //0px
                sm: "220px",  //320px
                md: "190px",  //768px
                lg: "240px",  //960px
                xl: "240px",  //1200px
                '2xl': "250px"  //1536px
            }}
            bg="white"
            textAlign="center"
            border="1px"
            borderColor="#f962a7"
            h={checkHeigh()}
            pt="20px"
            color='brand.100'
            borderRadius="10px"
        >
            <Box
                fontSize={subTitle}
                className='title'
                // fontFamily="Sushi Delivery Regular"
                fontFamily={t("bayonfont")}
                color="#ED2777"
            >
                {
                    t(name.toString())
                }
            </Box>
            <Box
                fontSize="14px"
                mt="5px"
                fontFamily={t('font').toString()}
            >
                {
                    t(shift.toString())
                }
            </Box>
            <Box
                fontSize="14px"
                h="60px"
            >
                <Box >
                    {morning}
                </Box>
                <Box
                    mt="-5px"
                >
                    {
                        evening === `` ? `` : `or`
                    }
                </Box>
                <Box
                    mt="-5px"
                >
                    {evening}
                </Box>
            </Box>
            <Center>
                {(discountAsPer == 0) && (discountAsDoll == 0) ? " " :
                    <Box
                        mt="20px"
                        bg="blue.300"
                        color="white"
                        fontFamily="Bayon"
                        w="60%"
                        borderRadius="5px"
                    >
                        {
                            t('Discount')
                        }
                    </Box>}
            </Center>
            <Box
                fontSize="50px"
                fontWeight="samibold"
                className='title'
            >
                {(discountAsPer == 0) && (discountAsDoll == 0) ? " " : (discountAsPer == 0 ? "$" + discountAsDoll : discountAsPer + "%")}
            </Box>
            <Box
                mt="20px"
                fontWeight="semibold"
                fontFamily={t('font')}
            >
                {
                    duration === 1 ? duration + " " + t('month') : duration + " " + t('months')
                }
            </Box>
            <Box>
                <Box
                    textDecoration="line-through"
                    fontSize="30px"
                >
                    <Center>
                        <Box
                            mt="-5px"
                            fontSize="35px"
                        >
                            <Flex>
                                <Text >{(discountAsPer == 0) && (discountAsDoll == 0) ? " " : "$"}</Text>
                                <Text>{(discountAsPer == 0) && (discountAsDoll == 0) ? " " : fullPrice}</Text>
                            </Flex>
                        </Box>
                    </Center>
                </Box>
                <Center>
                    <Box
                        mt="-5px"
                        fontSize="35px"
                    >
                        <Flex>
                            <Text>$</Text>
                            <Text> {discountAsDoll == 0 ? Math.ceil((100 - discountAsPer) / (100) * fullPrice) : fullPrice - discountAsDoll}</Text>
                        </Flex>
                    </Box>
                </Center>
                <Center>
                    <Box
                        mt="10px"
                        fontSize={bodyTextSize}
                        fontFamily={t('font')}
                    >
                        <Text  >{t('admin_fee')}</Text>
                        <Text> {adminFee === 0 ? t('free') : "$" + adminFee + "/" + t('Year')}</Text>
                    </Box>
                </Center>

            </Box>
        </MotionBox>
    )
}
