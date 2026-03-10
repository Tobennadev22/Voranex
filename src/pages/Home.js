import {
  Box,
  Heading,
  Text,
  Button,
  SimpleGrid,
  VStack,
  List,
  ListItem,
  ListIcon,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Grid,
  GridItem,
  Badge,
  Container,
  Flex,
  Stack,
} from "@chakra-ui/react";

// import Button from "../components/Button";
import { CheckCircleIcon, CloseIcon } from "@chakra-ui/icons";
import VoranexImage1 from "../assets/voranexImage1.jpg";
import VoranexImage2 from "../assets/voraneximg3.jpg";
import VoranexImage3 from "../assets/voraneximg4.png";
import Egypt from "../assets/Egypt.png";
import Ghana from "../assets/Ghana.png";
import Kenya from "../assets/Kenya.png";
import Nigeria from "../assets/Nigeria.png";
import SouthAfrica from "../assets/SouthAfrica.png";
import Companies from "../assets/companies.png";

import TypingTextRotator from "../util/Typer";

// import Africa from "../assets/map.png";

// import { motion } from "framer-motion";

// const MotionBox = motion(Box);

function Home() {
  return (
    <div>
      <Hero />
      <Steps />
      <OURVALUE />
      <WhoWeServe />
      <HowItWorks />
      <StorySection />
      <CountriesSection />
      <FAQ />
    </div>
  );
}

function Hero() {
  return (
    <Box
      as="section"
      pt={[32, 48, 48]}
      pb={[18, 32, 32]}
      textAlign="center"
      bg="gradientColor.200"
      borderRadius="2xl"
      mx={{ base: 2, md: 12 }}
      mb={10}
      mt={[1, 2, 2]}
    >
      <Text
        fontSize="sm"
        letterSpacing="wider"
        mb={8}
        py={2}
        px={6}
        borderRadius={20}
        bg="bgCustom.600"
        width={"fit-content"}
        mx="auto"
        color="Accent1.50"
      >
        YOUR OPERATING LAYER IN AFRICA
      </Text>
      <Heading
        fontSize={{ base: "2xl", md: "5xl" }}
        maxW="900px"
        mx="auto"
        p={2}
      >
        <TypingTextRotator
          texts={["OPERATE", "SELL", "AND SCALE"]}
          fontWeight="Semibold"
          color="bgCustom.600"
          textAlign="center"
        />
        ACROSS AFRICA
      </Heading>
      <Heading
        fontSize={{ base: "xl", md: "3xl" }}
        maxW="900px"
        mx="auto"
        fontWeight={"light"}
      >
        <em> WITHOUT LOCAL PRESENCE OR UNMANAGED RISK</em>
      </Heading>
      <Text
        maxW={{ base: "100%", md: "640px" }}
        mx="auto"
        mt={6}
        textColor={"gray.500"}
        fontSize={{ base: "14px", md: "18px" }}
      >
        Voranex helps global B2B technology companies expand into African
        markets through structured execution, local operating infrastructure,
        and real market validation.
      </Text>

      <Button
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
      </Button>
    </Box>
  );
}

function OURVALUE() {
  return (
    <Box
      color="DarkText50"
      py={{ base: 10, md: 16 }}
      px={{ base: 4, md: 10 }}
      borderRadius="2xl"
      my={{ base: 12, md: 20 }}
      mx={{ base: 2, md: 12 }}
    >
      <Box textAlign="center">
        <Heading
          mb={2}
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="medium"
        >
          OUR MISSION & VISION
        </Heading>
      </Box>

      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 8, md: 6 }}
        maxW="1400px"
        mx="auto"
        pt={{ base: 10, md: "48px" }}
      >
        {/* CARD 1 */}

        <Box
          color="DarkText.50"
          py={{ base: 8, md: 12 }}
          px={{ base: 6, md: 12 }}
          borderRadius="16px"
          bg="#f9f9f9"
        >
          <Heading
            fontSize={{ base: "xl", md: "2xl" }}
            mb={4}
            textAlign={{ base: "center", md: "left" }}
            fontWeight="bold"
          >
            OUR COMMITMENT TO GROWTH AND IMPACT
          </Heading>

          <Text
            textAlign={{ base: "center", md: "left" }}
            color="gray.500"
            mb={{ base: 8, md: 12 }}
            fontSize={{ base: "sm", md: "md" }}
          >
            To be the most trusted and accountable operating partner for global
            technology companies expanding into Africa.
          </Text>

          <Box
            position="relative"
            overflow="hidden"
            borderRadius="xl"
            role="group"
            cursor="pointer"
          >
            <Image
              src={VoranexImage2}
              alt="voranex-img"
              borderRadius="10px"
              w="100%"
              h={{ base: "200px", md: "300px" }}
              objectFit="cover"
              transition="transform 0.4s ease-in-out"
              _groupHover={{
                transform: "scale(1.05)",
              }}
            />

            <Box
              position="absolute"
              inset="0"
              bg="blackAlpha.600"
              opacity="0"
              transition="opacity 0.4s ease"
              display="flex"
              alignItems="center"
              justifyContent="center"
              _groupHover={{ opacity: 1 }}
            >
              <Text
                color="white"
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="bold"
                transform="translateY(20px)"
                transition="all 0.4s ease"
                _groupHover={{ transform: "translateY(-10px)" }}
              >
                Partnership with Impact
              </Text>
            </Box>
          </Box>
        </Box>

        {/* CARD 2 */}

        <Box
          color="grey.100"
          py={{ base: 8, md: 12 }}
          px={{ base: 6, md: 12 }}
          borderRadius="16px"
          bg="#f1f4f8"
        >
          <Heading
            fontSize={{ base: "xl", md: "2xl" }}
            mb={4}
            textAlign={{ base: "center", md: "left" }}
            fontWeight="bold"
          >
            DEDICATED TO EXCELLENCE AND INNOVATION
          </Heading>

          <Text
            textAlign={{ base: "center", md: "left" }}
            mb={6}
            color="gray.500"
            fontSize={{ base: "sm", md: "md" }}
          >
            Enable global technology companies to operate, sell, and scale
            across Africa through reliable execution, local infrastructure, and
            measurable outcomes.
          </Text>

          <Box
            position="relative"
            overflow="hidden"
            borderRadius="xl"
            role="group"
            cursor="pointer"
          >
            <Image
              src={VoranexImage3}
              alt="voranex-img"
              borderRadius="10px"
              w="100%"
              h={{ base: "200px", md: "300px" }}
              objectFit="cover"
              transition="transform 0.4s ease-in-out"
              _groupHover={{
                transform: "scale(1.05)",
              }}
            />

            <Box
              position="absolute"
              inset="0"
              bg="blackAlpha.600"
              opacity="0"
              transition="opacity 0.4s ease"
              display="flex"
              alignItems="center"
              justifyContent="center"
              _groupHover={{ opacity: 1 }}
            >
              <Text
                color="white"
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="bold"
              >
                Across Africa
              </Text>
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
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
      bg="bgCustom.900"
      // bg="gradientColor.100"
      color="DarkText.50"
      py={20}
      borderRadius="2xl"
      mx={{ base: 2, md: 12 }}
      mb={10}
      mt={[4, 12, 12]}
    >
      <Heading
        textAlign="center"
        mb={[4, 2, 2]}
        w={{ base: "100%", md: "100%" }}
        fontSize={{ base: "xl", md: "3xl" }}
        color="Accent1.50"
        fontWeight="medium"
        px={2}
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
        textColor={"gray.500"}
        fontSize={{ base: "12px", md: "16px" }}
      >
        Africa presents significant growth opportunities for global technology
        companies <br></br> but most expansion efforts fail due to execution
        risk, rather than a lack of demand.
      </Text>
      <SimpleGrid columns={{ base: 1, md: 5 }} spacing={8} px={10}>
        {steps.map((step, i) => {
          return (
            <VStack
              key={step}
              spacing={2}
              bg={step.Shade}
              py={8}
              borderRadius={12}
              border="1px"
              borderColor="gray.500"
            >
              <Heading fontSize="5xl" fontWeight="semibold" color="Accent1.50">
                {i + 1}
              </Heading>
              <Text
                textAlign={"center"}
                fontSize={"16px"}
                fontWeight={"bold"}
                textColor={"white"}
              >
                {step.Title}
              </Text>
              <Text textAlign={"center"} textColor={"gray.300"}>
                {step.Body}
              </Text>
            </VStack>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}

function WhoWeServe() {
  const Wenot = [
    "A strategy or advisory consultancy",
    "A strategy or advisory consultancy",
    "A network of middlemen or introduction brokers",
  ];

  const Weare = [
    "We are an operating partner responsible for execution",
    "We are outcome-driven, not hour-driven",
    "Structured to provide clarity, control, and accountability",
  ];

  return (
    <Box
      textAlign="center"
      bg="lemonColor.10"
      w="100%"
      color="DarkText.50"
      py={{ base: 12, md: 20 }}
      px={{ base: 6, md: 12 }}
      borderRadius="2xl"
      mb={10}
      mt={{ base: 6, md: 10 }}
    >
      <Heading mb={3} fontSize={{ base: "xl", md: "3xl" }} fontWeight="medium">
        VORANEX IS NOT A CONSULTING FIRM
      </Heading>

      <Text mb={10} maxW="700px" mx="auto" fontSize={{ base: "sm", md: "md" }}>
        VORANEX is an execution-led operating layer for global companies
        expanding into Africa.
      </Text>

      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, md: 12 }}
        maxW="1100px"
        mx="auto"
        alignItems="center"
        textAlign={{ base: "left", md: "left" }}
      >
        {/* TEXT SECTION */}
        <Box>
          {/* We are not */}
          <Box mb={10}>
            <Heading fontSize={{ base: "lg", md: "2xl" }} mb={4}>
              We are not
            </Heading>

            <List spacing={4}>
              {Wenot.map((item, index) => (
                <ListItem key={index} display="flex" alignItems="flex-start">
                  <ListIcon as={CheckCircleIcon} color="gray.300" mt="4px" />
                  {item}
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Who we are */}
          <Box>
            <Heading fontSize={{ base: "lg", md: "2xl" }} mb={4}>
              Who we are
            </Heading>

            <List spacing={4}>
              {Weare.map((item, index) => (
                <ListItem key={index} display="flex" alignItems="flex-start">
                  <ListIcon
                    as={CheckCircleIcon}
                    color="lemonColor.600"
                    mt="4px"
                  />
                  {item}
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>

        {/* IMAGE */}
        <Box>
          <Image
            src={VoranexImage1}
            alt="Voranex"
            borderRadius="lg"
            w="100%"
            h={{ base: "250px", md: "auto" }}
            objectFit="cover"
          />
        </Box>
      </SimpleGrid>
    </Box>
  );
}

// This is the FAQ section

const faqs = [
  {
    question: "Can companies sell in Africa without registering locally?",
    answer:
      "Yes. Companies can test demand and operate through structured interim execution models before establishing local entities where required.",
  },
  {
    question: "Is Voranex a consulting firm?",
    answer:
      "No. Voranex is an execution-led operating partner responsible for real market activity and validation.",
  },
  {
    question: "Which industries does Voranex support?",
    answer:
      "Primarily B2B SaaS, fintech infrastructure, enterprise software, and API-driven technology platforms.",
  },
  {
    question: "Who owns customer relationships and revenue?",
    answer:
      "The client retains full ownership. Voranex operates as an independent execution partner",
  },
];

function FAQ() {
  return (
    <Box maxW="1100px" mx="auto" py={16} px={6} id="faq">
      <Heading
        textAlign="center"
        fontSize={["2xl"]}
        mb={10}
        color="DarkText.50"
      >
        Frequently Asked Questions
      </Heading>

      <Accordion allowToggle>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} border="none" mb={4}>
            <AccordionButton
              _expanded={{ bg: "#f9f9f9", color: "brandRed.600" }}
              p={5}
              borderRadius="md"
              boxShadow="sm"
            >
              <Box flex="1" textAlign="left" fontWeight="semibold">
                {faq.question}
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4} pt={2} color="gray.600">
              {faq.answer}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
}

const steps = [
  {
    step: "Phase 1",
    title: "Market Validation (30–60 Days)",
    desc: "We determine whether expansion into a specific African market is commercially and operationally viable before significant commitments are made.",
    items: [
      {
        id: 1,
        text: "Customer discovery and stakeholder interviews",
      },
      {
        id: 2,
        text: "Pricing and willingness-to-pay validation",
      },
      {
        id: 3,
        text: "Sales channel and partnership testing",
      },
      {
        id: 4,
        text: "Regulatory feasibility assessment",
      },
      {
        id: 5,
        text: "Payment infrastructure and FX review",
      },
    ],
    img: "/images/install.png",
    active: true,
  },
  {
    step: "Phase 2",
    title: "Operate Without Physical Presence (90 Days)",
    desc: "Once viability is confirmed, Voranex becomes your operating layer.",
    items: [
      {
        id: 1,
        text: "Customer discovery and stakeholder interviews",
      },
      {
        id: 2,
        text: "Pricing and willingness-to-pay validation",
      },
      {
        id: 3,
        text: "Sales channel and partnership testing",
      },
      {
        id: 4,
        text: "Regulatory feasibility assessment",
      },
      {
        id: 5,
        text: "Payment infrastructure and FX review",
      },
    ],
    img: "/images/ai-tasks.png",
  },
  {
    step: "Phase 3",
    title: "Scale or Transition",
    desc: "Once markets are proven, Voranex supports long-term expansion.",
    items: [
      {
        id: 1,
        text: "Customer discovery and stakeholder interviews",
      },
      {
        id: 2,
        text: "Pricing and willingness-to-pay validation",
      },
      {
        id: 3,
        text: "Sales channel and partnership testing",
      },
      {
        id: 4,
        text: "Regulatory feasibility assessment",
      },
      {
        id: 5,
        text: "Payment infrastructure and FX review",
      },
    ],
    img: "/images/explore.png",
  },
];

function HowItWorks() {
  return (
    <Box bg="gray.50" py={24} id="how-it-works">
      <Container maxW="6xl">
        <VStack spacing={4}>
          {/* Heading */}
          <Heading
            textAlign="center"
            fontSize={{ base: "xl", md: "3xl" }}
            color="DarkText.50"
            fontWeight="medium"
            maxW="600px"
          >
            HOW THE VORANEX LAUNCHPAD™ WORKS
          </Heading>
          <Text
            textAlign="center"
            color="gray.600"
            mb={{ base: "14px", md: "18px" }}
            fontSize={{ base: "14px", md: "16px" }}
            maxW="700px"
          >
            The Voranex LaunchPad™ is a structured expansion framework designed
            to help companies test, operate, and scale across African markets
            with confidence.
          </Text>

          {/* Steps */}
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
            gap={8}
            w="100%"
          >
            {steps.map((item, index) => (
              <GridItem key={index}>
                <Box
                  p={6}
                  border="1px solid"
                  borderColor="gray.200"
                  borderRadius="lg"
                  h="100%"
                  bg="white"
                  _hover={{
                    backgroundColor: "black",
                    color: "white",
                    transition: "0.5 ease",
                  }}
                >
                  <VStack align="start" spacing={4}>
                    {/* Step Badge */}
                    <Badge
                      px={3}
                      py={1}
                      borderRadius="md"
                      bg={item.active ? "red" : "gray.100"}
                      color={item.active ? "white" : "gray.600"}
                      fontSize="xs"
                    >
                      {item.step}
                    </Badge>

                    {/* Title */}
                    <Text fontWeight="semibold" fontSize="md">
                      {item.title}
                    </Text>

                    {/* Description */}
                    <Text
                      fontSize="sm"
                      color="gray.600"
                      _hover={{ color: "gray.300" }}
                    >
                      {item.desc}
                    </Text>

                    <ul
                      style={{
                        paddingLeft: "20px",
                        color: "gray.600",
                        fontSize: "14px",
                      }}
                      _hover={{ color: "gray.300" }}
                    >
                      {item.items?.map((subitem, id) => (
                        <li key={id}>{subitem.text}</li>
                      ))}
                    </ul>

                    {/* Illustration */}
                    {/* <Image
                      src={item.img}
                      alt={item.title}
                      mt={4}
                      opacity={0.6}
                    /> */}
                  </VStack>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
}

function CountriesSection() {
  const countries = [
    {
      name: "Nigeria",
      desc: "West Africa's largest economy and market.",
      img: Nigeria,
    },
    {
      name: "Kenya",
      desc: "East Africa's innovation and logistics hub.",
      img: Kenya,
    },
    {
      name: "Ghana",
      desc: "A fast-growing trade and investment destination.",
      img: Ghana,
    },
    {
      name: "South Africa",
      desc: "Africa's most industrialized economy.",
      img: SouthAfrica,
    },
    {
      name: "Egypt",
      desc: "Gateway between Africa and the Middle East.",
      img: Egypt,
    },
  ];

  return (
    <Box
      bg="gray.50"
      py={{ base: 16, md: 24 }}
      px={{ base: 6, md: 12 }}
      position="relative"
      overflow="hidden"
      id="markets"
    >
      {/* Heading */}
      <VStack spacing={4} mb={14}>
        <Heading fontSize={{ base: "2xl", md: "3xl" }} fontWeight={"medium"}>
          MARKET COVERAGE
        </Heading>
        <Text maxW="600px" color="gray.600">
          Markets Where Voranex Operates
        </Text>
      </VStack>

      {/* Countries Grid */}
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 5 }}
        spacing={8}
        maxW="1200px"
        mx="auto"
      >
        {countries.map((country) => (
          <Box
            key={country.name}
            bg="white"
            p={6}
            borderRadius="xl"
            boxShadow="sm"
            mx="auto"
            transition="all 0.3s"
            _hover={{
              transform: "translateY(-6px)",
              boxShadow: "xl",
            }}
          >
            <img
              src={country.img}
              alt={`${country.name} flag`}
              style={{
                width: "30%",
                borderRadius: "8px",
                marginBottom: "16px",
              }}
            />
            <Heading fontSize="lg" mb={2}>
              {country.name}
            </Heading>
            <Text fontSize="sm" color="gray.500">
              {country.desc}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

function StorySection() {
  return (
    <Box py={{ base: 12, md: 20 }} px={{ base: 4, md: 12 }}>
      <Flex
        maxW="1200px"
        mx="auto"
        align="center"
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        gap={{ base: 10, md: 16 }}
      >
        {/* RIGHT IMAGE */}

        <Box flex="1" position="relative">
          <Box
            bg="gray.100"
            position="absolute"
            top="-20px"
            left="-20px"
            w="80%"
            h="80%"
            borderRadius="2xl"
            zIndex={0}
          />

          <Image
            src={Companies}
            alt="companies"
            borderRadius="2xl"
            position="relative"
            zIndex={1}
            boxShadow="xl"
          />
        </Box>

        {/* LEFT CONTENT */}

        <Box flex="1">
          <Heading
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="medium"
            mb={4}
            lineHeight="1.3"
          >
            WHO WE WORK WITH <br />
          </Heading>

          <Box>
            <Text
              color="gray.500"
              mb={6}
              fontSize={{ base: "14px", md: "18px" }}
              fontWeight="medium"
            >
              Built for Serious Expansion
            </Text>

            <Stack spacing={3}>
              <Flex align="center" gap={3}>
                <CheckCircleIcon color="lemonColor.600" />
                <Text>B2B SaaS companies</Text>
              </Flex>

              <Flex align="center" gap={3}>
                <CheckCircleIcon color="lemonColor.600" />
                <Text>Fintech and payment infrastructure platforms</Text>
              </Flex>

              <Flex align="center" gap={3}>
                <CheckCircleIcon color="lemonColor.600" />
                <Text>API and developer-focused platforms</Text>
              </Flex>
              <Flex align="center" gap={3}>
                <CheckCircleIcon color="lemonColor.600" />
                <Text>Technology companies with 10–200 employees</Text>
              </Flex>
              <Flex align="center" gap={3}>
                <CheckCircleIcon color="lemonColor.600" />
                <Text>Companies already generating revenue</Text>
              </Flex>
            </Stack>
          </Box>

          <Box>
            <Text
              color="gray.500"
              my={6}
              fontSize={{ base: "14px", md: "18px" }}
              fontWeight="medium"
            >
              Not Built For
            </Text>

            <Stack spacing={3}>
              <Flex align="center" gap={3}>
                <CloseIcon color="brandRed.600" />
                <Text>Idea-stage startups</Text>
              </Flex>

              <Flex align="center" gap={3}>
                <CloseIcon color="brandRed.600" />
                <Text>Donor-funded or pilot-only initiatives</Text>
              </Flex>

              <Flex align="center" gap={3}>
                <CloseIcon color="brandRed.600" />
                <Text>Advisory-only engagements</Text>
              </Flex>
            </Stack>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default Home;
