import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";
import {
  Flex,
  HStack,
  Button,
  Box,
  IconButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import voranexafrica from "../assets/Voranexafrica_logo.png";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex align="center" justify="center">
      <Flex
        as="nav"
        position="fixed"
        top="0"
        w={{ base: "100%", md: "900px" }}
        // borderRadius={{ base: "none", md: "10px" }}
        mt={{ base: "0", md: 8 }}
        px={{ base: 4, md: 10 }}
        py={{ base: 4, md: 4 }}
        align="center"
        justify="space-between"
        // spacing={4}
        // bg="#fbfbfb"
        zIndex={1000}
        borderRadius="full"
        boxShadow="0 8px 30px rgba(0, 0, 0, 0.08)"
        bg="rgba(255, 255, 250, 0.86)" // 👈 opacity here
      >
        {/* Logo */}
        {/* <Heading fontSize="lg">Voranex</Heading> */}
        <ChakraLink as={ReactRouterLink} to="/">
          <img
            src={voranexafrica}
            alt="Voranex Africa Logo"
            style={{ height: "40px" }}
          />
        </ChakraLink>
        {/* Desktop Menu */}

        <HStack spacing={8} display={{ base: "none", md: "flex" }}>
          <ChakraLink
            as={ReactRouterLink}
            to="/"
            _hover={{ textDecoration: "none", color: "brandRed.500" }}
          >
            Home
          </ChakraLink>
          <ChakraLink
            as={HashLink}
            smooth
            to="/#how-it-works"
            _hover={{ textDecoration: "none", color: "brandRed.500" }}
          >
            How it works
          </ChakraLink>
          {/* <Text cursor="pointer" fontWeight={"medium"}>
            How it works
          </Text> */}
          <ChakraLink
            as={HashLink}
            smooth
            to="/#markets"
            _hover={{ textDecoration: "none", color: "brandRed.500" }}
          >
            Markets
          </ChakraLink>
          <ChakraLink
            as={ReactRouterLink}
            to="/about"
            _hover={{ textDecoration: "none", color: "brandRed.500" }}
          >
            About
          </ChakraLink>
          {/* <Text cursor="pointer" fontWeight={"medium"}>
            About
          </Text> */}
          <ChakraLink
            as={HashLink}
            smooth
            to="/#faq"
            _hover={{ textDecoration: "none", color: "brandRed.500" }}
          >
            FAQ
          </ChakraLink>
        </HStack>

        {/* Desktop CTA */}
        <Button
          size="sm"
          bg="brandRed.500"
          color="white"
          borderRadius={"full"}
          display={{ base: "none", md: "inline-flex" }}
          _hover={{ bg: "brandRed.600" }}
          as="a"
          href="https://tally.so/r/zxNRP1"
        >
          Get Started
        </Button>

        {/* Mobile Hamburger */}
        <IconButton
          aria-label="Toggle Menu"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ base: "flex", md: "none" }}
          variant="ghost"
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {/* Mobile Menu */}
      {isOpen && (
        <Box
          position="fixed"
          top="64px"
          w="100%"
          bg="white"
          zIndex={999}
          px={6}
          py={2}
          borderBottom="1px solid"
          borderColor="gray.100"
          backdropFilter="blur(12px)"
        >
          <VStack align="start" spacing={4} pt={{ base: 4, md: 0 }}>
            <ChakraLink as={ReactRouterLink} to="/">
              Home
            </ChakraLink>
            <ChakraLink as={HashLink} smooth to="/#how-it-works">
              How it works
            </ChakraLink>
            {/* <Text cursor="pointer" fontWeight={"medium"}>
            How it works
          </Text> */}
            <ChakraLink as={HashLink} smooth to="/#markets">
              Markets
            </ChakraLink>
            <ChakraLink as={ReactRouterLink} to="/about">
              About
            </ChakraLink>

            <ChakraLink as={HashLink} smooth to="/#faq">
              FAQ
            </ChakraLink>
            <Button
              w="full"
              bg="brandRed.500"
              color="white"
              borderRadius={"full"}
              as="a"
              href="https://tally.so/r/zxNRP1"
            >
              Get Started
            </Button>
          </VStack>
        </Box>
      )}
    </Flex>
  );
}
