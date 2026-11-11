import { useState } from "react";
import CustomButton from "~/components/common/customButton";
import { FaGoogle as GoogleIcon, FaLinkedin as LinkedInIcon } from "react-icons/fa";
import PasswordInput from "./passwordInput";
import TermsAndPrivacy from "./termsAndPrivacy";
import { GetAuthContext } from "~/contexts/firebase/authContext";

export default function Registration() {
  const { createNewAccount } = GetAuthContext();

  const [applicantType, setApplicantType] = useState<string>("Candidate");
  // const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the form submission
    try {
      await createNewAccount(email, password, name, surname, applicantType);
      setEmail("");
      setPassword("");
      setName("");
      setSurname("");
      setApplicantType("");
    } catch (error) {
      console.error("Error creating new account", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex space-x-3">
        <div
          onClick={() => {
            setApplicantType("Candidate");
          }}
          className={`flex flex-col  ${
            applicantType === "Candidate" ? "bg-blue-500" : "bg-blue-100"
          }  h-fit border-2 w-full border-neutral-300 rounded-lg cursor-pointer p-2`}
        >
          <h2 className="text-lg font-bold">I am a Candidate</h2>
          <p className="opacity-70">For job seekers</p>
        </div>

        <div
          onClick={() => {
            setApplicantType("Recruiter");
          }}
          className={` ${
            applicantType === "Recruiter" ? "bg-blue-500" : "bg-blue-100"
          } flex flex-col bg-blue-100 h-fit  border-2 w-full border-neutral-300 rounded-lg cursor-pointer p-2`}
        >
          <p className="text-lg font-bold">I am a Recruiter</p>
          <p className="opacity-70	">For businesses</p>
        </div>
      </div>

      <div className="11/12 bg-gray-100 flex flex-row items-center space-x-2 p-3 rounded-lg">
        <span>Sign up with</span>
        <CustomButton
          placeholder="Google"
          tailwindWidth="w-32"
          icon={<GoogleIcon />}
        />
        <CustomButton
          placeholder="LinkedIn"
          tailwindWidth="w-32"
          icon={<LinkedInIcon />}
        />
      </div>

      <div className="flex justify-center  w-full">
        <p>— or —</p>
      </div>

      <div>
        <div className="flex flex-row">
          <input
            id="Name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            className="w-full p-3 border border-gray-300   focus:outline-none bg-gray-100 rounded-tl-lg"
            placeholder="First Name"
          />
          <input
            id="lastName"
            type="text"
            value={surname}
            onChange={e => setSurname(e.target.value)}
            required
            className="w-full p-3 border border-gray-300   focus:outline-none bg-gray-100 rounded-tr-lg"
            placeholder="Last Name"
          />
        </div>

        <input
          id="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="w-full p-3 border border-gray-300   focus:outline-none bg-gray-100"
          placeholder="Work Email"
        />

        <PasswordInput
          onInputChange={e => setPassword(e.target.value)}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
      </div>
      <div>
        <TermsAndPrivacy />
      </div>

      <div className="flex justify-center items-center pt-4">
        <CustomButton
          type="submit"
          placeholder={`Continue as ${applicantType} >`}
          tailwindWidth="w-full"
        />
      </div>
    </form>
  );
}
