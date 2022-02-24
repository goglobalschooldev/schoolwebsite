import React, { useState } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useToast,
} from "@chakra-ui/react";
import { MdAddCircleOutline } from 'react-icons/md';
import { Center, Flex, Button, Icon, useDisclosure, Text, Select } from '@chakra-ui/react';
import { GET_PROGRAMME, GET_LEVEL, GET_PLACEMENT_TEST, CREATE_RESULT, GET_SUBJECT_BY_PLACEMENT, GET_PLACEMENTID_BY_STUDENT } from '../../../Schema/ApolloSchema'
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from 'next/router'

export default function AddProgrammeBtn({ studentId }) {
    const router = useRouter()

    const toast = useToast()
    const arrayObject = []
    const [programmeId, setProgrammeId] = useState('')
    const [levelId, setLevelId] = useState('')
    const [PlacementId, setPlacementId] = useState('')

    const [size, setSize] = useState("md");
    const [closeLevel, setCloseLevel] = useState(true);
    const [closePlacement, setClosePlacement] = useState(true);

    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const { data: programmes } = useQuery(GET_PROGRAMME);
    const { data: levels } = useQuery(GET_LEVEL, {
        variables: {
            programmeId
        }
    });
    const { data: placements } = useQuery(GET_PLACEMENT_TEST, {
        variables: {
            levelId
        }
    });
    const { data: subject } = useQuery(GET_SUBJECT_BY_PLACEMENT, {
        variables: {
            placementId: PlacementId
        }
    });
    const { data: gradeCreated } = useQuery(GET_PLACEMENTID_BY_STUDENT, {
        variables: {
            studentId
        }
    })

    const [resultCreate] = useMutation(CREATE_RESULT)

    const handleClick = (newSize) => {
        setSize(newSize)
        onOpen()
    }
    return (
        <>
            <Button
                bg="brand.100"
                borderWidth='1px'
                borderColor='brand.100'
                w="fit-content"
                h="40px"
                mt="10px"
                color="white"
                align="center"
                fontFamily="Segoe UI"
                fontSize="17px"
                fontWeight="bold"
                borderRadius="20px"
                cursor="pointer"
                onClick={() => handleClick(size)}
            >
                <Center>
                    <Flex>
                        <Icon as={MdAddCircleOutline} m="0px 5px 0px 0px" fontSize='23px' />
                        <Text> Add Placement</Text>
                    </Flex>
                </Center>
            </Button>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create Question</DrawerHeader>
                    <DrawerBody>
                        <Text
                            color="#707070"
                            fontSize="14px"
                            mt="20px"
                            mb="10px"
                        >
                            Programme
                        </Text>
                        <Select
                            placeholder="Select Programme"
                            onChange={
                                e => {
                                    setProgrammeId(e.target.value)
                                    setCloseLevel(false)
                                }
                            }
                        >
                            {
                                programmes &&
                                programmes.getProgrammes.map(pro =>
                                    <option
                                        key={pro._id}
                                        value={pro._id}
                                    >
                                        {pro.name}
                                    </option>
                                )
                            }
                        </Select>
                        <Text
                            color="#707070"
                            fontSize="14px"
                            mt="20px"
                            mb="10px"
                        >
                            Level
                        </Text>
                        <Select
                            disabled={closeLevel}
                            placeholder="Select Level"
                            onChange={
                                e => {
                                    setLevelId(e.target.value)
                                    setClosePlacement(false)
                                }
                            }
                        >
                            {
                                programmeId && levels &&
                                levels.getLevelByProgramme.map(lv =>
                                    <option
                                        key={lv._id}
                                        value={lv._id}>
                                        {lv.name}
                                    </option>
                                )
                            }
                        </Select>
                        <Text
                            color="#707070"
                            fontSize="14px"
                            mt="20px"
                            mb="10px"
                        >
                            Placement Test
                        </Text>
                        <Select
                            disabled={closePlacement}
                            placeholder="Select Placement"
                            onChange={
                                e => {
                                    setPlacementId(e.target.value)
                                }
                            }
                        >
                            {
                                levelId && placements &&
                                placements.getPlacementByLevel.filter(grad => grad._id !== gradeCreated.getPlacementidByStu).map(plac =>
                                    <option
                                        key={plac._id}
                                        value={plac._id}
                                    >
                                        {
                                            plac.name
                                        }
                                    </option>
                                )
                            }
                        </Select>
                    </DrawerBody>
                    <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button
                            colorScheme="blue"
                            isDisabled={
                                programmeId && levelId && PlacementId ?
                                    false : true
                            }
                            onClick={() => {

                                if (subject) {
                                    subject.getSubjectByPlacement.forEach(element => {
                                        arrayObject.push({
                                            subject: element.name,
                                            timeTaken: '',
                                            score: 0,
                                            id: element._id,
                                            timer: element.timer
                                        }
                                        )
                                    })
                                }

                                resultCreate({
                                    variables: {
                                        input: {
                                            student: studentId,
                                            programme: programmeId,
                                            level: levelId,
                                            placement: PlacementId,
                                            scoreBySubjects: arrayObject
                                        },
                                    },
                                });
                                toast({
                                    title: "Add Placement.",
                                    // description: `Question: ${question}`,
                                    status: "success",
                                    duration: 3000,
                                    isClosable: true,
                                })
                                setProgrammeId('');
                                setLevelId('');
                                setPlacementId('');
                                onClose()
                                router.reload(window.location.pathname)
                            }}
                        >
                            Create
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
