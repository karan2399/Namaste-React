import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  useEffect(() => {
    // API Call
  }, []);
  return (
    <div className="m-[5px] rounded-xl border border-slate-300 bg-white p-4 text-slate-800 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
      <h2>{name}</h2>
      <h3>Ahmedabad, India</h3>
      <h4>Contact: @karan__234</h4>
      <h6>Count : {count}</h6>
      <h6>Count 2: {count2}</h6>
    </div>
  );
};

export default User;
