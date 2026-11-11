import { useState } from "react";
import ErrorAlert from "~/components/common/alertBox";
import Login from "~/components/pages/authenticate/login";
import Registration from "~/components/pages/authenticate/registration";
import { GetAuthContext } from "~/contexts/firebase/authContext";

export default function MyProfile() {
  const { error } = GetAuthContext();
  const [IsLoginPage, setIsLoginPage] = useState<boolean>(true);

  return (
    <div className="flex flex-col items-center  h-screen bg-gray-100 px-2">
      <div className="m-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center ">
          {IsLoginPage ? "Welcome back!" : "Create account"}
        </h1>
        <p className="text-lg text-center text-gray-600">
          Post remote jobs or resumes and much more.
        </p>
      </div>

      {error && <ErrorAlert message="Email or password is not valid." />}

      <div className="w-full max-w-xl space-y-1 rounded-xl bg-white shadow-lg p-5 ">
        <div className="mb-3">
          <span>
            {IsLoginPage ? "No account?" : "Already have an account?"} {""}
          </span>
          <span
            onClick={() => setIsLoginPage(!IsLoginPage)}
            className="text-blue-500 cursor-pointer"
          >
            {IsLoginPage ? "Create one" : "Sign in"}
          </span>
        </div>
        <div>{IsLoginPage ? <Login /> : <Registration />}</div>
      </div>
    </div>
  );
}
