import React from "react";

const Loading = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-r from-gray to-blue-500">
      <div className="flex flex-row space-x-4" />
      <div
        className="h-12 w-12 animate-spin rounded-full
                    border-x border-solid border-sky-500 border-t-transparent"
      ></div>
    </main>
  );
};

export default Loading;
