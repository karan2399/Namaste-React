import { createContext } from "react";

// Once Context is created, it can be used anywhere in the code with useContext(UserContext)
const UserContext = createContext({
  loggedInUser: "Default User",
});

export default UserContext;
