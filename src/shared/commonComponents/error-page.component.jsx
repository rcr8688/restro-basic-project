import { useRouteError } from "react-router-dom";

const Error = () => {
  const errorMsg = useRouteError();
  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMsg.statusText || errorMsg.message}</i>
      </p>
    </div>
  );
};

export default Error;
