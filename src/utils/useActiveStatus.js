import { useEffect, useState } from "react";

const useActiveStatus = () => {
  // Check if Online
  const [activeStatus, setActiveStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", (event) => {
      setActiveStatus(false);
    });

    window.addEventListener("online", (event) => {
      setActiveStatus(true);
    });
  }, []);

  // returns boolean
  return activeStatus;
};

export default useActiveStatus;
