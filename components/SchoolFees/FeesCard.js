import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import FeesItems from './FeesItems'

export default function FeesCard({ gradPrice }) {

    return (
        <SimpleGrid
            columns={[
                2, //0px
                2,  //320px
                4,  //768px
                4,  //960px
                4,  //1200px
                4  //1536px
            ]}
            spacing={{
                base: "10px", //0px
                sm: "10px",  //320px
                md: "8px",  //768px
                lg: "10px",  //960px
                xl: "10px",  //1200px
                '2xl': "15px"  //1536px
            }}
            mt="10px"
        >
            {
                gradPrice.map(grad => <FeesItems
                    key={grad.id}
                    name={grad.gradName}
                    shift={grad.shift}
                    morning={grad.morning}
                    evening={grad.evening}
                    discountAsDoll={grad.discountAsDoll}
                    discountAsPer={grad.discountAsPer}
                    duration={grad.duration}
                    fullPrice={grad.fullPrice}
                    afterDiscount={grad.afterDiscount}
                    adminFee={grad.adminFee}
                />)
            }
        </SimpleGrid>
    )
}
