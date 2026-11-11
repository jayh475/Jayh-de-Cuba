export default function StatisticsCard() {
  return (
    <div className="flex flex-col space-y-4  lg:flex-row lg:space-x-4 lg:space-y-0">
      <div className="flex flex-row bg-green-500 w-full lg:w-1/2 h-fit pl-8 rounded-lg py-8">
        <a href="/job-listening" className="cursor-pointer text-xl text-white">
          <div>
            <h3>Active Job listings</h3>
          </div>
          <div>
            <span>0</span>
          </div>
        </a>
      </div>

      <div className="flex flex-row bg-teal-500 w-full lg:w-1/2 h-fit pl-8 rounded-lg py-8 text-white">
        <a href="/Total-jobs-views" className="cursor-pointer text-xl">
          <div>
            <h3>Total Jobs Views</h3>
          </div>
          <div>
            <span>0</span>
          </div>
        </a>
      </div>
    </div>
  );
}
