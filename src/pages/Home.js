import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  SimpleGrid,
  VStack,
  List,
  ListItem,
  ListIcon,
  Image,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import VoranexImage1 from "../assets/voranexImage1.jpg";

import TypingTextRotator from "../util/Typer";
import Map from "../assets/Bg-video.mp4";
import Rocket from "../assets/rocket.png";
import Bulb from "../assets/bulb.png";

// import Africa from "../assets/map.png";

// import { motion } from "framer-motion";

// const MotionBox = motion(Box);

function Home() {
  return (
    <div>
      <Hero />
      <OURVALUE />
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
      pt={48}
      pb={32}
      textAlign="center"
      position="relative"
      height="100vh"
      overflow="hidden"
      // bgImage={Map}
      // bgRepeat="no-repeat"
      // bgPosition="center"
      // bgAttachment={"fixed"}
      // height={["100vh"]}
    >
      <Box
        as="video"
        src={Map}
        autoPlay
        muted
        loop
        playsInline
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        objectFit="cover"
        zIndex={-2}
      />

      {/* Dark Overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="blackAlpha.800" // adjust darkness here
        zIndex={-1}
      />
      <Text
        fontSize="sm"
        letterSpacing="wider"
        mb={8}
        py={2}
        px={6}
        borderRadius={20}
        bg="gradientColor.50"
        width={"fit-content"}
        mx="auto"
        color="Accent1.50"
      >
        YOUR OPERATING LAYER IN AFRICA
      </Text>
      <Heading fontSize={{ base: "3xl", md: "5xl" }} maxW="900px" mx="auto">
        <TypingTextRotator
          texts={["OPERATE", "SELL", "AND SCALE"]}
          // fontSize={["32px", "48px", "54px"]}
          fontWeight="Semibold"
          color="brandBlue.500"
          textAlign="center"
        />
        <span style={{ color: "#fff" }}>ACROSS AFRICA</span>
      </Heading>
      <Heading
        fontSize={{ base: "2xl", md: "3xl" }}
        maxW="900px"
        mx="auto"
        fontWeight={"light"}
        color="Accent1.50"
      >
        <em> WITHOUT LOCAL PRESENCE OR UNMANAGED RISK</em>
      </Heading>
      <Text maxW="640px" mx="auto" mt={6} color="gray.100">
        Voranex helps global B2B technology companies expand into African
        markets through structured execution, local operating infrastructure,
        and real market validation.
      </Text>
      <Button
        mt={8}
        size="lg"
        bg="brandBlue.500"
        textColor={"Accent1.50"}
        _hover={{ bg: "brandBlue.600" }}
        as="a"
        href="https://tally.so/r/zxNRP1"
        target="_blank"
        rel="noopener noreferrer"
        borderRadius={"full"}
      >
        Get Started
      </Button>
    </Box>
  );
}

function OURVALUE() {
  return (
    <Box
      // bg="blackAlpha.900"
      // bg="brandBlue.900"
      // bg="Accent2.50"
      color="Accent1.50.50"
      py={{ base: 10, md: 16 }}
      px={{ base: 2, md: 20 }}
      borderRadius="2xl"
      my={20}
      mx={{ base: 6, md: 12 }}
    >
      <Box textAlign="center">
        <Heading mb={2} fontSize={"3xl"}>
          OUR MISSION & VISION
        </Heading>
      </Box>
      <Box>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={6}
          maxW="1100px"
          mx="auto"
          pt="48px"
        >
          <Box
            color="DarkText.50"
            py={8}
            px={2}
            borderRadius="lg"
            // border="1px"
            // borderColor="gray.700"
            // bgColor="primaryColor.100"
            w={{ base: "100%", md: "500px" }}
          >
            <img
              src={Rocket}
              alt="Rocket"
              style={{
                width: "100px",
                padding: "18px",
                marginBottom: "10px",
                backgroundColor: "#ffefdd",
                borderRadius: "4px",
              }}
              textAlign={{ base: "center", md: "left" }}
            />
            <Heading
              fontSize="xl"
              mb={3}
              textAlign={{ base: "center", md: "left" }}
            >
              {" "}
              VISION
            </Heading>
            <Text textAlign={{ base: "center", md: "left" }}>
              To be the most trusted and accountable operating partner for
              global technology companies expanding into Africa.
            </Text>
          </Box>
          <Box color="grey.100" py={8} px={2} w={{ base: "100%", md: "500px" }}>
            <img
              src={Bulb}
              alt="Bulb"
              style={{
                width: "100px",
                padding: "18px",
                marginBottom: "10px",
                backgroundColor: "#EAEFFD",
                borderRadius: "4px",
              }}
              textAlign={{ base: "center", md: "left" }}
            />
            <Heading
              fontSize="xl"
              mb={3}
              textAlign={{ base: "center", md: "left" }}
            >
              {" "}
              MISSION
            </Heading>
            <Text textAlign={{ base: "center", md: "left" }}>
              Enable global technology companies to operate, sell, and scale
              across Africa through reliable execution, local infrastructure,
              and measurable outcomes.
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
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
    <Box
      bg="brandBlue.50"
      // bg="gradientColor.100"
      color="DarkText.50"
      py={20}
      borderRadius="2xl"
      mx={{ base: 6, md: 12 }}
      mb={12}
    >
      <Heading
        textAlign="center"
        mb={2}
        w={{ base: "100%", md: "100%" }}
        fontSize={"3xl"}
        color="brandBlue.500"
      >
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
  );
}

function WhoWeServe() {
  const Weare = [
    "A strategy or advisory consultancy",
    "A strategy or advisory consultancy",
    "A network of middlemen or introduction brokers",
  ];
  const Wenot = [
    "An operating partner responsible for execution",
    "Outcome-driven, not hour-driven",
    "Structured to provide clarity, control, and accountability",
  ];
  return (
    <Box
      py={24}
      textAlign="center"
      // bgColor="bgCustom.400"
      // w={{ base: "100%", md: "100%" }}
      mx={{ base: 6, md: 12 }}
    >
      <Heading mb={2} fontSize={"3xl"} color="brandBlue.500">
        VORANEX IS NOT A CONSULTING FIRM
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
        textAlign={{ base: "center", md: "left" }}
      >
        <Box>
          <Box mb={10}>
            <Heading fontSize="2xl" mb={3}>
              Who we are
            </Heading>
            {Weare.map((item) => (
              <Box key={item} color="DarkText.50" p={2} borderRadius="lg">
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    {item}
                  </ListItem>
                </List>
              </Box>
            ))}
          </Box>

          <Box>
            <Heading fontSize="2xl" mb={3}>
              We are not
            </Heading>
            {Wenot.map((item) => (
              <Box key={item} color="DarkText.50" p={2} borderRadius="lg">
                <List spacing={3}>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    {item}
                  </ListItem>
                </List>
              </Box>
            ))}
          </Box>
        </Box>

        <Box boxSize="lg">
          <Image src={VoranexImage1} alt="Dan Abramov" borderRadius={10} />
        </Box>
      </SimpleGrid>
      {/* <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={6}
        maxW="1100px"
        mx="auto"
        textAlign={{ base: "center", md: "left" }}
      >
        <Box>
          <Heading fontSize="2xl" mb={3}>
            We are not
          </Heading>
          {Wenot.map((item) => (
            <Box key={item} color="DarkText.50" p={2} borderRadius="lg">
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  {item}
                </ListItem>
              </List>
            </Box>
          ))}
        </Box>
      </SimpleGrid> */}
      {/* <Box boxSize="sm">
        <Image src={VoranexImage1} alt="Dan Abramov" />
      </Box> */}
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
      <Heading textAlign="center" mb={12} fontSize={"3xl"}>
        Why Businesses Choose Spotflow
      </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={8}
        maxW="1000px"
        mx="auto"
      >
        {features.map((feature) => (
          <Box
            key={feature}
            p={8}
            bg="Accent1.50"
            borderRadius="lg"
            shadow="sm"
          >
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
    <Box bg="black" py={20} color="Accent1.50">
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

// This is the card section

export default Home;
