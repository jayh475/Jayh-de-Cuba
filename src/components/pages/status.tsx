export default function Status() {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-4 divide-x divide-gray-300 w-full max-w-6xl">
        <div className="p-8 text-center">
          <p className="text-6xl font-bold text-black">0</p>
          <p className="text-xl text-gray-800">total jobs posted</p>
        </div>
        <div className="p-8 text-center">
          <p className="text-6xl font-bold text-black">0</p>
          <p className="text-xl text-gray-800">total jobs views</p>
        </div>
        <div className="p-8 text-center">
          <p className="text-6xl font-bold text-black">0</p>
          <p className="text-xl text-gray-800">remote applicants</p>
        </div>
        <div className="p-8 text-center">
          <p className="text-6xl font-bold text-black">0</p>
          <p className="text-xl text-gray-800">days online</p>
        </div>
      </div>
    </div>
  );
}
