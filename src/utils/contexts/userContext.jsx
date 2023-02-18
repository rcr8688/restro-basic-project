import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "prathap",
    email: "pr@gmail.com",
  },
});

export default userContext;
