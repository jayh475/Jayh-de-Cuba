import { GetAuthContext } from "~/contexts/firebase/authContext";

export default function Header() {
  const { user } = GetAuthContext();

  return (
    <div className="flex space-x-36 lg:border-b-2 border-neutral-300  py-8 text-lg md:text-lg lg:text-3xl">
      <div>
        <h2>{`${user?.participantType} Dashboard`}</h2>
      </div>
      <div className="hidden lg:flex">
        <p>{`Hello, ${user?.name}`}</p>
      </div>
    </div>
  );
}
