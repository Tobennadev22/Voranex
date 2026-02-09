import { Box, Flex, Text, HStack, Link } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box bg="gray.900" color="gray.300" py={6}>
      <Flex
        maxW="1200px"
        mx="auto"
        px={6}
        align="center"
        justify="space-between"
        direction={{ base: "column", md: "row" }}
        gap={4}
      >
        <Text fontSize="sm">
          © {new Date().getFullYear()} Voranex. All rights reserved.
        </Text>

        <HStack spacing={6}>
          <Link href="#" fontSize="sm">
            Privacy
          </Link>
          <Link href="#" fontSize="sm">
            Terms
          </Link>
          <Link href="#" fontSize="sm">
            Contact
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
}
