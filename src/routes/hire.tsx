import { useState } from "react";
import { PostJob, type Job, type jobLevel } from "~/Api/firebase/Job";
import HireForm from "~/components/pages/hire/hireForm";

export default function Hire() {
  const [locations, setLocations] = useState<string[]>([]);
  const [jobType, setJobType] = useState<
    "Contract" | "Full-time" | "Internship" | "Part-time" | undefined
  >(undefined);
  const [jobLevels, setJobLevels] = useState<jobLevel[]>([]);
  const [content, setContent] = useState<string>("");
  const [currency, setCurrency] = useState<
    "USD" | "EUR " | "AUD" | "CAD" | "GBP" | undefined
  >(undefined);
  const [companyName, setCompanyName] = useState<string>("");
  const [companyWebsite, setCompanyWebsite] = useState<string>("");
  const [jobTitle, setJobTitle] = useState<string>("");
  const [applyEmail, setApplyEmail] = useState("");
  const [annualMinSalary, setAnnualMinSalary] = useState("");
  const [annualMaxSalary, setAnnualMaxSalary] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const job: Job = {
      companyName,
      companyWebsite,
      jobTitle,
      locations,
      jobType,
      jobLevels,
      content,
      currency,
    };

    PostJob(job);
  };

  return (
    <div
      id="sideNote-and-companyPost-container"
      className="flex flex-col md:flex-row gap-x-20 gap-y-4 md:mt-16 md:mx-20"
    >
      <div
        id="sideNote-container"
        className="md:w-1/4 md:flex md:flex-col gap-y-6"
      >
        {/* sidenode */}
        <div>
          <h2 className="text-xl font-semibold  ml-3 mt-3 md:ml-0 md:mt-0">
            Job posting
          </h2>
          <p className=" ml-3 md:ml-0">
            Find, attract and recruit remote talent, Fast
          </p>
        </div>
      </div>

      <div
        id="companyPost-container"
        className="w-full mr-10 flex flex-col gap-y-6"
      >
        <HireForm
          locations={locations}
          setLocations={setLocations}
          jobType={jobType}
          setJobType={setJobType}
          jobLevels={jobLevels}
          setJobLevels={setJobLevels}
          content={content}
          setContent={setContent}
          currency={currency}
          setCurrency={setCurrency}
          handleSubmit={handleSubmit}
          companyName={companyName}
          companyWebsite={companyWebsite}
          jobTitle={jobTitle}
          setCompanyName={setCompanyName}
          setCompanyWebsite={setCompanyWebsite}
          setJobTitle={setJobTitle}
          applyEmail={applyEmail}
          setApplyEmail={setApplyEmail}
          annualMinSalary={annualMinSalary}
          setAnnualMinSalary={setAnnualMinSalary}
          annualMaxSalary={annualMaxSalary}
          setAnnualMaxSalary={setAnnualMaxSalary}
        ></HireForm>
      </div>
    </div>
  );
}
