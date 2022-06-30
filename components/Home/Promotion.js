import { Image, Box, Flex, Center, Text } from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";
const MotionBox = motion(Box);

export default function Promotion({ pro }) {
  const { urlBtn, title, thumbnail } = pro.fields;
  const seemore_Size = {
    base: "20px",
    sm: "22px",
    xl: "25px",
  };
  const academic_text_mt = {
    base: "100px", //0px
    sm: "100px", //320px
    md: "120px", //768px
    lg: "150px", //960px
    xl: "160px", //1200px
    "2xl": "150px", //1536px
  };
  const top = {
    base: "0px", //0px
    sm: "100px", //320px
    md: "120px", //768px
    lg: "10px", //960px
    xl: "0px", //1200px
    "2xl": "0px", //1536px
  };
  return (
    <Center>
      <Flex
        display={{
          base: "block",
          sm: "flex",
        }}
        width={{
          base: "100%",
          xl: "80%",
          "2xl": "85%",
        }}
        mt={top}
      >
        <Box
          width={{
            base: "100%",
            sm: "50%",
          }}
          mb="10px"
        >
          <Center>
            <MotionBox
              width="80%"
              mt={academic_text_mt}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1.5 }}
            >
              <Image src={"https:" + title.fields.file.url} />
              {urlBtn === undefined ? null : (
                <Box
                  fontSize={seemore_Size}
                  fontWeight="semibold"
                  color="brand.100"
                >
                  <Link href={`${urlBtn}`}>
                    <a>See More</a>
                  </Link>
                </Box>
              )}
            </MotionBox>
          </Center>
        </Box>
        <MotionBox
          width={{ base: "100%", sm: "50%" }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <Center
            display={{
              base: "flex",
              lg: "block",
              xl: "flex",
              "2xl": "block",
            }}
          >
            <Image
              src={"https:" + thumbnail.fields.file.url}
              alt="Segun Adebayo"
              width={{
                base: "80%",
                sm: "100%",
                md: "85%",
                lg: "90%",
                xl: "95%",
                "2xl": "85%",
              }}
            />
          </Center>
        </MotionBox>
      </Flex>
    </Center>
  );
}
