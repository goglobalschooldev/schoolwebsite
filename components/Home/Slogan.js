import { Box, Center, Flex, } from "@chakra-ui/react"

const Slogan = () => {

    const data = [
        {
            id: 1,
            title: "Discipline",
            body: "We want our students to carry out great manners, respects, and obtain great behaviours to be influential global citizens.",
            color: "#1680be",
            icon: 'Discipline.png'
        }, {
            id: 2,
            title: "Morality",
            body: "Children learn to be engaged and inquisitive students and to become a healthy and respectful citizen.",
            color: "#e72577",
            icon: 'Morolity.png'
        }, {
            id: 3,
            title: "Quality",
            body: "All classes are taught by qualified and experienced teachers in the fields, and they are native speakers.",
            color: "#a34a97",
            icon: 'quality.png'
        }

    ]

    const flexWidth = {
        base: "110px", //0px
        sm: "150px",  //320px
        md: "200px",  //768px
        lg: "230px",  //960px
        xl: "250px",  //1200px
        '2xl': "300px"  //1536px
    }
    const fontSize = {
        base: "15px", //0px
        sm: "15px",  //320px
        md: "20px",  //768px
        lg: "20px",  //960px
        xl: "25px",  //1200px
        '2xl': "25px"  //1536px
    }
    const flextMt = {
        base: "-20px", //0px
        sm: "-20px",  //320px
        md: "20px",  //768px
        lg: "20px",  //960px
        xl: "30px",  //1200px
        '2xl': "30px"  //1536px
    }

    return (
        <Center>
            <Flex
                mt={flextMt}
            >
                {
                    data.map(d => <Box
                        key={d.id}
                        w={flexWidth}
                        p="10px"
                        bg={d.color}
                        textAlign='center'
                        fontSize={fontSize}
                        letterSpacing="3px"
                        fontFamily="Sushi Delivery Regular"
                        color='white'
                    >
                        {
                            d.title
                        }
                    </Box>)
                }

            </Flex>
        </Center>
    );
}

export default Slogan;



