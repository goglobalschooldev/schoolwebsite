import React from 'react'
import TruncateMarkup from "react-truncate-markup";
import { Box } from "@chakra-ui/react";
import { Image, } from "@chakra-ui/react";
import Link from 'next/link';
export default function ActivityItems(props) {
    let widthBox = { sm: "100%", md: "280px", lg: "300px", xl: "350px", "2xl": "350px" };
    return (
        <Box
            w={widthBox}
            bg="brand.100"
            borderRadius="10px"
            color="white"
        >
            <Image
                w={widthBox}
                borderTopRightRadius="10px"
                borderTopLeftRadius="10px"
                src={props.src}
            />
            <Box
                fontSize="18px"
                mt="5px"
                pl="10px"
                w='90%'
            >
                <TruncateMarkup lines={1}>
                    <div>
                        {props.name}
                    </div>
                </TruncateMarkup>
            </Box>
            <Box
                fontSize="15px"
                pl="10px"
                mt="5px"
                w='90%'
            >
                <TruncateMarkup lines={2}>
                    <div>
                        {props.des}
                    </div>
                </TruncateMarkup>
            </Box>
            <Box
                mt="20px"
                fontSize="14px"
                pl="10px"
                pb="10px"
            >
                <Link href={"/students-activity/" + props.id}>
                    <a>
                        Read More..
                    </a>
                </Link>
            </Box>
        </Box>
    )
}
