import React from 'react'
import { Input, InputGroup, Button, InputRightElement, Box, Center, Stack } from "@chakra-ui/react"
export default function LoginPage() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <Center>

            <Box bg="white" w="400px" h="500px" p="20px" color="brand.100">
                <Stack spacing={4}>
                    <InputGroup size="md">
                        <Input placeholder="Enter Email" />
                    </InputGroup>
                    <InputGroup size="md">
                        <Input
                            pr="4.5rem"
                            type={show ? "text" : "password"}
                            placeholder="Enter password"
                        />
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={handleClick}>
                                {show ? "Hide" : "Show"}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </Stack>
            </Box>
        </Center>
    )
}
