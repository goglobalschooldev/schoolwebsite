import React from 'react'
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Text, Heading, Box, Stack, Image, Center, SimpleGrid } from "@chakra-ui/react"
import Head from 'next/head';

function NotFound() {

    const router = useRouter();

    useEffect(() => {
      setTimeout(()=> {
          router.push('/');
      }, 5000)

    }, []);

    return (
        <div>
            <Head>
            <title>404 Page | Go Slobal School</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <Box h="320px" w="100%" p={4} color="white">
                <Center>
                    <SimpleGrid display='block'> 
                        <Box textAlign="center" mt="70px" fontSize="50px" color="brand.100">Sorry! The page you’re looking for can’t be found.</Box> 
                        <Box textAlign="center" fontSize="50px" color="brand.100">Returning to the HomePage...</Box> 
                    </SimpleGrid>
                </Center>
            </Box>
        </div>
    )
}

export default NotFound;
