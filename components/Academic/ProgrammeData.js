export let allProgramme = [
    {
        id: "khmer-programme",
        name: "Khmer Programme",
        des: "Khmer Programme is following the Ministry of Education, Youth, and Sports Curriculum. In each class,  all of our teachers all have pedagogy and skills and they are accompanied with at least one  teaching assistant.",
        subProgramme: [
            {
                id: "EarlyChildhoodEducation",
                name: "Early Childhood Education",
                des: "Early Childhood Education is focusing on educating children from age of 0 to 6 years old",
                src: "../Early_Childhood_Education.jpg",
                link: ""
            },
            {
                id: "pramaryeducation",
                name: "Primary Education",
                des: "To introduce students to subject books and expand their knowledge according to their living environments. ",
                src: "../PrimaryEducation.jpg",
                link: ""
            },
            {
                id: "generalsecondaryeducation",
                name: "General Secondary Education",
                des: "Secondary Education is a milestone that students will have to experience before they can enter the real world. ",
                src: "../GeneralSecondaryEducation.jpg",
                link: ""
            }
        ]
    },
    {
        id: "foreign-languange-programme",
        name: "Foreign Language Programme",
        des: "This programme is following the National British Curriculum using Oxford University Press coursebooks. Our teachers are from The United States, New Zealand, England, and Australia and in each class, they too are also accompanied by at least one teaching assistant.",
        subProgramme: [
            {
                id: "earlyyearsfoundatonstage",
                name: "Early Foundation Stage",
                des: "Students age from 3 to 6 years old are getting to develop and improve their fundamental background and foundations of languages in different subjects such as Maths, Science, Literacy, Phonics, and more. Here students get to express themselves through play-teaching and creative games.",
                src: "../EarlyFoundationStage.jpg",
                link: ""
            },
            {
                id: "keystage1andkeystage2",
                name: "Key Stage 1 and Key Stage 2",
                des: "For these two stages, students are getting to experience actual subject books such as English Literacy, Mathematics, Science, Geography, Phonics/Grammar, and Chinese.",
                src: "../KeyStage1andKeyStage2.jpg",
                link: ""
            },
            {
                id: "keystage3andkeystage4",
                name: "Key Stage 3 and Key Stage 4",
                des: "Here students are still focusing on their six main subjects, but students get to involve a lot more with real-world experiences and examples through field trips, internships, and opportunities to interact with local and international events and competitions.",
                src: "../KeyStage3andKeyStage4.jpg",
                link: ""
            }
        ]
    },
    {
        id: "general-programme",
        name: "General Programme",
        des: "Host a while ranges of different skills besides school curriculums, where students get to pick and furnish their hobbies and interests in General English, Chinese, Arts (Music & Dance), and Computers skills. These are the skills that they need to interact and entertain themselves and others in informal and formal events.",
        subProgramme: [
            {
                id: "generalenglish",
                name: "General English",
                des: "To reduce difficulties in communication between local and international visitors, and at the same time, it helps to search and understand different aspects of different cultures without the limitations of language.",
                src: "../GeneralEnglish.jpg",
                link: ""
            },
            // {
            //     id: "chinese",
            //     name: "Chinese",
            //     des: "China is the second-biggest market in the world, where its language is demanding in order to catch up with the expansion and growth of the world market. Obtaining this language is a practical way to build up a lot of potentials in businesses besides learning its enriched cultures.",
            //     src: "../Chinese.jpg",
            //     link: ""
            // },
            {
                id: "artsmusicanddance",
                name: "Arts Music and Dance",
                des: "In our daily life, arts play important roles in expressing our moods base on events and time, while at the same, it adds additional meanings to what we are missing. Students can use arts for a lot of purposes such as painting, music, or dances.",
                src: "../artsmusicanddance.jpg",
                link: ""
            },
            {
                id: "computer",
                name: "Computer",
                des: "Cambodia is a developing country, where a lot of industries are growing and those are also including technology. To improve the standards in technology, students have to start and work with basic computer skills.",
                src: "../Computer.jpg",
                link: ""
            }
        ]
    }
]


export let AllProDetails = [
    //Khmer Programm
    {
        id: "EarlyChildhoodEducation",
        title: "Early Childhood Education",
        images: ["../early child ed 2.jpg",  "../early childhodd 6.jpg", "../early childhood 3.jpg", "../early childhood ed 1.jpg", "../early childhood ed 5.jpg", "../early child ed 4.jpg"],
        des: 'Early Childhood Education is focusing on educating children from age of 0 to 6 years old. This education stage is focusing on play-study environment in the absences of their families. Children at this age have high mental development and growth.',
        programmeHighlight: [
            {
                id: 1,
                color: '#0983C4',
                prHighlightBody: 'This programme is newly introduced to our Khmer Programme curriculum in 2019-2020 Academic Year. It has two main sub- programmes such as Early Childhood Development and Supports and Kindergartens.'
            },
            {
                id: 2,
                color: '#A7499B',
                prHighlightBody: 'Students to know school as young as 6-months old in daycare up until they can learn how to read and write alphabets.They learn how to live and thrive independently in an environment without their parents.'
            },
            {
                id: 3,
                color: '#ED2777',
                prHighlightBody: 'It is the fundamental programme that prepares students to get ready for primary school. Strong built-ups from this programme will create strong and willing children in education.'
            }
        ],
        subProgramme:[
            {
                id:1,
                lisTitle:'Early Childhood Development and Support',
                list:[
                   "Crèche",
                   'Nursery'
                ]
            },
            {
                id:2,
                lisTitle:'Kindergarten',
                list:[
                   "Lower Kindergarten",
                   "Middle Kindergarten",
                   "Higher Kindergarten"
                ]
            },
        ],
        howLearn:[
            "Indoor and Outdoor Play Activities",
            "Acting out each alphabet by their teachers and TAS",
            "Hand-on experiences in seeing and practising how each alphabet written, used for, and sounded like"
        ],
        whatLearn:[
            "Be responsible in their daily habits like drinking their milk, eating by themselves, and asking for helping in their daily habits",
            "Maintain a healthy sleeping, playing, and learning circle",
            "To speak up for what they want in a polite way",
            "To begin learning their alphabets visually, verbally, and written",
            "To get started on their first 10 fundamental numbers"
        ],
    },
    {
        id: "pramaryeducation",
        title: "Primary Education",
        images: ["../primary 1.jpg", "../primary 2.jpg", "../primary 3.jpg", "../primary 4.jpg", "../primary 5.jpg", "../primary 6.jpg"],
        des: 'To introduce students to subject books and expand their knowledge according to their living environments. Get hands-on experiences by exploring places and objects around them through field trips. There are two main stages in this education such as Lower Primary Education (Garde 1 -3) and Upper Primary Education (Grade 4-6).',
        programmeHighlight: [
            {
                id: 1,
                color: '#0983C4',
                prHighlightBody: 'Grade 1 is the fundamental transition from Early Childhood Education, and it is initial fuel to light up each student to their furthest future. Strong skills are planting from here.'
            },
            {
                id: 2,
                color: '#A7499B',
                prHighlightBody: 'This programme is the essential ticket for students to enter a lot of places.'
            },
            {
                id: 3,
                color: '#ED2777',
                prHighlightBody: 'Classes are categorised into subjects, such as Mathematics, Science, and Literacy, while there are a few supporting classes to help shape and give students creativities, responsibilties, and healthy lifestyle.'
            },
            {
                id: 4,
                color: '#0983C4',
                prHighlightBody: 'Secondary School is their next stop after students completed their primary ticket.'
            }
        ],
        subProgramme:[
            {
                id:1,
                lisTitle:'Lower Primary School',
                list:[
                   "Grade 1",
                   "Grade 2",
                   "Grade 3"
                ]
            },
            {
                id:2,
                lisTitle:'Upper Primary School:',
                list:[
                   "Grade 4",
                   "Grade 5",
                   "Grade 6"
                ]
            },
        ],
        howLearn:[
            "Lectures are done in both teacher centered and student centered",
            "Textbooks",
            "Problem solving",
            "Field trips"
        ],
        whatLearn:[
            "To start putting themselves into working and practising real world problems in literacy and mathematic aspects",
            "To manage their time and response in preparing themselves for classes",
            "To be responsible and brave in confronting their peers and teachers for their facing problems",
            "To seek for help",
            "To work individually and in group in school projects and class discussion",
            "To gradually build their own confidences in solving problems without reasonings"
        ],
    },
    {
        id: "generalsecondaryeducation",
        title: "General Secondary Education",
        images: ["../general secondary edu 1.jpg", "../general secondary edu 2.jpg", "../general secondary edu 3.jpg", "../general secondary edu 4.jpg", "../general secondary edu 5.jpg", "../general secondary edu 6.jpg"],
        des: 'Secondary Education is milestone that students will have to experience before they can enter the real world. This education is divided into sub-programmes such as Secondary School (Grade 7-9) and High School (Grade 10-12). In this same education, students are having specialised teacher for subject they studied. Students are experiencing more than eleven subjects with different weights.',
        programmeHighlight: [
            {
                id: 1,
                color: '#0983C4',
                prHighlightBody: 'This programme is transitioning from Primary School, and classes are rather taught by specialised teachers, where studentsare used to only one teacher teaches every subject.'
            },
            {
                id: 2,
                color: '#A7499B',
                prHighlightBody: 'Students will be focusing on solving complex problems, and they will be exposed to a lot more specialised subjects that independently stand by themselves.'
            },
            {
                id: 3,
                color: '#ED2777',
                prHighlightBody: 'Students will get to explore what they want to do in their future by exploring their what subjects they like and can be excelled at.'
            },
            {
                id: 4,
                color: '#0983C4',
                prHighlightBody: 'Students can work with differents teachers from different backgrounds, while exploring their own interests.'
            
            },
            {
                id: 5,
                color: '#A7499B',
                prHighlightBody: 'Students get to plan and find ways of study to prepare themselves for the Grade 12 National Examination.'

            }
        ],
        subProgramme: [
            {
                id: 1,
                lisTitle: 'Secondary School',
                list: ["Grade 7", "Grade 8","Grade 9"]
            },
            {
                id: 2,
                lisTitle: 'High School',
                list: ["Grade 10","Grade 11", "Grade 12"]
            },
            
        ],
        howLearn: [
            "Subject Teachers",
            "Textbooks",
            "Classes are scheduled by hours rather than repeating the same classes every day.",
            "Both teacher and student centered",
            "Hand on experiences and field trips"
        ],
        whatLearn: [
            "Students will start their Secondary School journey in Grade 7 in more than 10 subjects per year. Grade 9 will be their first time experiencing a national exam following the Ministry of Education, Youth, and Sport procedures.",
            "Classes and subjects are progressing from Grade 7 until Grade 12.",
            "To manage time for their studies and develop new skills in supporting their preparations for Grade 12 National Examination.",
            "To work individually and in group to complete their ends goals.",
            "To form memorable friendships.",
            "To prepare themselves for the undergraduate experiences and real-world life."
        ],
    },
   
    //Foriegn Language
    {
        id: "earlyyearsfoundatonstage",
        title: "EARLY YEARS FOUNDATION STAGE",
        images: ["../eys01.jpg", "../eys02.jpg", "../eys03.jpg", "../eys04.jpg", "../eys05.jpg", "../eys06.jpg"],
        des: 'Students age from 3 to 6 years old are getting to develop and improve their fundamental background and foundations of languages in different subjects such as Maths, Science, Literacy, Phonics, and more. Here students get to express themselves through play-teaching and creative games.',
        programmeHighlight: [
            {
                id: 1,
                color: '#0983C4',
                prHighlightBody: 'This programme is starting with students as young as three-years old, and their rides in this programme when they are six years old.'
            },
            {
                id: 2,
                color: '#A7499B',
                prHighlightBody: 'It is the fundamental programme that determine whether the students have the ability to thrive in the next level especially this is their second language.'
            },
            {
                id: 3,
                color: '#ED2777',
                prHighlightBody: 'Kids start to learn by matching their sensory details with their educators to what they learned.'
            },
            {
                id: 4,
                color: '#0983C4',
                prHighlightBody: 'Students have a shorter time span in paying attention to what they learn so they will be required a lot of play time along with their studies. They requires a lot of hand-on experiences, tracing, and colouring.'
            
            },
            {
                id: 5,
                color: '#A7499B',
                prHighlightBody: 'This is the time where students get to pick up with their confidences and creativity along with skills for Key Stage 1.'

            }
        ],
        subProgramme: [
            {
                id: 1,
                lisTitle: 'Preschool',
                list: []
            },
            {
                id: 2,
                lisTitle: 'Kindergarten',
                list: []
            },
            {
                id: 3,
                lisTitle: 'Reception',
                list: []
            }
        ],
        howLearn: [
            "Alphabet letters, sounds, and recognition",
            "A lot interactions with their hands and the environment",
            "Toys and play times"
        ],
        whatLearn: [
            "Build relationship with adults and their peers",
            "Take responsibility in their studies, faults, and living habits",
            "Build up confidences in confronting adults and their peers when running into troubles",
            "Learn how to share and step back during their play times",
            "Introduce different skill sets to become a responsible teenagers",
            "Bring out their creativity and intelligence in applying what they learn to get them to Key Stage 1"
        ],
    },
    {
        id: "keystage1andkeystage2",
        title: "KEY STAGE 1 AND KEY STAGE 2",
        images: ["../key1001.jpg","../key1002.jpg","../key1003.jpg"],
        des: 'For these two stages, students are getting to experience actual subject books such as English Literacy, Mathematics, Science, Geography, Phonics/Grammar, and Chinese.',
        programmeHighlight: [
            {
                id: 1,
                color: '#0983C4',
                prHighlightBody: 'This programme is the main transition for students to use their skills harvest from EYFS. This is when people can recognise whether the students are coming from the a strong backgrounds or not.'
            },
            {
                id: 2,
                color: '#A7499B',
                prHighlightBody: 'This is the essential stage in either to help students determine whether they will struggle or excel in their next stage.'
            },
            {
                id: 3,
                color: '#ED2777',
                prHighlightBody: 'Students here will be introduced to real subject classes and less play time.'
            },
            {
                id: 4,
                color: '#0983C4',
                prHighlightBody: 'Students will also starting introduce to the third language like Chinese not just English.'
            
            },
        ],
        subProgramme: [
            {
                id: 1,
                lisTitle: 'Key Stage 1',
                list: ["Year 1", "Year 2"]
            },
            {
                id: 2,
                lisTitle: 'Key Stage 2',
                list: ["Year 3","Year 4", "Year 5", "Year 6"]
            },
           
        ],
        howLearn: [
            "Subject Textbooks",
            "Both in teacher and student centered learning",
            "Indoor and outdoor classroom facilitated by the teachers",
            "Hand-on experiences"
        ],
        whatLearn: [
            "To experience the differences of subject classes rather than play time.",
            "To develop new skills in managing their times and learning abilities in all six subjects such as English Literacy, Mathematics, Science, Geography, Phonics, and Chinese.",
            "To take responsibility in completing their works in both programmes.",
            "To build and instil discipline, morality, and quality in themselves.",
            "To create strong fundamental skills for Key Stage 3."
        ],
    },
    {
        id: "keystage3andkeystage4",
        title: "Key Stage 3 and Key Stage 4",
        images: ["../key3001.jpg","../key3002.jpg","../key3003.jpg"],
        des: 'Here students are still focusing on their six main subjects, but students get to involve a lot more with real-world experiences and examples through field trips, internships, and opportunities to interact with local and international events and competitions.',
        programmeHighlight: [
            {
                id: 1,
                color: '#0983C4',
                prHighlightBody: 'These are the stages that students will be having specialised teachers for each subject. They are no longer taught by one teacher for all the given subjects like in Key Stage 1 &2.'
            },
            {
                id: 2,
                color: '#A7499B',
                prHighlightBody: 'Students get to explore what they want to do in life by having a lot of hand-on experiences, field trips and field trips.'
            },
            {
                id: 3,
                color: '#ED2777',
                prHighlightBody: 'Students will have to solve challenging questions and write a lot more than their previous experiences.'
            },
            {
                id: 4,
                color: '#0983C4',
                prHighlightBody: 'They will be exposed to a lot of real world activities and opportunities rather than studying from the books.'
            },
        ],
        subProgramme: [
            {
                id: 1,
                lisTitle: 'Key Stage 3',
                list: [
                    "Year 7",
                    "Year 8",
                    "Year 9"
                ]
            },
            {
                id: 2,
                lisTitle: 'Key Stage 4',
                list: [
                    "Year 10",
                    "Year 11"
                ]
            }
        ],
        howLearn: [
            "Textbooks",
            "Both teacher and student centred",
            "Hand on experiences, field trips, and internships",
            "World wide examinations"
        ],
        whatLearn: [
            "To start thinking about what they want to do in their future by exploring what they passionate about.",
            "To be able to confront and realise how to solve their own problems.",
            "To start applying their own strategies in studying and choose what are best for them.",
            "To own up their actions and take responsibilities.",
            "To develop critical thinking skills and to apply them in their decision making.",
            "To manage their times for different subjects and concentrations so that they will be ready examinations and real world problems."
        ],
    },
    //General Programme
    {
        id: "generalenglish",
        title: "General English",
        images: ["../english01.jpg", "../english02.jpg", "../english03.jpg", "../english04.jpg", "../english05.jpg", "../english06.jpg"],
        des: 'To reduce difficulties in communication between local and international visitors, and at the same time, it helps to search and understand different aspects of different cultures without the limitations of language.',
        programmeHighlight: [
            {
                id: 1,
                color: '#0983C4',
                prHighlightBody: 'Students will be exposed and refined themselves to English Language through Native English and Khmer teachers.'
            },
            {
                id: 2,
                color: '#A7499B',
                prHighlightBody: 'Students will be able to use their English Language skills with their friends, businesses, and communicate with other English speakers.'
            },
            {
                id: 3,
                color: '#ED2777',
                prHighlightBody: 'They are not going to gain English skills, but they will be able to refine their speaking, leadership, and group work abilities.'
            },
        ],
        subProgramme: [
            {
                id: 1,
                lisTitle: 'Beginner',
                list: ["",]
            },
            {
                id: 2,
                lisTitle: 'Young Learner',
                list: [""]
            },
            {
                id: 3,
                lisTitle: 'Adult Learner',
                list: [""]
            },
        ],
        howLearn: [
            "ESL Textbooks",
            "Native English and Khmer teachers",
            "Teacher and Student Centred teaching style",
            "Indoor and Outdoor activities/teaching",
            "Peers"
        ],
        whatLearn: [
            "To learn how to refine and create skills set in English Language as a Second Language speaker.",
            "To be able to use language skills in communcating and doing business with English speakers.",
            "To improve their language skills while sharpen their skills in leadership, presentation, and confident.",
            "To confront and take up responsibility in their studies, especially to the odd times of the study.",
            "To improve their knowledge and open up opportunities for their future goals.",
            "To build and bring out their confidences in speaking another language."
        ],
    },
    {
        id: "chinese",
        title: "Chinese",
        images: ["../art001.jpg", "../art002.jpg", "../art003.jpg", "../art004.jpg", "../art005.jpg", "../art006.jpg"],
        des: 'China is the second-biggest market in the world, where its language is demanding in order to catch up with the expansion and growth of the world market. Obtaining this language is a practical way to build up a lot of potentials in businesses besides learning its enriched cultures.',
        programmeHighlight: [
            {
                id: 1,
                color: '#0983C4',
                prHighlightBody: 'Students in this programme will learn to develop another language skill. Mandarin Chinese is one of the languages used worldwide in business and foreign affairs.'
            },
            {
                id: 2,
                color: '#A7499B',
                prHighlightBody: 'Students will be more confident if they can speak more than three languages perfectly.'
            },
            {
                id: 3,
                color: '#ED2777',
                prHighlightBody: 'Students will be able to communicate with a lot of people especially investors, businessmen, and other foreign affairs who are speak Chinese.'
            }
        ],
        subProgramme: [
            {
                id: 1,
                lisTitle: 'Offered in every class from Year 1-Year 8',
                list:[]
                
            }
        ],
        howLearn: [
            "Professional Chinese Teachers",
            "Conversation and writing",
            "Interactive games"
        ],
        whatLearn: [
            "To read and write in Mandarin Chinese",
            "To converse in Chinese with foreigners for business, study, and traveling purposes",
            "To understand Chinese culture to its root",
            "To adapt another tongue rolling and twister",
            "To adapt new language skills in helping them research and understand Chine traditions and the world"
        ],
    },
    {
        id: "artsmusicanddance",
        title: "Arts Music and Dance",
        images:  ["../art001.jpg", "../art002.jpg", "../art003.jpg", "../art004.jpg", "../art005.jpg", "../art006.jpg"],
        des: 'In our daily life, arts play important roles in expressing our moods base on events and time, while at the same, it adds additional meanings to what we are missing. Students can use arts for a lot of purposes such as painting, music, or dances.',
        programmeHighlight: [
            {
                id: 1,
                color: '#0983C4',
                prHighlightBody: 'Students will able to express themselves and their feelings in many forms, especially creative arts.'
            },
            {
                id: 2,
                color: '#A7499B',
                prHighlightBody: 'Students can use their body languages to depict their ideas and skills rather than speaking or writing them out.'
            },
            {
                id: 3,
                color: '#ED2777',
                prHighlightBody: 'Students will able to get their choose in dances or music. They can express themselves and relax in either of them.'
            },
            {
                id: 4,
                color: '#0983C4',
                prHighlightBody: 'Students can choose to do traditional or modern dances or music (guitar or piano). Or they can choose to participate in both.'
            }
        ],
        subProgramme: [
            {
                id: 1,
                lisTitle: 'Dances (Traditional and Hip Hop)',
                list: []
            },
            {
                id: 2,
                lisTitle: 'Music (Guitar and Piano)',
                list: []
            }
        ],
        howLearn: [
            "Experienced teachers in both Dance and Music Classes",
            "Hand-on experiences and practices",
            " Events"
        ],
        whatLearn: [
            "To express themselves through the dancing moves or the notes of their music",
            "To understand and write their own story art forms",
            "To find relaxation and loves",
            "To learn about the variety of art forms",
            "To see the different of art forms through interactions in dances and music"
        ],
    },
    {
        id: "computer",
        title: "Computer",
        images: ["../computer001.jpg", "../computer002.jpg", "../computer003.jpg", "../computer004.jpg", "../computer005.jpg", "../computer006.jpg"],
        des: 'Cambodia is a developing country, where a lot of industries are growing and those are also including technology. To improve the standards in technology, students have to start and work with basic computer skills.',
        programmeHighlight: [
            {
                id: 1,
                color: '#0983C4',
                prHighlightBody: 'Students will be able to graduate with a promising in computer skills to perform in their educations or workplace.'
            },
            {
                id: 2,
                color: '#A7499B',
                prHighlightBody: 'The world is moving toward technological world, where working and studying require technological skills. Students will have skillset in Microsoft Word, Excel, and Powerpoint.'
            },
            {
                id: 3,
                color: '#ED2777',
                prHighlightBody: 'Not only that, students will be gaining a lot of skills such confidence and leadership besides computer skills from the classes.'
            },
            
        ],
        subProgramme: [],
        howLearn: [
            "Basic Computer Skill",
            "Design",
            "Teachers who obtained Information Technology Bachelor Degree",
            "Hand-on experiences in typing, executing, and designing",
            "Presentations",
            "Real examples from qualified teachers"
        ],
        whatLearn: [
            "To adapt professional skills in Word, Excel, and PowerPoint",
            "To use these skills in their workplace and their studies",
            "To learn and lead in computer basic skills",
            "To design and express themselves by using technological tools and ideas",
            "To research and compose different documentation besides pens and pencils",
            "To adapt computer language"
        ],
    }

]
