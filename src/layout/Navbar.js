import React from "react";
import {
  Flex,
  Heading,
  HStack,
  Text,
  Button,
  Box,
  IconButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex align="center" justify="center">
      <Flex
        as="nav"
        position="fixed"
        top="0"
        w={{ base: "100%", md: "100%" }}
        // borderRadius={{ base: "none", md: "10px" }}
        // mt={{ base: "0", md: 6 }}
        px={{ base: 4, md: 10 }}
        py={4}
        align="center"
        justify="space-between"
        bg="white"
        zIndex={1000}
        // borderBottom="1px solid"
        // borderColor="gray.100"
        boxShadow="0 8px 30px rgba(0, 0, 0, 0.08)"
        // bg="rgba(253, 253, 253, 0.76)" // 👈 opacity here
      >
        {/* Logo */}
        <Heading fontSize="lg">Voranex</Heading>

        {/* Desktop Menu */}
        <HStack spacing={8} display={{ base: "none", md: "flex" }}>
          <Text cursor="pointer">How it works</Text>
          <Text cursor="pointer">Markets</Text>
          <Text cursor="pointer">About</Text>
          <Text cursor="pointer">FAQ</Text>
        </HStack>

        {/* Desktop CTA */}
        <Button
          size="sm"
          bg="brandBlue.500"
          color="white"
          borderRadius={"full"}
          display={{ base: "none", md: "inline-flex" }}
          _hover={{ bg: "brandBlue.600" }}
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
          py={4}
          borderBottom="1px solid"
          borderColor="gray.100"
          backdropFilter="blur(12px)"
        >
          <VStack align="start" spacing={4}>
            <Text>How it works</Text>
            <Text>Markets</Text>
            <Text>About</Text>
            <Text>FAQ</Text>
            <Button
              w="full"
              bg="brandBlue.500"
              color="white"
              borderRadius={"full"}
              _hover={{ bg: "brandBlue.600" }}
            >
              Get Started
            </Button>
          </VStack>
        </Box>
      )}
    </Flex>
  );
}
