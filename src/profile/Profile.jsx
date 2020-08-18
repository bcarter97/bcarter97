import React from "react";

import { useAuthContext } from "../auth/Auth";
import { CenterLayout } from "../components/Layout";

const Profile = () => {
  const { user } = useAuthContext();
  return (
    <CenterLayout>
      <h1 className="title is-size-1">Welcome! </h1>
      <span className="is-size-4">
        <p>
          There's not much here at the moment... but here's your email:{" "}
          <span className="has-text-info has-text-weight-semibold">
            {user.email}
          </span>
        </p>
      </span>
    </CenterLayout>
  );
};

export { Profile };
