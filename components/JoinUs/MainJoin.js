import { Center, SimpleGrid, Box } from "@chakra-ui/react";
import JoinItem from './JoinItem'
import React, { useState, useEffect } from 'react';
import JoinUsPagination from "./JoinUsPagination";

export default function MainJoin({ mainJobs }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = mainJobs.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (

        <Center>
            <SimpleGrid
                columns={[
                    1, //0px
                    2, //320px,
                    3, //768px
                    3, //960px
                    3, // 1200px
                    3, //1536
                ]}
                // spacing={{ sm: "100%", md: "10px", lg: "30px", xl: "30px", "2xl": "30px" }}
                spacing={{
                    base: "5px",
                    sm: "5px",
                    md: "5px",
                    lg: "10px",
                    xl: "10px",
                    '2xl' : "30px",
                }}
            
            >
                {
                    currentPosts.map(cardJob => <JoinItem
                        key={cardJob.sys.id}
                        cardJob={cardJob}
                    />
                    )
                }
            </SimpleGrid>

           {
        //     <JoinUsPagination
        //     postsPerPage={postsPerPage}
        //     totalPosts={mainJobs.length}
        //     paginate={paginate}
        // />
           }
        </Center>

    )
}
