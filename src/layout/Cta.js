import { Box, Text, Heading, Flex, Button } from "@chakra-ui/react";

function Cta() {
  return (
    <Box bg="bgCustom.900" py={20} color="Accent1.50">
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        maxW="1100px"
        mx="auto"
        px={6}
      >
        <Box>
          <Heading fontSize="2xl" mb={4}>
            Explore Africa Expansion with Clarity
          </Heading>
          <Text
            textColor={"gray.400"}
            w={{ base: "100%", md: "70%" }}
            fontSize={{ base: "12px", md: "16px" }}
          >
            If Africa is part of your growth roadmap — or simply under
            consideration — Voranex helps you make responsible, data-backed
            expansion decisions.
          </Text>
        </Box>
        <Button
          mt={{ base: 6, md: 0 }}
          size="lg"
          bg="brandRed.600"
          color="white"
          borderRadius={"full"}
          _hover={{ bg: "brandRed.700" }}
          as="a"
          href="https://tally.so/r/zxNRP1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Talk to Sales
        </Button>
      </Flex>
    </Box>
  );
}

export default Cta;
