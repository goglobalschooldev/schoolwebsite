// import Head from 'next/head'
import AboutUS_Page from "../components/AboutUS/AboutUS_Page";
import React from 'react'
import { NextSeo } from "next-seo";



export default function About_us() {
   
    return (
        <div>
            <NextSeo
                title="About US | Go Slobal School"
                openGraph={{
                    url: "https://www.goglobalschool.com",
                    site_name: "Go Global School",
                    title: "About Us",
                    description:
                        " Go Global School was created in 2015, but its history can be dated as far as 2013. In 2013, professor Lok Lundy and professor Chy Sangvath had come together with a group of other professors from Law Department and other departments to collect ideas and shares in starting up a company. With 62,600 shares collected, a company named Khmer Credits, a small loan company, had emerged and stayed successfully until now under the name of Go Credits.",
                    images: [
                        {
                            url: "/About_US.png",
                            width: 700,
                            height: 500,
                            alt: "Logo",
                            type: "image/jpg",
                        },
                    ],
                }}
                twitter={{
                    handle: "@handle",
                    site: "@site",
                    cardType: "summary_large_image",
                }}
            />
            <AboutUS_Page />
        </div>
    )
}
