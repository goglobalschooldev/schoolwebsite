import { Box, Image, Center } from "@chakra-ui/react"

const SloganItems = (props) => {

    let widthBox = { sm: "100%", md: "280px", lg: "300px", xl: "350px", "2xl": "350px" };
    let heigthBox = { sm: "150px", md: "450px", lg: "400px", xl: "500px", "2xl": "500px" };

    return (
        <Box
            w={widthBox}
            borderRadius="50px"
            color="white"
            bg={props.color}
            h={heigthBox}
        >
            <Box p="20px" mt="40px">
                <Center>
                    <Image
                        w={{ sm: "100%", md: "250px", lg: "190px", xl: "230px", "2xl": "230px" }}
                        src={props.icon}
                    />
                </Center>
                <Box
                    align="center"
                    fontSize="25px"
                    letterSpacing="3px"
                    fontFamily="Sushi Delivery Regular"
                    mt={["30px", "20px", "20px", "20px", "50px"]}
                >
                    {props.title}
                </Box>
                <Box fontSize="sm" align="center">
                    {props.body}
                </Box>
            </Box>
        </Box>

    );
}

export default SloganItems;