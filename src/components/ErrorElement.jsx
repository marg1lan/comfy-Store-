import { useRouteError } from "react-router-dom";

function ErrorElement() {
  const error = useRouteError();
  return <div className="font-bold text-5xl ">There was an error ...</div>;
}
export default ErrorElement;
