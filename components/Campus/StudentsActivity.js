import { Image, Box, Center, SimpleGrid } from '@chakra-ui/react';
import { allActivity } from './Activity_Services_Data'
import ActivityItems from './ActivityItems'
import {motion} from "framer-motion"
const MotionBox = motion(Box)
const MotionCenter = motion(Center)

export default function StudentsActivity() {

    let title = {base: "28px",sm: "40px",md: "45px",lg: "50px",xl: "50px",'2xl': "50px"};
    let body_Text = {base: "15px",sm: "20px",md: "20px",lg: "20px",xl: "20px",'2xl': "20px"};
    let container = { sm: "100%", md: "100%", lg: "98%", xl: "80%", "2xl": "80%" };
    let widthBody = { sm: "100%", md: "90%", lg: "90%", xl: "80%", "2xl": "80%" };
    let spacing_Image = {
        base: "40px", //0px
        sm: "10px",  //320px
        md: "10px",  //768px
        lg: "10px",  //960px
        xl: "50px",  //1200px
        '2xl': "30px"  //1536px
    }
     const top = {
        base: "90px", //0px
        sm: "100px",  //320px
        md: "100px",  //768px
        lg: "30px",  //960px
        xl: "30px",  //1200px
        '2xl': "30px"  //1536px
    }

    return (
        <div>
            <Center >
                <Box
                    width={container}
                    mt={top}
                    p="20px"
                >
                     <MotionBox 
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1, duration: 1.5 }}
                     >
                        <Center>
                            <Image src="../vission.png" />
                        </Center>
                    </MotionBox>
                    <Center>
                        <MotionBox
                            textAlign="center"
                            fontSize={title}
                            fontFamily="Sushi Delivery Regular"
                            letterSpacing="3px"
                            color="brand.100"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 1.2 }}
                        >
                            Student activities/ Involvement
                        </MotionBox>
                    </Center>
                    <Center>
                        <Box w={widthBody} mt='20px' color="brand.100" fontSize={body_Text} textAlign="justify">
                            &emsp; &emsp; Students experience real-life examples through field trips, events, 
                            and different activities offered both within the school and outside. 
                            They could furnish their friendship and create new relationships through 
                            different merging activities on trips and events.
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
                                2,  //320px
                                2,  //768px
                                3,  //960px
                                3,  //1200px
                                3  //1536px
                            ]}
                            spacing={spacing_Image}
                            mt="50px"
                        >
                            {
                                allActivity.map(info => <ActivityItems
                                    key={info.id}
                                    id={info.id}
                                    name={info.name}
                                    des={info.des}
                                    src={info.src}
                                />)
                            }
                        </SimpleGrid>
                    </MotionCenter>
                </Box>
            </Center>
        </div>
    )
}
