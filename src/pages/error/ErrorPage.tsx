import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold">Oops!</h1>
        <p>Status: {error.status}</p>
        <p>{error.statusText}</p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold">Unexpected Error</h1>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Unknown Error</h1>
    </div>
  );
}
