import { Button } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

type ICButton = {
  label: string
  event: MouseEventHandler;
}

export const CButton = ({ label, event }: ICButton) => {
  return (
    <Button
      onClick={event}
      colorScheme="teal"
      size="lg"
      width="100%"
      margin="5px"
      bg="#098ba5"
    >
      {label}
    </Button>
  );
};
