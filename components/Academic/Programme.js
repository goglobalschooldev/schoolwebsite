import Head from 'next/head'
import { Box, Center, SimpleGrid, Image } from "@chakra-ui/react";
import ProgrammeItems from './ProgrammeItems';
import { motion } from "framer-motion"

const MotionBox = motion(Box)
const MotionCenter = motion(Center)

export default function Programme({ name, des, subProgramme, id }) {
    const top = { base: "90px", sm: "100px", md: "100px", lg: "30px", xl: "30px", '2xl': "30px" }
    let container = { base: "90%", sm: "100%", md: "100%", lg: "90%", xl: "80%", "2xl": "80%" };
    let widthBody = { sm: "70%", md: "78%", lg: "90%", xl: "90%", "2xl": "80%" };
    let title = { base: "28px", sm: "40px", md: "45px", lg: "50px", xl: "50px", '2xl': "50px" };
    let body_Text = { sm: "100%", md: "16px", lg: "18px", xl: "20px", "2xl": "20px" };
    let spacing_Image = {
        base: "40px", //0px
        sm: "5px",  //320px
        md: "20px",  //768px
        lg: "30px",  //960px
        xl: "30px",  //1200px
        '2xl': "30px"  //1536px
    }

    return (
        <Center>
            <Box
                mt={top}
                width={container}
                p="10px"
            >
                <Center>
                    <MotionBox
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1, duration: 1.5 }}
                    >
                        <Image src="../vission.png" />
                    </MotionBox>
                </Center>
                <Center>
                    <MotionBox
                        fontSize={title}
                        textAlign="center"
                        fontFamily="Sushi Delivery Regular"
                        letterSpacing="3px"
                        color="brand.100"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1.2 }}
                    >
                        {name}
                    </MotionBox>
                </Center>
                <Center>
                    <Box
                        w={widthBody}
                        align="justify"
                        mt="10px"
                        color="brand.100"
                        fontSize={body_Text}>
                        {des}
                    </Box>
                </Center>
                <MotionCenter
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1 }}
                >
                    <SimpleGrid
                        columns={[
                            1, //0px
                            1,  //320px
                            2,  //768px
                            3,  //960px
                            3,  //1200px
                            3  //1536px
                        ]}
                        spacing={spacing_Image}
                        mt="30px"
                    >
                        {
                            subProgramme.map(info => <ProgrammeItems
                                key={info.id}
                                date={info.date}
                                name={info.name}
                                des={info.des}
                                src={info.src}
                                proId={id}
                                subProId={info.id}
                            />)
                        }
                    </SimpleGrid>
                </MotionCenter>
            </Box>
        </Center>
    )
}
