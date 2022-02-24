import { Center, Box, Image } from "@chakra-ui/react";
import DztImageGalleryComponent from "reactjs-image-gallery";
// https://www.npmjs.com/package/reactjs-image-gallery
export default function Visit() {
    let container = { sm: "100%", md: "100%", lg: "98%", xl: "80%", "2xl": "80%" };
    let widthBody = { sm: "100%", md: "90%", lg: "90%", xl: "80%", "2xl": "80%" };
    var data = [
        {
            url:
                "../visitUS01.png",
            title: "Visiting of Deputy Governor and Director of the Department of Commerce",
            thumbUrl:
                "visitUS01.png"
        },
        {
            url:
                "visitUS02.png",
            title: "Visiting of Deputy Governor and Director of the Department of Commerce",
            thumbUrl:
                "visitUS02.png"
        },
        {
            url:
                "visitUS03.png",
            title: "Visiting of Deputy Governor and Director of the Department of Commerce",
            thumbUrl:
                "visitUS03.png"
        },

    ];
    const title = {
        base: "25px", //0px
        sm: "30px",  //320px
        md: "30px",  //768px
        lg: "30px",  //960px
        xl: "30px",  //1200px
        '2xl': "30px"  //1536px
    };
    const body_Text = {
        base: "15px", //0px
        sm: "20px",  //320px
        md: "20px",  //768px
        lg: "20px",  //960px
        xl: "20px",  //1200px
        '2xl': "20px"  //1536px
    }
    return (
        <Center >
            <Box
                width={container}
                p="10px"
                mt="30px"
            >
                <Box>
                    <Center>
                        <Image w="70px" src="../icon_top.png" />
                    </Center>
                </Box>
                <Center>
                    <Box
                        fontSize={title}
                        fontFamily="Sushi Delivery Regular"
                        letterSpacing="3px"
                        color="brand.100"
                    >
                        Visit US
                    </Box>
                </Center>
                <Center>
                    <Box w={widthBody} align="justify" p='10px' mt='20px' color="brand.100" fontSize={body_Text}>
                        We are opening from 7:30 AM-5:00 PM every day from Monday to Saturday. If you are interested
                        to learn more about what we have to offer, do not forget to give us a visit. We are looking forward
                        to seeing you soon! Until then, have a great time.
                    </Box>
                </Center>
                <Center>
                    <DztImageGalleryComponent className="visit_image" images={data} />
                </Center>
            </Box>
        </Center>
    )
}
