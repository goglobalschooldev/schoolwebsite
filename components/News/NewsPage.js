import React from 'react'
import { Box, Image } from "@chakra-ui/react";
import NewsCover from './NewsCover';
import MainNews from './MainNews'
export default function NewsPage({ allnews }) {

    return (
        <div>
            <NewsCover allnews={allnews} />
            <MainNews allnews={allnews} />
        </div>
    )
}
