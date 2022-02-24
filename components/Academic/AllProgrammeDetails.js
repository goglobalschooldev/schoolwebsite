import React from 'react'
import Head from 'next/head';
import { Center,} from "@chakra-ui/react";
import { AllProDetails } from "./ProgrammeData";
import { useRouter } from "next/router";
import HeaderDetails from "../../components/Academic/HeaderDetails"
import ProgrammeHighlight from "../../components/Academic/ProgrammeHighlight"
import SubProgramme from "../../components/Academic/SubProgramme"
import HowWhatLearn from "../../components/Academic/HowWhatLearn"

export default function AllProgrammeDetails() {

    const router = useRouter();
    const myVal = router.query.subprogramme
    //console.log(myVal)
    //console.table(AllProDetails);
    return (
        <Center>
           {
                AllProDetails.filter(pro => pro.id === myVal).map(p => <div key={p.id}>
                    <HeaderDetails title={p.title} des={p.des} images={p.images} />
                    <ProgrammeHighlight programmeHighlight={p.programmeHighlight}/>
                    <SubProgramme subProgramme={p.subProgramme} />
                    <HowWhatLearn howLearn={p.howLearn} whatLearn={p.whatLearn}/>
                </div>)
            }
        </Center>
    )
}
