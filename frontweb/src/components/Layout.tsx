import { Flex } from "@chakra-ui/react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }: any) => {
  return (
    <Flex flexDirection="column" minHeight="100vh" bg="#0ffff8" >
      <Header />
      {children}
      <Footer />
    </Flex>
  );
};
