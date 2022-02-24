import React from 'react'
import { useRouter } from 'next/router'
import ServiceDetail from '../../components/Campus/ServiceDetail';
import { Services } from '../../components/Campus/Activity_Services_Data'
import { NextSeo } from "next-seo";

export default function studentsservice() {
    const router = useRouter()
    const { studentsservice } = router.query;
    return (
        <div>
            <NextSeo
                title="Students Service Slug | Go Slobal School"
                openGraph={{
                    url: "https://www.goglobalschool.com",
                    site_name: "Go Global School",
                    title: "Students Service Slug",
                    description:
                    "Go Global School has been founded by a group of educational specialists, who collectively hold over 10 years of experience in the field. The curriculum has been developed in accordance with the academic programme set by the Ministry of Education, Youth, and Sport of The Kingdom of Cambodia and the British National Curriculum.",
                    images: [
                    {
                        url: "/link_image.jpg",
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
            {
                Services.filter(e => e.id === studentsservice).map(ser => <ServiceDetail name={ser.name} key={ser.id} des={ser.des} featurImages={ser.featurImages} />)
            }
        </div>
    )
}
