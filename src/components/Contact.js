const Contact = () => {
  return (
    <main className="mx-auto my-12 w-[calc(100%_-_2rem)] max-w-3xl flex-1 rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_16px_40px_rgba(15,23,42,0.06)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20">
      <p className="mb-2 text-xs font-bold tracking-[0.16em] text-orange-600 uppercase dark:text-orange-300">
        Get in touch
      </p>
      <h1 className="m-0 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
        Contact
      </h1>
      <p className="mt-3 mb-0 leading-relaxed text-slate-600 dark:text-slate-400">
        We’d love to hear from you. Reach out with questions, feedback, or
        restaurant recommendations.
      </p>
    </main>
  );
};

export default Contact;
