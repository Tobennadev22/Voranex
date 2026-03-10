import { Box, Text, Heading, Flex } from "@chakra-ui/react";
// import LanreOlokunde from "../assets/lanreolokunde.jpeg";

function About() {
  return (
    <Box>
      <AboutUs />
    </Box>
  );
}

function AboutUs() {
  return (
    <Box
      as="section"
      pt={[32, 48, 48]}
      pb={[18, 32, 32]}
      bg="bgCustomA.600"
      borderRadius="2xl"
      mx={{ base: 2, md: 12 }}
      mb={10}
      mt={[1, 2, 2]}
    >
      <Heading
        fontSize={{ base: "xl", md: "3xl" }}
        maxW="900px"
        mx="auto"
        pb={2}
        // textAlign="center"
      >
        FOUNDER NOTE
      </Heading>
      <Text
        fontSize={{ base: "xl", md: "2xl" }}
        maxW="900px"
        mx="auto"
        fontWeight={"light"}
      >
        <em> Built by an Operator — Not a Consultant</em>
      </Text>
      <Box maxW={{ base: "100%", md: "900px" }} mx="auto" mt={6}>
        <Text textColor={"gray.500"} fontSize={{ base: "14px", md: "18px" }}>
          Africa offers significant opportunity for global technology companies.
          The challenge is rarely demand. The challenge is clarity.<br></br>
          <br></br> Voranex was founded after working closely with companies
          exploring international growth and repeatedly seeing expansion fail
          due to fragmented execution. Companies were forced to choose between
          high-level advice without accountability or local execution without
          control. <br></br>
          <br></br> Voranex exists to bridge that gap. <br></br>
          <br></br> We help companies validate opportunities responsibly,
          execute when the signal is strong, and avoid costly mistakes when the
          market is not ready. <br></br>
          <br></br>
          Sometimes expansion moves forward. Sometimes it pauses. Both outcomes
          protect long-term success. <br></br> <br></br> Voranex is built for
          companies that value disciplined execution, transparency, and
          measurable outcomes.
        </Text>
        <Flex direction="column" mt={8} align="left">
          {/* <Box w="48px" borderRadius="50px">
            <img src={LanreOlokunde} alt="Lanre Olokunde" />
          </Box> */}

          <Text as="cite" fontWeight={"semibold"}>
            Olanrewaju Olokunde
          </Text>
          <Text as="em">Founder & CEO, Voranex Africa</Text>
        </Flex>
      </Box>
      {/* <Button
        mt={8}
        size={{ base: "sm", md: "lg" }}
        bg="brandRed.500"
        textColor={"Accent1.50"}
        _hover={{ bg: "brandRed.800" }}
        as="a"
        href="https://tally.so/r/zxNRP1"
        target="_blank"
        rel="noopener noreferrer"
        borderRadius={"full"}
      >
        Get Started
      </Button> */}
    </Box>
  );
}

export default About;
