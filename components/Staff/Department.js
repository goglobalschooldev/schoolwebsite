import React from 'react'
import { Center, Flex, Spacer, Box, Menu, SimpleGrid, Text, MenuList } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Member from './Member';
import { motion } from 'framer-motion';

export default function Department({ depTitle, allMember }) {
    let title_Size = { base: "28px", sm: "32px", md: "32px", lg: "36px", xl: "36px", '2xl': "36px" };
    let subTitle = { base: "22px", sm: "22px", md: "25px", lg: "25px", xl: "25px", '2xl': "25px" };
    let mt_Box = { base: "80px", sm: "80px", md: "80px", lg: "80px", xl: "80px", '2xl': "80px" }
    let width_Box = { base: "100%", sm: "100%", md: "90%", lg: "80%", xl: "80%", '2xl': "80%" }
    let spacing_threePeople = { base: "30px", sm: "60px", md: "90px", lg: "100px", xl: "200px", '2xl': "300px" }
    let spacing_fourPeople = { base: "30px", sm: "60px", md: "90px", lg: "100px", xl: "150px", '2xl': "150px" }
    let spacing_fivePeople = { base: "20px", sm: "10px", md: "20px", lg: "20px", xl: "40px", '2xl': "30px" }
    let spacing_sixPeople = { base: "20px", sm: "10px", md: "10px", lg: "10px", xl: "50px", '2xl': "30px" }
    let columns_threePeople = { base: 1, sm: 2, md: 2, lg: 2, xl: 2, '2xl': 2 }
    let columns_fourPeople = { base: 1, sm: 2, md: 2, lg: 3, xl: 3, '2xl': 3 }
    let columns_fivePeople = { base: 1, sm: 2, md: 3, lg:4, xl: 4, '2xl': 4 }
    let columns_sixPeople = { base: 1, sm: 2, md: 3, lg: 4, xl: 4, '2xl': 5 }

    const MotionBox = motion(Box);
    const MotionCenter  = motion(Center);

    return (
        <Center>
            <Box
                color="brand.100"
                mt={mt_Box}
                w={width_Box}
            >
                <Box
                    fontSize={title_Size}
                    letterSpacing="3px"
                    fontFamily="Sushi Delivery Regular"
                    color="brand.100"
                    textAlign="center"
                >
                    {depTitle}
                </Box>
                <Center>
                    <Box>
                        {
                            allMember.filter(mem => mem.id === 1).map(item =>
                                <Box mt="30px" key={item.id}>
                                    <MotionCenter
                                            initial={{ opacity: 0, y: 100 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3, duration: 1 }}
                                    >
                                        <Image
                                            alt="Segun Adebayo"
                                            src={item.profile}
                                            width="200px"
                                        />
                                    </MotionCenter>
                                    <Box

                                        textAlign="center"
                                        fontSize={subTitle}
                                        fontWeight="semibold"
                                    >
                                        {item.name}
                                    </Box>
                                    <Box
                                        textAlign="center"
                                        fontSize="18px"
                                    >
                                        {item.pos}
                                    </Box>
                                </Box>)
                        }
                    </Box>
                </Center>

                <Center>
                    <SimpleGrid
                        columns={allMember.length === 3 ? columns_threePeople : ((allMember.length === 4 ? columns_fourPeople : (allMember === 5 ? columns_fivePeople : columns_sixPeople)))}
                        spacing={allMember.length === 3 ? spacing_threePeople : ((allMember.length === 4 ? spacing_fourPeople : (allMember === 5 ? spacing_fivePeople : spacing_sixPeople)))}
                        mt="50px"
                    >
                        {
                            allMember.filter(m => m.id !== 1).map(member => <Member key={member.id} name={member.name} pos={member.pos} profile={member.profile} />)
                        }
                    </SimpleGrid>
                </Center>
            </Box>
        </Center>
    )
}
