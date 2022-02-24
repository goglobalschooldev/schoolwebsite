import Link from 'next/link';
import { MenuItem } from "@chakra-ui/react";

export default function SubAcademicMenu(props) {
    return (
        <Link href={ props.link}>
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
