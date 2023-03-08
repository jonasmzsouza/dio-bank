import { Button } from "@chakra-ui/react";

interface IButton {
  event: () => {};
}

export const CButton = ({ event }: IButton) => {
  return (
    <Button
      onClick={event}
      colorScheme="teal"
      size="lg"
      width="100%"
      marginTop="5px"
      bg="#098ba5"
    >
      Log in
    </Button>
  );
};
