import Link from 'next/link';
import { MenuItem, Box } from "@chakra-ui/react";

export default function SubStaffMenu(props) {
    return (
        <Link href={'/faculity-staff' + props.link}>
        <MenuItem
            fontSize="16px"
        >
                <Box>
                    <a>
                    {props.item}
                    </a>
                </Box>
        </MenuItem>
        </Link>
    )
}
