import React from 'react'
import { Box, Center, Image} from "@chakra-ui/react";

export default function CoverNewsItems({ news }) {

    const { date, src, body, title } = news.fields;

    return (
        <Center>
            <Box>
                <Image
                    src={
                        'https:' + src.fields.file.url
                    }
                />
            </Box>
        </Center>
    )
}
