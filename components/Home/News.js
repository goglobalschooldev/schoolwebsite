import { Box, Center, SimpleGrid, Image } from "@chakra-ui/react";
import NewsItems from "./NewsItems";

const News = ({ allnews }) => {
    let container = {
        base: "90%", //0px
        sm: "100%",  //320px
        md: "100%",  //768px
        lg: "100%",  //960px
        xl: "90%",  //1200px
        '2xl': "80%"  //1536px
    };
    let widthBody = { sm: "100%", md: "70%", lg: "70%", xl: "70%", "2xl": "70%" };
    const titleSize = { base: "25px", sm: "30px", md: "30px", lg: "20px", xl: "32px", '2xl': "32px" };
    const bodyTextSize = { base: "18px", sm: "18px", md: "18px", lg: "18px", xl: "22px", '2xl': "22px" }
    const marginTop = { base: "30px", sm: "30px", md: "30px", lg: "70px", '2xl': "70px" }

    const lastNews = allnews.slice(0, 3)
    return (
        <Center mt={marginTop} >
            <Box
                width={container}
                p="10px"
            >
                <Box>
                    <Center>
                        <Image w="70px" src="../icon_top.png" />
                    </Center>
                </Box>
                <Center>
                    <Box
                        fontSize={titleSize}
                        color="brand.100"
                        letterSpacing="3px"
                        fontFamily="Sushi Delivery Regular"
                    >
                        Our Latest News
                    </Box>
                </Center>
                <Center >
                    <Box
                        w={widthBody}
                        align="justify"
                        mt='10px'
                        p='10px'
                        color="brand.100"
                        fontSize={bodyTextSize}>
                        Find our news update about education, tech dev information,
                        events and many other activities with our students here!
                    </Box>
                </Center>
                <Center>
                    <SimpleGrid

                        columns={[
                            1, //0px
                            2,  //320px
                            3,  //768px
                            3,  //960px
                            3,  //1200px
                            3  //1536px
                        ]}
                        spacing={{
                            base: "40px", //0px
                            sm: "10px",  //320px
                            md: "10px",  //768px
                            lg: "10px",  //960px
                            xl: "10px",  //1200px
                            '2xl': "30px"  //1536px
                        }}
                        mt="30px"
                    >
                        {
                            lastNews.map(info => <NewsItems
                                key={info.sys.id}
                                news={info}
                            />
                            )
                        }
                    </SimpleGrid>
                </Center>
            </Box>
        </Center >
    );
}

export default News;