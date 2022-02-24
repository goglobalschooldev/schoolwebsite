import React from 'react'
import { Box, Center, Image, Flex } from "@chakra-ui/react";

export default function CovidSystem() {
    const container = { base:"90%", sm: "90%", md: "90%", lg: "95%", xl: "90%", "2xl": "80%" }
    const Title = {  base: "20px", sm: "28px",md: "32px",lg: "32px",xl: "32px",'2xl': "32px"};
    const body_Text = {  base: "16px",sm: "20px", md: "20px", lg: "20px", xl: "20px", '2xl': "20px"};
    const display_Text = {base: "block", sm: "block", md: "block", lg: "block", xl: "block", '2xl': "block"};
    const width_Box = { base: "100%", sm: "100%", md: "80%", lg: "80%", xl: "80%", '2xl': "80%" }
    const width_Image = { base: "100%", sm: "100%", md: "50%", lg: "50%", xl: "50%", '2xl': "50%" };
    const widthBody = { sm: "100%", md: "90%", lg: "90%", xl: "80%", "2xl": "80%" };
    const sub_Title = {
        base: "14px", //0px
        sm: "16px",  //320px
        md: "22px",  //768px
        lg: "22px",  //960px
        xl: "22px",  //1200px
        '2xl': "22px"  //1536px
    }

    return (
        <Center>
            <Flex
                mt="3%"
                w={container}
                display={display_Text}>
                    <Center>
                        <Box w={width_Image} data-aos="slide-up">
                            <Image src="../sr covide-19.png"
                                w="100%"
                            />
                        </Box>
                    </Center>
                    <Center>
                        <Box w={width_Box} color="brand.100" p="20px">
                            <Box
                                fontSize={Title}
                                fontFamily="Sushi Delivery Regular"
                                letterSpacing="3px"
                                mt='3%'
                                textAlign="center"
                            >
                                Covid-19 System
                            </Box>
                                <Box mt="10px"
                                    fontSize={body_Text}
                                    align="justify"
                                    body={widthBody}
                                >
                                    Covid-19 system, as the name suggests, is created for management purposes ranging from 
                                    test control to quarantine and treatment centres for Covid-19 cases in Siem Reap Province. 
                                    As tests for Covid-19 is being conducted in many areas of the province, this system is designed 
                                    to calculate and control data from the site and transfer information directly to a local server, 
                                    which will then be used by the residential or provincial hospital, police, and the provincial administration. 
                                    Information reports include overall testing statistic and test results with virus variants. 
                                    The system will also include quarantine and treatment centre management, 
                                    all of which will be collecting data from the testing registrations and results. 
                                    Both centres will have the option to either register new patient information or pull directly 
                                    from the registered test created on the test site, test dates and results included, 
                                    into their centre tab and mark the checked-out patient out of their list when needed. 
                                    This process quickens the transferring of information on new cases, which help increasing 
                                    the efficiency of the implementation on contact tracing duty of the provincial police.
                                </Box>
                        </Box>
                </Center>
            </Flex>
        </Center>
    )
}


// <Box 
// fontSize={sub_Title}
// fontFamily="Sushi Delivery Regular"
// // fontWeight="semibold"
// letterSpacing="2px"
// mt="20px"
// >
// Why uses the System?
// </Box>


// <Box mt="10px"
// fontSize={body_Text}
// align="justify"
// body={widthBody}
// >
// The ever-increasing number of patients, cases, and tests require a more organised management 
// with the ability to transfer information efficiently and effectively. The system compromises 
// all those needs by reducing the need of manual Excel or paperwork, while directly and digitally 
// transferring reports and information to different departments in seconds.
// </Box>
// <Box 
// fontSize={sub_Title}
// fontFamily="Sushi Delivery Regular"

// letterSpacing="2px"
// mt="20px"
// >
// Why is the System important?
// </Box>


// <Box mt="10px"
// fontSize={body_Text}
// align="justify"
// body={widthBody}
// >
// As Covid-19 still spreading around the community, the Covid-19 Rapid Antigen 
// Test is being conducted to thousands of people daily. This large numbers of tests means that
//  different departments who handle the Covid-19 control including Health Department: handling testing, 
//  patient treatment, and quarantine; Siem Reap Provincial Administration: responsible for mediating, 
//  information gathering, and reporting to national level; Police Department: handling contact tracing 
//  duty and the close down of connected locations; and many others find it difficult to communicate 
//  effectively leading to data loss and misinformation. The limit of manual Excels and paperwork has 
//  made the process even slower, reducing the effectiveness of the decision-making process, which 
//  rendering the pandemic management. Having one Management System to work on means each department will 
//  receive immediate and accurate information on time with proper analyzation to help speed up the 
//  decision-making process, which increases the effectiveness of Covid-19 Management.
// </Box>
// <Box 
// fontSize={sub_Title}
// fontFamily="Sushi Delivery Regular"

// letterSpacing="2px"
// mt="20px"
// >
// Who are using the system?
// </Box>


// <Box mt="10px"
// fontSize={body_Text}
// align="justify"
// body={widthBody}
// >
// Provincial Department of Health, Provincial Police Inspectorate, and Provincial Administration 
// have the biggest role in using the system as they are the main sources of data input. 
// Provincial Governor will have a personal account on the system for observation and decision making.
// </Box>