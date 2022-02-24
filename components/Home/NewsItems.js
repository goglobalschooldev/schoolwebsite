import { Box, Image } from "@chakra-ui/react";
import Link from 'next/link'
import TruncateMarkup from "react-truncate-markup";

const NewsItems = ({ news }) => {
    let widthBox = {base: "300px",sm: "230px",md: "250px",lg: "300px",xl: "300px",'2xl': "300px"};
    const { title, body, date, src, slug } = news.fields

    return (
        <Box w={widthBox} bg="brand.100" borderRadius="10px">
            <Image
                w={widthBox}
                borderTopRightRadius="10px"
                borderTopLeftRadius="10px"
                src={'https:' + src.fields.file.url}
                position="relative"
                zIndex="0"
            />
            <Box
                ml="10px"
                fontSize="14px"
                color="white"
                mt="5px"
            >
                {date}
            </Box>
            <Box
                ml="10px"
                fontSize="15px"
                fontWeight='semibold'
                color="white"
                mt="5px"
            >
                <TruncateMarkup lines={1}>
                    <div>
                        {title}
                    </div>
                </TruncateMarkup>
            </Box>
            <Box
                ml="10px"
                fontSize="13px"
                color="white"
                mt="5px"
                pr="10px"
            >
                <TruncateMarkup lines={2} >
                    <div>
                        {body}
                    </div>
                </TruncateMarkup>
            </Box>
            <Link href={'/news/' + slug}>
                <Box
                    ml="10px"
                    mt="8px"
                    pb="10px"
                    fontSize="14px"
                    fontWeight="semibold"
                    color="white"
                    cursor='pointer'
                >
                <a>
                    Read More...
                </a>
                </Box>
            </Link>
        </Box>
    );
}

export default NewsItems;