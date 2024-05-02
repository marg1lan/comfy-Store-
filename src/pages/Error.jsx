import { Link, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();

  if (error.status == "404") {
    return (
      <main className="min-h-screen grid place-content-center">
        <div className="text-center">
          <h1 className="text-center lg:text-9xl text-4xl mb-5 font-bold text-primary">
            404
          </h1>
          <p className="lg:text-5xl text-3xl font-bold mb-5">Page not found</p>
          <Link className="lg:btn-md btn btn-primary " to="/">
            Back Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen grid place-content-center">
      <div className="text-center">
        <h1 className="text-center lg:text-9xl text-4xl mb-5 font-bold text-primary">
          Error
        </h1>
        <p className="lg:text-5xl text-3xl font-bold mb-5">
          Something went wrong bro
        </p>
        <Link className="lg:btn-md btn btn-primary " to="/">
          Back Home
        </Link>
      </div>
    </main>
  );
}

export default Error;
