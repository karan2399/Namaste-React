import React from "react";
import { useRouteError } from "react-router";

const ErrorPage = () => {
  const err = useRouteError();
  return (
    <main className="mx-auto my-12 w-[calc(100%_-_2rem)] max-w-3xl flex-1 rounded-3xl border border-rose-200 bg-rose-50 p-8 text-center shadow-sm dark:border-rose-900/70 dark:bg-slate-900">
      <p className="mb-2 text-xs font-bold tracking-[0.16em] text-rose-600 uppercase dark:text-rose-300">
        Something went wrong
      </p>
      <h1 className="m-0 text-2xl font-bold text-slate-900 dark:text-slate-100">
        {err.status} | {err.statusText}
      </h1>
      <p className="mt-3 mb-0 text-slate-600 dark:text-slate-400">
        {err.data}
      </p>
    </main>
  );
};

export default ErrorPage;
