import { Box, Image, Center } from "@chakra-ui/react";
import TruncateMarkup from "react-truncate-markup";
import Link from 'next/link'
import {motion} from "framer-motion"

export default function NewsItems({ allnews }) {

    const MotionBox = motion(Box)

    const { date, src, title, slug } = allnews.fields;
    let widthBox = { sm: "100%", md: "280px", lg: "300px", xl: "350px", "2xl": "350px" };
    const titleSize = {base: "16px",sm: "16px",md: "17px",lg: "17px",xl: "17px",'2xl': "17px"};
    const dateSize = {base: "15px",sm: "15px",md: "18px",lg: "18px",xl: "18px",'2xl': "16px"}
    const readMoreSize = {base: "16px",sm: "16px",md: "18px",lg: "18px",xl: "18px",'2xl': "18px"}
    let container = {base: "90%",sm: "90%",md: "95%",lg: "95%",xl: "95%",'2xl': "95%"};

    return (
        <Center>
        <MotionBox
            w={container}
            borderRadius="10px"
            bg="brand.100"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
        >
            <Image
                w={widthBox}
                borderTopRightRadius="10px"
                borderTopLeftRadius="10px"
                src={
                    'https:' + src.fields.file.url
                }
                position="relative"
                zIndex="0"
            />
            <Box
                fontSize={dateSize}
                color="white"
                mt="5px"
                ml="10px"
            >
                Public on :  {
                    date
                }
            </Box>
            <Box
                mt="5px"
                ml="10px"
                fontSize={titleSize}
                fontWeight='semibold'
                color="white"
            >
                <TruncateMarkup lines={1}>
                    <div>
                        {
                            title
                        }
                    </div>
                </TruncateMarkup>
            </Box>
            <Link href={'/news/' + slug}>
                <Box
                    ml="10px"
                    mt="5px"
                    pb="9px"
                    fontSize={readMoreSize}
                    fontWeight="semibold"
                    color="white"
                    cursor='pointer'
                >
                    <a>
                        Read More..
                    </a>
                </Box>
            </Link>
        </MotionBox>
        </Center>
  
    )
}
