import React from "react";
import { useRouteError } from "react-router";

const ErrorPage = () => {
  const err = useRouteError();
  return (
    <div>
      <h2>
        {err.status} | {err.statusText}
      </h2>
      <h3>{err.data}</h3>
    </div>
  );
};

export default ErrorPage;
