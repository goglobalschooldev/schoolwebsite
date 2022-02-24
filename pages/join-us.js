import JoinPage from '../components/JoinUs/JoinPage'
import { createClient } from 'contentful';
import { NextSeo } from "next-seo";

export async function getStaticProps() {

    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })

    const res = await client.getEntries({ content_type: 'joinUs' });

    return {
        props: {
            allJoinUs: res.items
        }
    }
}

export default function joinUs({ allJoinUs }) {
    return (
        <div style={{ marginBottom: 300 }}>
            <NextSeo
                title="Join Us | Go Global School"
                openGraph={{
                    url: "https://www.goglobalschool.com",
                    site_name: "Go Global School",
                    title: "Join Us",
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
            <JoinPage allJobs={allJoinUs} />
        </div>
    )
}
