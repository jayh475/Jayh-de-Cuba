import { useState } from "react";
import CustomButton from "../../common/customButton";
import { FaGoogle } from "react-icons/fa"; // For Google icon
import PasswordInput from "./passwordInput";
import { GetAuthContext } from "~/contexts/firebase/authContext";

export default function Login() {
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { loginUser } = GetAuthContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginUser(password, email);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="spae-y-6">
        <input
          id="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="w-full p-3 border border-gray-300  rounded-t-lg focus:outline-none bg-gray-100"
          placeholder="Enter your email"
        />
        <div>
          <PasswordInput
            value={password}
            onInputChange={e => setPassword(e.target.value)}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
        </div>
        <div className="flex items-center justify-between mt-3">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={e => setRememberMe(e.target.checked)}
              className="h-4 w-4 text-blue-600"
            />

            <span className=" ml-2 text-sm text-gray-600">Remember Me</span>
          </label>
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Lost Password?
          </a>
        </div>

        {/* login button  */}
        <div className="flex justify-center items-center pt-4 space-x-2">
          <CustomButton placeholder="Login" type="submit" />
          <CustomButton
            placeholder=""
            icon={<FaGoogle />}
            tailwindWidth="w-20"
          />
        </div>
      </form>
    </>
  );
}
