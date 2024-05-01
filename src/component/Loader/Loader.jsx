import React from "react";
import "../../App.css";
const LoaderComponent = () => {
  return (
    <div class="min-h-screen flex justify-center items-center opacity-1">
      <div class="loader bg-white p-5 rounded-full gap-2 flex flex-col space-x-3">
        <div className="text-primary font-medium text-lg justify-center items-center">
          Loading...
        </div>
        <div className="flex mt-2 gap-2">
          <div class="w-5 h-5 bg-primary rounded-full animate-bounce"></div>
          <div class="w-5 h-5 bg-primary rounded-full animate-bounce"></div>
          <div class="w-5 h-5 bg-primary rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default LoaderComponent;
