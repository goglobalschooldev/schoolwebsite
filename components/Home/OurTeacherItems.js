  import { Box,  Image, Center } from "@chakra-ui/react"
import Link from "next/link";

export default function OurTeacherItems({ teacher }) {

    const { title, thumbnail, teacherslug } = teacher.fields

    let widthBox = {
        base: "300px", //0px
        sm: "230px",  //320px
        md: "250px",  //768px
        lg: "300px",  //960px
        xl: "300px",  //1200px
        '2xl': "300px"  //1536px
    };

    return (
        <Box>
                <Image
                    w={widthBox}
                    borderRadius="10px"
                    src={'https:' + thumbnail.fields.file.url}
                    position="spaccing"
                    alt="teachers image"
                />
                <Center>
                    <Box
                        position="absolute"
                        bg='brand.100'
                        color="white"
                        pr='20px'
                        pl="20px"
                        pb="5px"
                        pt="5px"
                        borderRadius="5px"
                    >
                        {title}
                    </Box>
                </Center>
        </Box>
    )
}
