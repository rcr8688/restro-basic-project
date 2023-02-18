import React from "react";
import userContext from "../utils/contexts/userContext";
const About = () => {
  return (
    <React.Fragment>
      <userContext.Consumer>
        {({ user }) => (
          <div>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
            <h1>welcome to about page</h1>
          </div>
        )}
      </userContext.Consumer>
    </React.Fragment>
  );
};

export default About;
