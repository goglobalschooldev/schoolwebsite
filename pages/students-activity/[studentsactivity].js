import React from 'react'
import { useRouter } from 'next/router'
import { allActivity } from '../../components/Campus/Activity_Services_Data'
import ActivityDetail from '../../components/Campus/ActivityDetail';
import { NextSeo } from "next-seo";

export default function studentsactivity() {
    const router = useRouter()
    const { studentsactivity } = router.query;

    return (
        <div>
            <NextSeo
                title="Students Activities Slug | Go Slobal School"
                openGraph={{
                    url: "https://www.goglobalschool.com",
                    site_name: "Go Global School",
                    title: "Students Activities Slug",
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
                allActivity.filter(e => e.id === studentsactivity).map(ser =>
                <ActivityDetail id={ser.id} name={ser.name} key={ser.id} des={ser.des}
                 featurImages={ser.featurImages} />)
            }
        </div>
    )
}
