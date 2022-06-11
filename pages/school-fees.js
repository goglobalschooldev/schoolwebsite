import React from "react";
import SchoolFeesPage from "../components/SchoolFees/SchoolFeesPage";
import { NextSeo } from "next-seo";

export default function schoolFees() {
  return (
    <div>
      <NextSeo
        title="School Fee | Go Global School"
        openGraph={{
          url: "https://www.goglobalschool.com",
          site_name: "Go Global School",
          title: "School Fee",
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
      <SchoolFeesPage />
    </div>
  );
}
