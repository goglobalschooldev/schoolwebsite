import React from 'react'
import { Box, Image, Center, SimpleGrid } from "@chakra-ui/react";
import EachTeacher from "./EachTeacher"
import Head from 'next/head';
import { motion } from 'framer-motion';
//import StaffPage from './StaffPage';

export default function OurTeacher({teachers}) {

    const MotionCenter = motion(Center)
    const MotionBox = motion(Box)

    let title = { base: "28px", sm: "32px", md: "32px", lg: "36px", xl: "36px", '2xl': "36px" };
    let body_Text = {base: "15px",sm: "20px",md: "20px",lg: "20px",xl: "20px",'2xl': "20px"};
    let mt_Box = {base: "70px",sm: "70px", md: "50px", lg: "50px", xl: "50px", '2xl': "50px"}
    let width_Box = {base: "90%",sm: "90%", md: "80%", lg: "80%", xl: "80%", '2xl': "80%"}
    let spacing_Image = {
        base: "40px", //0px
        sm: "10px",  //320px
        md: "10px",  //768px
        lg: "10px",  //960px
        xl: "50px",  //1200px
        '2xl': "30px"  //1536px
    }
    console.log(teachers)

    return (
        <div>
            <Center>
            <Box mt={mt_Box} color="brand.100" w={width_Box} >
            <Box>
                <MotionCenter
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1, duration: 1.5 }}
                >
                    <Image src="../vission.png" />
                </MotionCenter>
            </Box>
            <MotionBox
                fontSize={title}
                letterSpacing="3px"
                fontFamily="Sushi Delivery Regular"
                textAlign="center"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 1.2 }}
            >
            Our Team Of Professional
            </MotionBox>
            <Box mt="15px"
                fontSize={body_Text}
                textAlign="center"
            >
            &emsp; &emsp; Go Global School has quality and moral teachers who are responsible 
            and helpful in ensuring students' knowledge and education.
            </Box>
            <Box>
                <SimpleGrid  columns={[
                            1, //0px
                            2,  //320px
                            2,  //768px
                            3,  //960px
                            3,  //1200px
                            3  //1536px
                        ]}
                spacing={spacing_Image}
                mt="50px">{
                teachers.map(teacher => (<EachTeacher key={teacher.sys.id} teach={teacher} />)
                )}
            </SimpleGrid>
            </Box>
        </Box>
</Center></div>
        
    )
}

