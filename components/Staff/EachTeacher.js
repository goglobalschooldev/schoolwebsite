import React from 'react'
import {Image, Box, Badge, Center} from "@chakra-ui/react"
import Link from "next/link"
import { motion } from 'framer-motion'



export default function EachTeacher({teach}) {
    const MotionCenter = motion(Box)
    const { title, thumbnail, image, year, teacherslug} = teach.fields
    // const Top = ["0px", "0px", "-60px", "-100px", "-100px"];
    //let Title = { sm: "100%", md: "20px", lg: "20px", xl: "20px", "2xl": "25px" };
    return (
        
        <MotionCenter 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
        >
            <Link href={"/faculity-staff/our-teachers/" + teacherslug} >
                <Box borderWidth="0px" overflow="hidden" borderRadius="lg">
                <Center>
                <Box position="relative"></Box>
                    <Image
                    src={'https:' + thumbnail.fields.file.url}
                    position="spaccing"
                    alt="teachers image"
                    cursor="pointer"
                    />
                </Center>   
            <Center>
                <Badge
                    pt="5px"
                    pb="5px"
                    pl="20px"
                    pr="20px"
                    borderRadius="5px"
                    fontSize="12px"
                    position="absolute" 
                    mt="-5px"
                    color="white" 
                    bg="brand.100"
                    cursor="pointer"
                >
                    {year}
                    </Badge> 
                </Center> 
                <Box 
                    mt="40px"
                    textAlign="center"
                    fontSize="18px"
                    fontWeight="semibold"
                    mt="20px"
                    cursor="pointer"
                    >
                    {title}
                </Box>
                </Box>
            </Link >
        </MotionCenter>
    
  )
}
