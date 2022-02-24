import React from 'react'
import Slogan from './Slogan'
import OurTeacher from './OurTeacher'
import News from './News'
import OurVideo from './OurVideo'
import WhyChooseUs from './WhyChooseUs'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Promotion from './Promotion';
import Placement from './Placement';
import MessagePlacement from "./MessagePlacement"

export default function HomePage({ allnews, teachers, allpromotion }) {

    return (
        <div>
            <Carousel
                autoPlay={true}
                showStatus={false}
                showThumbs={false}
            >
                {
                    allpromotion.map(pro => <Promotion key={pro.sys.id} pro={pro} />)
                }
            </Carousel>
            <Slogan />
            <OurTeacher teachers={teachers} />
            <Placement />
            <MessagePlacement/>
            <News allnews={allnews} />
            <WhyChooseUs />
            <OurVideo />
        </div>
    )
}
