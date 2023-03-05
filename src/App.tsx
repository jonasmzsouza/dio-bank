import { ChakraProvider, Flex } from "@chakra-ui/react";
import { Card } from "./components/Card";
import { Layout } from "./components/Layout";

function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Flex justifyContent="center" alignItems="center" h="calc(100vh - 140px)" bg="#0ffff8" padding="25px">
          <Card />
        </Flex>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
