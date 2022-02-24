import { createClient } from 'contentful';
import TechDevPage from '../components/TechDev/TechDevPage'
import { NextSeo } from "next-seo";

export async function getStaticProps() {

    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })

    const res = await client.getEntries({ content_type: 'techDev' })

    return {
        props: {
            footers: res.items
        }
    }
}


export default function tech_dev({ footers }) {
   
    return (
        <div>
           <NextSeo
                title="Tech Dev | Go Global School"
                openGraph={{
                    url: "https://www.goglobalschool.com",
                    site_name: "Go Global School",
                    title: "Teah Dev",
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
            <TechDevPage footers={footers} />
        </div>

    )
}
