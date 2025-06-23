"use client"

const ErrorPage = ({error, reset}) => {
    return (
         <div>
      <h1 className="text-center text-red-500 my-5 text-xl">
        Something went wrong
      </h1>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Try Again
      </button>
    </div>
    );
};

export default ErrorPage;