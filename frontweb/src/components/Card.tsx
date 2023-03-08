import { Box, Center, Flex, Input } from "@chakra-ui/react";
import { login } from "../services/login";
import { CButton } from "./Button";

export const Card = () => {
  return (
    <Flex
      alignItems="center"
      minHeight={400}
      backgroundColor="#FFFFFF"
      borderRadius="25px"
      padding="15px"
    >
      <Box>
        <Center mb={4} fontSize="1.2rem" fontWeight={700}>
          <h1>Login</h1>
        </Center>
        <Input placeholder="email" size="lg" mb={4} />
        <Input placeholder="password" size="lg" mb={4} />
        <CButton event={login} />
      </Box>
    </Flex>
  );
};
