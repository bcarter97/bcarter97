import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { CenterLayout } from "../components/Layout";
import { useAuthContext } from "./Auth";

const Confirm = () => {
  const { token } = useParams();
  const { confirmUser } = useAuthContext();
  const [isConfirming, setIsConfirming] = useState(true);
  const [confirmSuccess, setConfirmSuccess] = useState(false);

  useEffect(() => {
    confirmUser(token, true)
      .then(() => {
        setConfirmSuccess(true);
        setIsConfirming(false);
      })
      .catch(() => {
        setIsConfirming(false);
      });
  }, [confirmUser, token]);

  if (isConfirming) {
    return (
      <CenterLayout>
        <p className="is-size-3 has-text-info has-text-centered">
          Confirming email...
        </p>
        <progress className="progress is-info" max="100">
          30%
        </progress>
      </CenterLayout>
    );
  }
  return (
    <CenterLayout>
      {confirmSuccess ? (
        <p className="is-size-3 has-text-centered">Email confirmed!</p>
      ) : (
        <p className="is-size-3 has-text-centered">
          <span className="has-text-danger">Something's up!</span> Have you
          already confirmed this email?
        </p>
      )}
    </CenterLayout>
  );
};

export { Confirm };
