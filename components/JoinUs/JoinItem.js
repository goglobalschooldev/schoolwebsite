import { Box, Image } from '@chakra-ui/react';
import TruncateMarkup from "react-truncate-markup";
import Link from 'next/link'
export default function JoinItem({ cardJob }) {


    const { image, deadline, jobTitle, body, jobslug } = cardJob.fields;
    let widthBox = { sm: "100%", md: "280px", lg: "300px", xl: "350px", "2xl": "350px" };
    const jobtitle = {base:"18px", sm: "18px", md: "20px", lg: "20px", xl: "20px", '2xl': "20px"};
    const container = {base: "90%", sm:"100%", md: "100%", lg:"100%", xl:"90%", '2xl': "80%" }
    const padding = { base: "30px", sm: "30px", md: "0px", lg: "0px", xl:"0px", '2xl': "0px" }
    const deaLine = {base:"15", sm: "15px", md: "18px", lg: "18px", xl: "18px", '2xl': "18px"};
    const top = {
        base: "20px", //0px
        sm: "20px",  //320px
        md: "50px",  //768px
        lg: "50px",  //960px
        xl: "50px",  //1200px
        '2xl': "50px"  //1536px
    }
    return (
        <Box p={padding} mt={top}>
            
            <Image
                w={widthBox}
                borderTopRightRadius="10px"
                borderTopLeftRadius="10px"
                src={
                    'https:' + image.fields.file.url
                }
                position="relative"
                zIndex="0"
            />
            <Box
                fontSize={deaLine}
                color="#0473C5"
                mt="5px"
            >
                Deadline: {
                    deadline
                }
            </Box>
            <Box
                fontSize={jobtitle }
                fontWeight='semibold'
                color="#0473C5"
                mt="5px"
                w='90%'
            >
                <TruncateMarkup lines={1}>
                    <div>
                        {jobTitle}
                    </div>
                </TruncateMarkup>
            </Box>
            <Box
                fontSize={jobtitle }
                mt="10px"
                fontWeight="semibold"
                color="brand.100"
            >
                <Link href={"/join-us/" + jobslug}>
                    <a>
                        Apply now...
                    </a>
                </Link>
            </Box>
        </Box>
    )
}
