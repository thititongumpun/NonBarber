import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/" ,
      },
      authorizationParams: {
        prompt: "login",
      },
      
    });
  };
  return <button className="text-white" onClick={handleLogin}>Login</button>;
};

export default LoginButton;
