import { Text, Box, Stack, Center } from "@chakra-ui/react"
import Link from "next/link";
import { motion } from 'framer-motion';

const FooterItems = (props) => {
    // const font = ["22px", "22px", "22px", "23px", "25px"];
    let widthBox = { sm: "100%", md: "280px", lg: "300px", xl: "350px", "2xl": "350px" };
    const MotionText = motion(Text);

    return (
        <Box
            w={widthBox}
            color="white"
        >
            <Box
                fontSize="25px"
                fontFamily="Sushi Delivery Regular"
                letterSpacing="2px"
            >
                {props.menu}
            </Box>
            <Box data-aos="slide-up">
                {
                    props.subMenu.map(items => <MotionText
                        key={items.id}
                        fontSize="15px"
                        cursor="pointer"
                        whileHover={{ scale: 1.05, originX: 0 }}
                        transition={{ type: "spring", stiffness: 200 }}
                    >
                        <Box>
                         <a href={items.link}>
                            {items.menu}
                         </a>
                         </Box>
                    </MotionText>
                    )
                }
            </Box>
        </Box>
    );
}

export default FooterItems;