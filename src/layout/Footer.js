import {
  Box,
  Flex,
  Text,
  VStack,
  IconButton,
  HStack,
  Image,
  Link,
} from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import { Link as ReactRouterLink } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";

import voranexafrica from "../assets/Voranexafrica_logo.png";

function Footer() {
  return (
    <Box bg="white" borderTop="1px solid" borderColor="gray.200">
      {/* TOP FOOTER */}
      <Flex
        maxW="1200px"
        mx="auto"
        py={{ base: 10, md: 12 }}
        px={{ base: 4, md: 8 }}
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "left", md: "flex-start" }}
        gap={{ base: 10, md: 6 }}
      >
        {/* LOGO + DESCRIPTION */}
        <Box
          maxW={{ base: "100%", md: "400px" }}
          textAlign={{ base: "left", md: "left" }}
        >
          <Image
            src={voranexafrica}
            alt="Voranex Africa Logo"
            w="180px"
            mb={4}
            mx={{ base: "0", md: "0" }}
          />

          <Text fontSize="sm" color="gray.600">
            Voranex Africa is a strategic execution and infrastructure partner
            for global technology companies expanding into Africa. Voranex
            Africa operates through Voranex Limited (England & Wales) and
            Voranex Business Limited (Nigeria).
          </Text>

          <HStack
            mt={4}
            spacing={3}
            justify={{ base: "left", md: "flex-start" }}
          >
            <IconButton
              icon={<FaFacebookF />}
              aria-label="Facebook"
              size="sm"
              isRound
            />
            {/* <IconButton
              icon={<FaTwitter />}
              aria-label="Twitter"
              size="sm"
              isRound
            /> */}
            <IconButton
              icon={<FaInstagram />}
              aria-label="Instagram"
              size="sm"
              isRound
            />
            <IconButton
              icon={<FaLinkedinIn />}
              aria-label="LinkedIn"
              size="sm"
              isRound
            />
          </HStack>
        </Box>

        {/* NAV LINKS */}
        <VStack spacing={3} align={{ base: "left", md: "flex-start" }}>
          <Text fontWeight="semibold" mb={2}>
            Quick Links
          </Text>

          <Link>Home</Link>
          <Link>How It Works</Link>
          <Link>Market</Link>
          <Link>About</Link>
          <Link>FAQ</Link>
        </VStack>

        {/* CONTACT */}
        <Box
          maxW={{ base: "100%", md: "320px" }}
          textAlign={{ base: "left", md: "left" }}
        >
          <Text fontWeight="semibold" mb={3}>
            Contact
          </Text>

          <Text fontSize="sm" color="gray.500" mb={2}>
            <em>
              <b>Lagos Address:</b>
            </em>{" "}
            19B Bishop Aboyade Cole Street, Victoria Island, Lagos, Nigeria
          </Text>

          <Text fontSize="sm" color="gray.500">
            <em>
              <b>London Address:</b>
            </em>{" "}
            71–75 Shelton Street, Covent Garden London, United Kingdom
          </Text>
        </Box>
      </Flex>

      {/* BOTTOM FOOTER */}
      <Flex
        maxW="1200px"
        mx="auto"
        py={5}
        px={{ base: 4, md: 8 }}
        borderTop="1px solid"
        borderColor="gray.200"
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        gap={4}
      >
        <Text fontSize="sm" color="gray.500" textAlign="center">
          © {new Date().getFullYear()} Voranex. All rights reserved.
        </Text>
      </Flex>
      <Text
        fontSize={{ base: "80px", md: "350px" }}
        spacing={2}
        lineHeight={{ base: "80px", md: "250px" }}
        color="gray.200"
        textAlign="center"
        fontWeight={{ base: "medium", md: "medium" }}
      >
        Voranex
      </Text>
    </Box>
  );
}

export default Footer;
