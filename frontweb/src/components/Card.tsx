import { Flex } from "@chakra-ui/react";

export const Card = ({ children }: any) => {
  return (
    <Flex
      alignItems="center"
      minHeight={400}
      backgroundColor="#FFFFFF"
      borderRadius="25px"
      padding="15px"
    >
      {children}
    </Flex>
  );
};
