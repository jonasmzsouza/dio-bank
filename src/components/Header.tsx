import { Flex } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      bg="#112834"
      w="100%"
      h={70}
      p={4}
      color="#ffffff"
      fontWeight={700}
      fontSize="1.5rem">
        Dio Bank
    </Flex>
  );
};
