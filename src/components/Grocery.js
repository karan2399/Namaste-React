import React from "react";

const Grocery = () => {
  return (
    <main className="mx-auto my-12 w-[calc(100%_-_2rem)] max-w-5xl flex-1 rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-white p-8 shadow-[0_16px_40px_rgba(15,23,42,0.06)] dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 dark:shadow-black/20">
      <p className="mb-2 text-xs font-bold tracking-[0.16em] text-orange-600 uppercase dark:text-orange-300">
        Lazy Loaded
      </p>
      <h1 className="m-0 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        Foodology Grocery Store with lots of child components
      </h1>
    </main>
  );
};

export default Grocery;
