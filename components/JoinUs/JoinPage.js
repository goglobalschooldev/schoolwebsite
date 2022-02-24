import MainJoin from './MainJoin';
import JoinCover from './JoinCover';
import { Image, Box } from '@chakra-ui/react'

export default function JoinPage({ allJobs }) {
    const top = {
        base: "0px", //0px
        sm: "0px",  //320px
        md: "120px",  //768px
        lg: "10px",  //960px
        xl: "0px",  //1200px
        '2xl': "0px"  //1536px
    }
    return (
        <Box
        mt={top}
        
        >
            <JoinCover />
            <MainJoin mainJobs={allJobs} />
        </Box>
    )
}
