
import React, { useState, useEffect } from 'react';
import Header from "./Header";
import Menu from "./Menu";
import { Box} from "@chakra-ui/react";

const Nav = () => {

    return (
        <Box
           
            zIndex={2}
            display={{ base: "none", sm: "none", md: "none", lg: "block", xl: "block", '2xl': "block" }}
        >
            <Header />
            <Menu />
        </Box>
    );
}

export default Nav;