import { useAuth0 } from "@auth0/auth0-react";
import Header from "../Components/Header";

export const CallbackPage = () => {
  const { error, handleRedirectCallback } = useAuth0();

  if (error) {
    return (
      <div>
        <span>Error</span>
        <span>{error.message}</span>
      </div>
    );
  }

  return (
    <>
      <Header />
    </>
  );
};
