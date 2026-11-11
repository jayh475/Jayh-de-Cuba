import CustomInput from "~/components/common/customInput";
import TagInput from "~/components/common/TagInput";
import CustomSelect from "~/components/common/customSelect";
import TextEditor from "~/components/common/textEditor";
import type { currency, jobLevel, jobType } from "~/Api/firebase/Job";

export default function HireForm({
  locations,
  setLocations,
  jobType,
  setJobType,
  jobLevels,
  setJobLevels,
  content,
  setContent,
  currency,
  setCurrency,
  handleSubmit,
  companyName,
  jobTitle,
  companyWebsite,
  setCompanyName,
  setCompanyWebsite,
  setJobTitle,
  applyEmail,
  setApplyEmail,
  annualMinSalary,
  setAnnualMinSalary,
  annualMaxSalary,
  setAnnualMaxSalary,
}: {
  locations: string[];
  jobType: "Contract" | "Full-time" | "Internship" | "Part-time" | undefined;
  jobLevels: jobLevel[];
  content: string;
  setLocations: (location: string[]) => void;
  setJobType: (
    jobType: "Contract" | "Full-time" | "Internship" | "Part-time" | undefined
  ) => void;
  setJobLevels: (jobLevels: jobLevel[]) => void;
  setContent: (content: string) => void;
  currency: "USD" | "EUR " | "AUD" | "CAD" | "GBP" | undefined;
  setCurrency: (
    currency: "USD" | "EUR " | "AUD" | "CAD" | "GBP" | undefined
  ) => void;
  setCompanyName: (companyName: string) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  companyName: string;
  jobTitle: string;
  companyWebsite: string;
  setCompanyWebsite: (companyWebsite: string) => void;
  setJobTitle: (jobTitle: string) => void;
  applyEmail: string;
  setApplyEmail: (applyEmail: string) => void;
  annualMinSalary: string;
  setAnnualMinSalary: (annualMinSalary: string) => void;
  annualMaxSalary: string;
  setAnnualMaxSalary: (annualMaxSalary: string) => void;
}) {
  const countriesAndRegions = [
    "APAC (Asia-Pacific)",
    "Australia",
    "China",
    "India",
    "Japan",
    "South Korea",
    "Indonesia",
    "Malaysia",
    "New Zealand",
    "Philippines",
    "Singapore",
    "Thailand",
    "Vietnam",
    "EMEA (Europe, Middle East, and Africa)",
    "United Kingdom (Europe)",
    "Germany (Europe)",
    "France (Europe)",
    "Italy (Europe)",
    "Spain (Europe)",
    "Netherlands (Europe)",
    "Sweden (Europe)",
    "Switzerland (Europe)",
    "Poland (Europe)",
    "Belgium (Europe)",
    "Saudi Arabia (Middle East)",
    "United Arab Emirates (Middle East)",
    "Turkey (Middle East)",
    "Israel (Middle East)",
    "Qatar (Middle East)",
    "Kuwait (Middle East)",
    "South Africa (Africa)",
    "Nigeria (Africa)",
    "Egypt (Africa)",
    "Kenya (Africa)",
    "Morocco (Africa)",
    "LATAM (Latin America)",
    "Brazil",
    "Mexico",
    "Argentina",
    "Colombia",
    "Chile",
    "Peru",
    "Venezuela",
    "Ecuador",
    "Uruguay",
    "Costa Rica",
  ];

  const jobTypeOptions = ["Contract", "Full-Time", "Internship", "Part-Time"];

  const jobLevelOptions = () => [
    "Director",
    "Entry-Level",
    "Internship",
    "Junior",
    "Midweight",
    "Senior",
  ];

  const currencyOptions = ["USD", "EUR ", "AUD", "CAD", "GBP"];

  const getCountriesAndRegions = () => {
    return countriesAndRegions;
  };

  const updateJobsOnSelect = (updatedJobLevels: jobLevel[]) => {
    setJobLevels(updatedJobLevels);
  };

  const updateLocationsOnSelect = (updatedLocations: string[]) => {
    const oldLocationList = locations;
    const NewLocationList = updatedLocations;

    const elementsDeleted = oldLocationList.filter(
      (element) => !NewLocationList.includes(element)
    );
    const elementsAdded = NewLocationList.filter(
      (element) => !oldLocationList.includes(element)
    );

    if (elementsDeleted.length > 0 || elementsAdded.length > 0) {
      const updatedAllLocations = locations
        .filter((element) => !elementsDeleted.includes(element))
        .concat(elementsAdded);

      // Use Set to ensure distinct elements
      const distinctElements = Array.from(new Set(updatedAllLocations));

      setLocations(distinctElements);
    }
  };

  const handleJobTypeChange = (updatedJob: jobType) => {
    setJobType(updatedJob);
  };

  const handleCurrencyTypeChange = (updatedCurrency: currency) => {
    setCurrency(updatedCurrency);
  };

  const handleInputChange =
    (setter: (value: any) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value);
    };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white px-5 py-5 flex flex-col space-y-8 rounded-lg  border-gray-300 border-2 border-solid"
    >
      <h2 className="text-lg font-semibold mb-2 ">Company Details</h2>

      <CustomInput
        placeholder="Enter the name of the company"
        label="Company Name"
        value={companyName}
        onInputChange={handleInputChange(setCompanyName)}
      ></CustomInput>

      <CustomInput
        placeholder="https://"
        label="Company website"
        value={companyWebsite}
        onInputChange={handleInputChange(setCompanyWebsite)}
      ></CustomInput>

      <h2 className="text-lg font-semibold mb-2">Job details</h2>
      <CustomInput
        label="Job Title"
        value={jobTitle}
        onInputChange={handleInputChange(setJobTitle)}
      ></CustomInput>

      <TagInput
        placeholder="Anywhere"
        getAllOptions={getCountriesAndRegions}
        setTags={setLocations}
        tagsChangedTo={updateLocationsOnSelect}
        tagInputId="LocationsUpdaterInputTag"
        tags={locations}
        createNewTagsOnUnmatchedInput={false}
        label="Remote from"
      ></TagInput>

      <div className="flex flex-col space-y-8 md:space-x-4  md:flex-row  md:space-y-0">
        <div className="flex-1">
          <CustomSelect
            label="Job type"
            options={jobTypeOptions}
            handleChange={handleJobTypeChange}
            selectedOption={jobType}
          ></CustomSelect>
        </div>
        <div className="flex-1">
          <TagInput
            placeholder="Any level"
            getAllOptions={jobLevelOptions}
            setTags={setJobLevels}
            tagsChangedTo={updateJobsOnSelect}
            tagInputId="JobLevelUpdaterInputTag"
            tags={jobLevels}
            createNewTagsOnUnmatchedInput={false}
            suggestionsShown={7}
            label="Job Level"
          ></TagInput>
        </div>
      </div>

      <div>
        <TextEditor
          description="Job Description"
          content={content}
          setContent={setContent}
        ></TextEditor>
      </div>

      <div>
        <CustomInput
          label="How will candidates apply?"
          placeholder="Enter an Email address or external URL"
          value={applyEmail}
          onInputChange={handleInputChange(setApplyEmail)}
        ></CustomInput>
      </div>

      <div className="flex flex-col space-y-8 md:space-x-4  md:flex-row  md:space-y-0">
        <CustomInput
          type="number"
          label="Annual Min Salary"
          placeholder="e.g. 50000"
          value={annualMinSalary}
          onInputChange={(e) => {
            setAnnualMinSalary(e.target.value);
          }}
        ></CustomInput>
        <CustomInput
          type="number"
          label="Annual Max Salary"
          placeholder="e.g. 60000"
          value={annualMaxSalary}
          onInputChange={(e) => {
            setAnnualMaxSalary(e.target.value);
          }}
        ></CustomInput>
        <CustomSelect
          selectedOption={currency}
          options={currencyOptions}
          handleChange={handleCurrencyTypeChange}
          label="Salary Currency"
        ></CustomSelect>
      </div>
    </form>
  );
}
