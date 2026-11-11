import { FaRegUserCircle } from "react-icons/fa";
import CustomButton from "~/components/common/customButton";

export default function UserProfileCard() {
  return (
    <div className="flex p-2 border-2 border-neutral-300  w-full  rounded-md space-x-2 bg-white">
      <div>
        <FaRegUserCircle size={50} className="md:size-20" />
      </div>
      <div className="flex flex-col space-y-1">
        <div>name</div>
        <div>
          <CustomButton
            placeholder="Create resume >"
            fixedHeight="h-full"
            tailwindWidth="w-fit"
            bgColorClass="bg-sky-500"
            hoverColorClass=""
          />
        </div>
      </div>
    </div>
  );
}
