import React from 'react'
import StaffPage from '../../components/Staff/StaffPage'
import { allDepartment } from '../../components/Staff/AllStaffData'
import { useRouter } from 'next/router'
import { NextSeo } from "next-seo";

export default function faculityStaff() {
    const router = useRouter()
    const { faculitystaff } = router.query;

    return (
        <div>
            <NextSeo
                title="Faculity Staff | Go Slobal School"
                openGraph={{
                    url: "https://www.goglobalschool.com",
                    site_name: "Go Global School",
                    title: "Faculity Staff",
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
               allDepartment.filter(dep =>  faculitystaff === dep.id )
               .map(deps=>  <StaffPage
                key={deps.id}
                    name={deps.name}
                    member={deps.member}
                 />)
           }
        </div>
    )
}