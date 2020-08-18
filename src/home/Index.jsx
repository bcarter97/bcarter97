import React, { useEffect } from "react";

import { useAuthContext } from "../auth/Auth";
import { AboutHero } from "../components/AboutHero";
import { Seo } from "../components/Seo";
import { history } from "../helpers/history";

function Home() {
  const { tokenParam } = useAuthContext();

  useEffect(() => {
    if (tokenParam) {
      if (tokenParam.confirmation_token) {
        history.push(`/confirm/${tokenParam.confirmation_token}`);
      } else if (tokenParam.recovery_token) {
        history.push(`/reset/${tokenParam.recovery_token}`);
      } else if (tokenParam.invite_token) {
        history.push(`/accept/${tokenParam.invite_token}`);
      }
    }
  }, [tokenParam]);

  return (
    <>
      <Seo title="Home" />
      <AboutHero />
    </>
  );
}

export { Home };
