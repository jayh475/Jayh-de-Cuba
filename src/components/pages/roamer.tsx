import React, { useState } from "react";
import Filters from "~/components/pages/filters";
import PopularCategories from "~/components/pages/popularCategories";
import Status from "~/components/pages/status";

interface FormState {
  email: string;
}

export default function Roamer() {
  const [formState, setFormState] = useState<FormState>({ email: "" });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implement your submit logic here, e.g., making an API call
    console.log("Sending email:", formState.email);
  };

  return (
    <>
      <div className="bg-blue-800 text-white h-5/6  rounded-3xl m-5">
        <div className="p-6 mb-3  mt-4 rounded-lg shadow-lg bg-blue-900 floaty-background max-w-md">
          <h1 className="text-3xl font-bold mb-4 text-center">
            Your Office is Everywhere
          </h1>
          <p className="text-lg mb-6">
            Connect to your dream job with a click. Go beyond borders.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-row items-center w-fit">
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formState.email}
                onChange={handleInputChange}
                className="px-4 py-2 text-gray-800 rounded focus:outline-none h-10 flex-grow w-1/5"
                required
              />

              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition-colors h-10  w-auto"
              >
                Join Now
              </button>
            </div>
          </form>
        </div>
      </div>
      <Status />

      <div
        id="sidebars-and-jobs-container"
        className="flex flex-col md:flex-row gap-x-6 mt-4 md:mt-0 md:ml-40"
      >
        <div
          id="sidebars-container"
          className="md:w-1/4 md:flex md:flex-col gap-y-6"
        >
          <Filters />
          <PopularCategories />
        </div>

        {/* Container for job listings */}
        <div id="jobs" className="flex-1 flex flex-col gap-y-6">
          {/* Job listings will be populated here */}
        </div>
      </div>
    </>
  );
}
