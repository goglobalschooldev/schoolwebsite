import { Center, Image, SimpleGrid, Box } from "@chakra-ui/react"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import OurTeacherItems from "./OurTeacherItems";
import {motion} from 'framer-motion'

const MotionBox = motion(Box)
const MotionCenter = motion(Center)
// https://www.npmjs.com/package/react-responsive-carousel
// https://www.npmjs.com/package/slick-carousel

const OurTeacher = ({ teachers }) => {
    let container = {base: "90%",sm: "100%",md: "100%",lg: "100%",xl: "90%",'2xl': "80%"};
    let widthBody = { sm: "100%", md: "70%", lg: "70%", xl: "70%", "2xl": "70%" };
    const titleSize = {base: "25px",sm: "30px",md: "30px",lg: "20px",xl: "32px",'2xl': "32px"};
    const bodyTextSize = {
        base: "15px", //0px
        sm: "20px",  //320px
        md: "20px",  //768px
        lg: "20px",  //960px
        xl: "20px",  //1200px
        '2xl': "20px"  //1536px
    }
    const marginTop = { base:"30px", sm:"30px",md:"30px",lg:"70px",'2xl':"70px"}
    const lastTeacher = teachers.slice(0, 3);

    return (
        <Center >
            <Box
                width={container}
                mt={marginTop}
                p="10px"
            >
                <Box>
                    <MotionCenter
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration:1.5 }}
                    >
                        <Image w="70px" src="../icon_top.png" />
                    </MotionCenter>
                </Box>
                <Center>
                    <MotionBox
                        fontSize={titleSize}
                        letterSpacing="3px"
                        fontFamily="Sushi Delivery Regular"
                        color="brand.100"
                        initial={{ x: -100, opacity:0}}
                        animate={{ x: 0, opacity:1 }}
                        transition={{ delay: 0.3, duration:1.5 }}
                    >
                        Our Teacher
                    </MotionBox>
                </Center>
                <Center>
                    <Box
                        w={widthBody}
                        align="justify"
                        mt='5px'
                        p='10px'
                        color="brand.100"
                        fontSize={bodyTextSize}
                    >
                        &emsp; &emsp; Go Global School has quality and moral teachers who are responsible 
                        and helpful in ensuring students' knowledge and education.
                    </Box>
                </Center>
                <Center >
                    <SimpleGrid
                        columns={[
                            1, //0px
                            2,  //320px
                            3,  //768px
                            3,  //960px
                            3,  //1200px
                            3  //1536px
                        ]}
                        spacing={{
                            base: "40px", //0px
                            sm: "10px",  //320px
                            md: "10px",  //768px
                            lg: "10px",  //960px
                            xl: "10px",  //1200px
                            '2xl': "30px"  //1536px
                        }}
                        mt="30px"
                        data-aos="slide-up"
                    >
                        {
                            lastTeacher.map(info => <OurTeacherItems
                                key={info.sys.id}
                                teacher={info}
                            />)
                        }
                    </SimpleGrid>
                </Center>
            </Box>
        </Center >
    );
}

export default OurTeacher;