import React from 'react'
import ScrollToTop from "react-scroll-to-top";
import { animateScroll as scroll } from "react-scroll";
import { ArrowUpIcon } from '@chakra-ui/icons'

export default function ScrollingButton() {
    return (
        <div>
            <ScrollToTop
                style={{
                    width: "60px",
                    height: "60px",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: 'column',
                    alignItems: 'center',
                    color: "#fff",
                    backgroundColor: "#ED2777",
                    borderRadius: "50%",
                    marginBottom: 60,
                    marginRight: -15,
                }}
                top={20}
                onClick={() => scroll.scrollToTop()}
                component={
                    <p
                        style={{
                            display: "flex",
                            fontSize: "40px",
                        }}
                    >
                        <ArrowUpIcon />
                    </p>
                }
            />
        </div>
    )
}
