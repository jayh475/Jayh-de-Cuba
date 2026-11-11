import CustomButton from "~/components/common/customButton";

export default function Personalhelper() {
  return (
    <div className="bg-amber-400 flex flex-row p-4 justify-between items-center rounded-lg">
      <div className="flex flex-row space-x-4 ">
        <div>
          <img alt="Helper" />
        </div>
        <div className="text-white text-lg">{`Jayh, your helper`}</div>
      </div>
      <CustomButton
        placeholder="Message"
        hoverColorClass=""
        bgColorClass="bg-white"
        textColorClass="text-black"
        tailwindWidth="w-fit"
      />
    </div>
  );
}
