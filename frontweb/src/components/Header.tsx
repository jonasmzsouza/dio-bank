import { Box, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { changeLocalStorage } from "../services/storage";
import { AppContext } from "./AppContext";
import { CButton } from "./Button";

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const profile = () => {
    isLoggedIn && navigate("/profile/1");
  };

  const logout = () => {
    changeLocalStorage({ login: false });
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      bg="#112834"
      w="100%"
      h={70}
      p={4}
      color="#ffffff"
      fontWeight={700}
      fontSize="1.5rem"
    >
      <Box>
        <Link to={"/"}>Dio Bank</Link>
      </Box>
      {isLoggedIn && (
        <Flex>
          <CButton label="Profile" event={() => profile()} />
          <CButton label="Logout" event={() => logout()} />
        </Flex>
      )}
    </Flex>
  );
};
