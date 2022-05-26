import React, { useEffect } from "react";
import {
  Text,
  Box,
  LinkBox,
  LinkOverlay,
  Heading,
  Link,
  Spacer,
  Flex,
  Center,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import { reactLocalStorage } from "reactjs-localstorage";
import TestResult from "./TestResult";
import { GET_CERTIFICATE } from "../../../Schema/ApolloSchema";
import { useQuery } from "@apollo/client";

export default function PlacementCard({
  scoreBySubjects,
  programme,
  placement,
  placementId,
  loadingPlacementData,
}) {
  const { data } = useQuery(GET_CERTIFICATE, {
    variables: {
      placementId: placementId._id,
    },
  });

  useEffect(() => {
    reactLocalStorage.set(placementId._id, programme);
    // console.log(data?.getResultCertificate?.programme?.name);
  }, []);

  const w_box = { md: "40vw", lg: "27vw", xl: "18vw" };

  if (loadingPlacementData) {
    return (
      <Box padding="6" boxShadow="md" bg="white">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" />
      </Box>
    );
  }

  return (
    <Center>
      <LinkBox
        width={w_box}
        bg="white"
        as="article"
        maxW="sm"
        p="20px"
        mt="25px"
        borderWidth="1px"
        rounded="md"
      >
        <Box
          as="time"
          color="brand.100"
          dateTime="2021-01-15 15:30:00 +0000 UTC"
        >
          {programme}
        </Box>
        <Heading size="md" my="2" color="brand.102" mb="30px">
          <LinkOverlay>{placement}</LinkOverlay>
        </Heading>
        <Box as="a" color="brand.100">
          {scoreBySubjects &&
            scoreBySubjects.map((e) => (
              <Box>
                {e.score === 0 ? (
                  <Link href={`start-quiz?id=${e.id}`}>
                    <Text color="brand.100" fontWeight="500">
                      {e.subject}
                    </Text>
                  </Link>
                ) : (
                  <Text color="red">{e.subject}</Text>
                )}

                <Flex>
                  <Text mb="3" color="brand.101">
                    {parseInt(e.timer) / 60} minutes
                  </Text>
                  <Spacer />
                </Flex>
              </Box>
            ))}
        </Box>
        <TestResult
          stuName={data?.getResultCertificate?.student?.name}
          dateOfBirth={data?.getResultCertificate?.student?.dateOfBirth}
          curreneEDU={data?.getResultCertificate?.placement?.name}
          from={data?.getResultCertificate?.student?.transferFrom}
          testDate={data?.createAt}
          resultDate={data?.createAt}
          subject={data?.getResultCertificate?.scoreBySubjects}
          programme={data?.getResultCertificate?.programme?.name}
          sub1={data?.getResultCertificate?.scoreBySubjects[0]?.score}
          sub2={data?.getResultCertificate?.scoreBySubjects[1]?.score}
          placementId={placementId._id}
        />
      </LinkBox>
    </Center>
  );
}
