import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";

export const CallbackPage = () => {
  const { error, handleRedirectCallback } = useAuth0();
  const navigate = useNavigate();
	const shouldRedirect = useRef(true);

  useEffect(() => {
		if (shouldRedirect.current) {
			shouldRedirect.current = false;

			(async () => {
				try {
					await handleRedirectCallback();
					navigate("/");
				} catch (e) {
					navigate('/');
				}
			})();
		}
	}, [navigate]);

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

