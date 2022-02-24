import { Box } from "@chakra-ui/react";
import TravelerSystem from "./TravelerSystem";
import CovidSystem from "./CovidSystem";

export default function TechDevelop({ footers }) {

    return (
        <Box>
            <TravelerSystem />
            <CovidSystem />
        </Box>
    )
}
