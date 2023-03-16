import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "react-query";
import { getMe } from "../api/authApi";
import CTA from "./CTA";
import Hero from "./Hero";

const HomePage = () => {
  // const { getAccessTokenSilently } = useAuth0();
  // const accessToken = getAccessTokenSilently();
  // const { data } = useQuery("me", async () => getMe(await accessToken));
  // console.log(data);

  return (
    <div className="scroll-smooth">
      {/* Hero */}
      <Hero />

      {/* CTA */}
      <CTA />
    </div>
  );
};

export default HomePage;
