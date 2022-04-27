import React, { useEffect, useState } from 'react'
import DztImageGalleryComponent from "reactjs-image-gallery";
import { Box, Center, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion"
// firebase Storage
import firebase from '../../Auth/firebase';
// import { ref, listAll, getDownloadURL } from "../../Auth/firebase/storage";

const MotionBox = motion(Box)

export default function GalleryPage() {
    let title = { base: "28px", sm: "40px", md: "45px", lg: "50px", xl: "50px", '2xl': "50px" };
    let container = { sm: "100%", md: "100%", lg: "98%", xl: "80%", "2xl": "80%" };
    const top = {
        base: "90px", //0px
        sm: "100px",  //320px
        md: "100px",  //768px
        lg: "30px",  //960px
        xl: "30px",  //1200px
        '2xl': "30px"  //1536px
    }

    const [loading, setLoading] = useState(true);
    const [rows, setRows] = useState([]);

    // Firebase Data 
    // Create a reference under which you want to list
    const storage = firebase.storage();

    useEffect(() => {
        storage.ref().child('Gallery/2021-2022').listAll()
            .then(res => {
                // console.log(res?.items, "res");
                res.items.forEach((itemRef) => {
                    // Get Name from File
                    let pathName = itemRef?.name;
                    let ImageName = pathName.split('.')[0];

                    // All the items under listRef.  
                    itemRef.getDownloadURL()
                        .then((url) => {
                            // Insert url into an <img> tag to "download"                        
                            let allrows = {
                                url: url,
                                thumbUrl: url,
                                title: ImageName,
                            }
                            rows.push(allrows);
                            setRows([...rows]);
                        })
                });
            })
            .catch(err => {
                alert(err.message);
            })

    }, [])

    // console.log(rows, "image firebase")


    return (
        <Box>
            <Center>
                <Box mt={top} width={container}>
                    <MotionBox
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}>
                        <Center>
                            <Image src="../vission.png" />
                        </Center>
                    </MotionBox>
                    <MotionBox
                        fontSize={title}
                        fontFamily="Sushi Delivery Regular"
                        letterSpacing="3px"
                        color="brand.100"
                        textAlign="center"
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 1.2 }}
                    >
                        <Text>
                            Gallery Of Academic Year 2021-2022
                        </Text>
                    </MotionBox>
                </Box>
            </Center>
            <DztImageGalleryComponent images={rows} />
        </Box>
    )
}
