import { Box, Center, Image, Button, Flex } from "@chakra-ui/react";
import TruncateMarkup from "react-truncate-markup";

export default function CoverJoinItem({ job }) {
    // const container = { sm: "100%", md: "100%", lg: "95%", xl: "75%", "2xl": "0%" }
    const title_size = { sm: "100%", md: "26px", lg: "28px", xl: "30px", "2xl": "30px" };
    const body_Text = { sm: "100%", md: "16px", lg: "18px", xl: "18px", "2xl": "18px" };
    const displayCover = { base: 'block', sm: 'flex', md: 'flex', lg: 'flex', xl: 'flex', "2xl":"flex"};
    const widthCover = { base:'100%', sm: "100%", md: "50%", lg: "50%", xl: "50%", "2xl": "50%"} 
    const top = {
        base: "100px", //0px
        sm: "100px",  //320px
        md: "100px",  //768px
        lg: "10px",  //960px
        xl: "20px",  //1200px
        '2xl': "20px"  //1536px
    }
    
    const { image, deadline, jobTitle, jobType, jobDescription, salaryRange } = job.fields;

    return (
        <Center>
            <Flex 
            display={displayCover}
            mt={top}
            >
                <Box  w={widthCover}>
                    <Image src={
                        'https:' + image.fields.file.url
                    }
                        w="100%"
                    />
                </Box>
                <Box w={widthCover} color="white" p="20px" bg="brand.100">
                    <Box                      
                        fontSize={title_size}
                        fontFamily="Sushi Delivery Regular"
                        letterSpacing="3px"
                        mt='20px'
                    >
                        {
                            jobTitle
                        }
                    </Box>
                    <Box
                    >
                        <Center>
                            <Flex>
                                {"Deadline: " + deadline + " " + jobType + " " + salaryRange + "$/Month"}
                            </Flex>
                        </Center>

                    </Box>
                    <Box mt="20px"
                        fontSize={body_Text}
                    >
                        <TruncateMarkup lines={5}>
                            <Box
                                textAlign='center'
                            >
                                {
                                    jobDescription
                                }
                            </Box>
                        </TruncateMarkup>
                    </Box>
                    <Button colorScheme="white" variant="outline" width="200px"
                        mt="30px">
                        Apply
                    </Button>
                </Box>
            </Flex>
        </Center>
    )
}
