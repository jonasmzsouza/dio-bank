import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { api } from "../api";
import CardInfo from "../components/CardInfo";
import { AppContext } from "../components/AppContext";
import { User } from "../types/user";

const Account = () => {
  const [userData, setUserData] = useState<null | User>();
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoggedIn } = useContext(AppContext);

  useEffect(() => {
    !isLoggedIn && navigate("/");

    const getData = async () => {
      const data: any | User = await api;
      setUserData(data);
    };

    getData();
  }, [isLoggedIn, navigate]);

  const actualData = new Date();

  if (userData && id !== userData.id) {
    navigate("/");
  }

  return (
    <SimpleGrid
      columns={2}
      spacing={8}
      padding={16}
      flex={1}
      alignSelf="center"
      alignItems="center"
    >
      {userData === undefined || userData === null ? (
        <Center>
          <Spinner size="xl" color="white" />
        </Center>
      ) : (
        <>
          <CardInfo
            mainContent={`Welcome ${userData?.name}`}
            content={`${actualData.getDay()} / ${actualData.getMonth()} / ${actualData.getFullYear()} ${actualData.getHours()}:${actualData.getMinutes()}`}
          />
          <CardInfo mainContent="Balance" content={`$ ${userData.balance}`} />
        </>
      )}
    </SimpleGrid>
  );
};

export default Account;
