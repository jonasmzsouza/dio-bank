import { Box, Center, Flex, Input } from "@chakra-ui/react";
import { Card } from "../components/Card";
import { CButton } from "../components/Button";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { login } from "../services/login";
import { changeLocalStorage } from "../services/storage";

const Home = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const { isLoggedIn } = useContext(AppContext);

  const validateUser = async (email: string, password: string) => {
    const loggedIn = await login(email, password);

    if (!loggedIn) {
      return alert("Invalid credentials");
    }

    setIsLoggedIn(true);
    changeLocalStorage({ login: true });
    navigate("/account/1");
  };

  useEffect(() => {
    isLoggedIn && navigate("/account/1");
  }, [isLoggedIn, navigate]);

  return (
    <Flex justifyContent="center" alignItems="center" flex={1} padding="25px">
      {!isLoggedIn && (
        <Card>
          <Box>
            <Center mb={4} fontSize="1.2rem" fontWeight={700}>
              <h1>Login</h1>
            </Center>
            <Input
              placeholder="email"
              size="lg"
              mb={4}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Input
              placeholder="password"
              size="lg"
              mb={4}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <CButton
              label={"Log in"}
              event={() => validateUser(email, password)}
            />
          </Box>
        </Card>
      )}
    </Flex>
  );
};

export default Home;
