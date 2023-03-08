import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import Header from "../Components/Header";

const ProfilePage = () => {
  const { user, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    let isMounted = true;

    const getMessage = async () => {
      const accessToken = await getAccessTokenSilently();
      console.log(accessToken);

      if (!isMounted) {
        return;
      }
    };

    getMessage();

    return () => {
      isMounted = false;
    };
  }, [getAccessTokenSilently]);
  return (
    <>
      <Header />
      <div>
        <div>{user?.email}</div>
        <div>{user?.sub}</div>
      </div>
    </>
  );
};

export default ProfilePage;
