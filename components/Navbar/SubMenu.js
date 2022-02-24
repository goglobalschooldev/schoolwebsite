import React from 'react'
import Link from 'next/link';
import { MenuItem} from "@chakra-ui/react";

export default function SubMenu(props) {
    return (
        <Link href={props.link}>
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
