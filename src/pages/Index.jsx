import { Container, Text, VStack, Heading, Box, Image, Button } from "@chakra-ui/react";
import { FaPaw } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">Welcome to Dog World</Heading>
        <Text fontSize="lg" textAlign="center">Discover the amazing world of dogs. Learn about different breeds, training tips, and much more!</Text>
        <Box boxSize="sm">
          <Image src="/images/dog-banner.jpg" alt="Dogs" borderRadius="md" />
        </Box>
        <Button colorScheme="teal" size="lg" leftIcon={<FaPaw />}>
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;