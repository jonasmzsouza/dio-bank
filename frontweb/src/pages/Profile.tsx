import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../api";
import { AppContext } from "../components/AppContext";
import CardInfo from "../components/CardInfo";
import { User } from "../types/user";

const Profile = () => {
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

  if (userData && id !== userData.id) {
    navigate("/");
  }

  return (
    <SimpleGrid
      columns={1}
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
            mainContent={`${userData?.name}`}
            content={`${userData?.email}`}
          />
        </>
      )}
    </SimpleGrid>
  );
};

export default Profile;
