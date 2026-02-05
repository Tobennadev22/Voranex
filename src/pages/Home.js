import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import RevealOnScrollFadeDown from "../util/RevealOnScrolFadeDown";
import TypingTextRotator from "../util/Typer";
import Map from "../assets/map.png";

import { motion } from "framer-motion";

const MotionBox = motion(Box);

function Home() {
  return (
    <div>
      <Hero />
      <Steps />
      <WhoWeServe />
      <Features />
      <CTA />
    </div>
  );
}

function Hero() {
  return (
    <Box
      as="section"
      pt={24}
      pb={32}
      textAlign="center"
      bgImage={Map}
      bgRepeat="no-repeat"
      bgPosition="center"
      bgAttachment={"fixed"}
    >
      <MotionBox
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1 }}
        position="absolute"
        inset="0"
        // bgImage={Map}
        // bgRepeat="no-repeat"
        // bgPosition="center"
      />
      <Text
        fontSize="sm"
        letterSpacing="wider"
        mb={8}
        p={2}
        borderRadius={20}
        bg="gradientColor.50"
        width={"fit-content"}
        mx="auto"
        color="#fff"
      >
        B2B TECHNOLOGY COMPANIES ONLY
      </Text>
      <Heading fontSize={{ base: "3xl", md: "5xl" }} maxW="900px" mx="auto">
        <TypingTextRotator
          texts={["OPERATE", "SELL", "AND SCALE"]}
          // fontSize={["32px", "48px", "54px"]}
          fontWeight="Semibold"
          color="brandBlue.600"
          textAlign="center"
        />
        ACROSS AFRICA
      </Heading>
      <Heading
        fontSize={{ base: "2xl", md: "3xl" }}
        maxW="900px"
        mx="auto"
        FontWeight={"light"}
      >
        <em> WITHOUT LOCAL PRESENCE OR UNMANAGED RISK</em>
      </Heading>
      <Text maxW="640px" mx="auto" mt={6} color="gray.600">
        VORANEX helps global B2B technology companies operate and generate
        revenue across African markets through reliable execution, local
        infrastructure, and measurable outcomes — without premature
        incorporation, fragmented partnerships, or on-the-ground exposure.
      </Text>
      <Button
        mt={8}
        size="lg"
        bg="brandBlue.500"
        textColor={"#fff"}
        _hover={{ bg: "brandBlue.600" }}
        as="a"
        href="https://tally.so/r/zxNRP1"
        target="_blank"
        rel="noopener noreferrer"
      >
        Book a Call
      </Button>
    </Box>
  );
}

function Steps() {
  const steps = [
    {
      Title: "Enviroment",
      Body: "Complex and fragmented regulatory environments",
      // Shade: "Orange",
    },
    {
      Title: "Accoutability",
      Body: "Difficulty finding trusted, accountable local execution partners",
      // Shade: "blue",
    },
    {
      Title: "Pressure",
      Body: "Pressure to incorporate locally before the market is proven",
    },
    {
      Title: "Markets",
      Body: "Multiple markets with different realities, not one “Africa”",
    },
    {
      Title: "Execution",
      Body: "No single party responsible for execution outcomes",
    },
  ];
  return (
    <RevealOnScrollFadeDown>
      <Box
        //   bg="brandBlue.600"
        bg="gradientColor.100"
        color="white"
        py={20}
        borderRadius="2xl"
        mx={{ base: 6, md: 12 }}
      >
        <Heading textAlign="center" mb={2} w={{ base: "100%", md: "100%" }}>
          WHY EXPANDING INTO AFRICA IS <br></br>HARD FOR GLOBAL TECH COMPANIES
        </Heading>
        <Text
          textAlign="center"
          justifyContent={"center"}
          alignItems={"center"}
          mx="auto"
          mb={10}
          w={["100%", 600, "100%"]}
        >
          Africa presents significant growth opportunities for global technology
          companies <br></br> but most expansion efforts fail due to execution
          risk, rather than a lack of demand.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 5 }} spacing={8} px={10}>
          {steps.map((step, i) => (
            <VStack
              key={step}
              spacing={2}
              bg={step.Shade}
              py={8}
              borderRadius={12}
              border="1px"
              borderColor="gray.200"
            >
              <Heading fontSize="5xl" fontWeight="light">
                {i + 1}
              </Heading>
              <Text textAlign={"center"} fontSize={"16px"} fontWeight={"bold"}>
                {step.Title}
              </Text>
              <Text textAlign={"center"}>{step.Body}</Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Box>
    </RevealOnScrollFadeDown>
  );
}

function WhoWeServe() {
  const items = ["Global Enterprises", "African Businesses", "Fintechs & PSPs"];
  return (
    <Box py={24} textAlign="center">
      <Heading mb={2}>
        VORANEX IS AN AFRICA OPERATING PARTNER <br></br> — NOT A CONSULTING FIRM
      </Heading>
      <Text mb={8}>
        VORANEX is an execution-led operating layer for global companies
        expanding into Africa.
      </Text>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={6}
        maxW="1100px"
        mx="auto"
      >
        {items.map((item) => (
          <Box key={item} color="grey.700" p={8} borderRadius="lg">
            <Heading fontSize="xl" mb={3}>
              {item}
            </Heading>
            <Text fontSize="sm">
              Flexible payment infrastructure designed for scale.
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

function Features() {
  const features = [
    "One Unified Stack",
    "Borderless Account Numbers",
    "Enterprise-grade Compliance",
    "Built for Builders",
  ];
  return (
    <Box py={24} bg="gray.50">
      <Heading textAlign="center" mb={12}>
        Why Businesses Choose Spotflow
      </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={8}
        maxW="1000px"
        mx="auto"
      >
        {features.map((feature) => (
          <Box key={feature} p={8} bg="white" borderRadius="lg" shadow="sm">
            <Heading fontSize="lg" mb={2}>
              {feature}
            </Heading>
            <Text fontSize="sm" color="gray.600">
              Built to support modern, scalable payment operations.
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

function CTA() {
  return (
    <Box bg="black" py={20} color="white">
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        maxW="1100px"
        mx="auto"
        px={6}
      >
        <Heading fontSize="2xl">Ready to Scale Without Borders?</Heading>
        <Button mt={{ base: 6, md: 0 }} size="lg" colorScheme="green">
          Talk to Sales
        </Button>
      </Flex>
    </Box>
  );
}
export default Home;
