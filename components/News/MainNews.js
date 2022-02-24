import { Center, SimpleGrid, Box, Stack } from "@chakra-ui/react";
import NewsItems from './NewsItems'

export default function MainNews({ allnews }) {
    const news = allnews.slice(0, 6)

    let spacing_Image = {
        base: "10px", //0px
        sm: "10px",  //320px
        md: "10px",  //768px
        lg: "10px",  //960px
        xl: "10px",  //1200px
        '2xl': "30px"  //1536px
    }    

    return (
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
                spacing={spacing_Image}
                mt="50px"
            >   
                {
                    news.map(info => <NewsItems
                        key={info.sys.id}
                        allnews={info}
                    />
                    )
                }
               
            </SimpleGrid>
        </Center>
    )
}

