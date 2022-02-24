import React from 'react'
import Link from 'next/link';
import { MenuItem, Box } from "@chakra-ui/react";

export default function GalerySubMenu(props) {
 
    return (
        <Link href={'/gallery' + props.link}>
        <MenuItem
            fontSize="16px"
        >
                <a>
                    {props.item}
                </a>
        </MenuItem>
        </Link>
    )
}
