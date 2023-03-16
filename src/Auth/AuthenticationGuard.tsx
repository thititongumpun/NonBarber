import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../Components/Loading";
import React from "react";

type AuthenticationGuardProps = {
  component: React.ComponentType<Object>;
};

const AuthenticationGuard = ({ component }: AuthenticationGuardProps) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <Loading />,
  });
  return <Component />;
};

export default AuthenticationGuard;
