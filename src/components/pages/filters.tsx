import FilterableDropdown from "../common/filterableDropdown";
import CustomInput from "../common/customInput";
import { useState } from "react";
import MutliSelectboxDropdown from "../common/mutliSelectboxDropdown";
import CustomButton from "../common/customButton";

export const locationOptions = [
  { label: "Anywhere", value: "anywhere" },
  { label: "APAC", value: "apac" },
  { label: "---Australia", value: "australia" },
  { label: "Canada", value: "canada" },
  { label: "EMEA", value: "emea" },
  { label: "Americas", value: "americas" },
  { label: "---Europe", value: "europe" },
  { label: "------France", value: "france" },
  { label: "------Germany", value: "germany" },
  // ... add other options as needed
];

export default function Filters() {
  const categoryOptions = [
    { label: "Any category", value: "any" },
    { label: "Business & Management", value: "business_management" },
    { label: "Copywriting & Content", value: "copywriting_content" },
    { label: "Customer Success", value: "customer_success" },
    { label: "Technical Support", value: "technical_support" },
    { label: "Data Science", value: "data_science" },
    { label: "Design & Creative", value: "design_creative" },
    { label: "Web & App Design", value: "web_app_design" },
    { label: "DevOps & SysAdmin", value: "devops_sysadmin" },
    { label: "Finance & Legal", value: "finance_legal" },
    { label: "HR & Recruiting", value: "hr_recruiting" },
    { label: "Marketing & Sales", value: "marketing_sales" },
    { label: "Sales", value: "sales" },
    { label: "SEO", value: "seo" },
    { label: "Social Media Marketing", value: "social_media_marketing" },
    { label: "Product & Operations", value: "product_operations" },
    { label: "Software Engineering", value: "software_engineering" },
    { label: "Programming", value: "programming" },
    // Add other categories as needed
  ];

  const jobTypeOptions = [
    { label: "Contract", value: "contract" },
    { label: "Full Time", value: "full_time" },
    { label: "Internship", value: "internship" },
    { label: "Part Time", value: "part_time" },
  ];

  const [location, setLocation] = useState<string | undefined>(
    locationOptions[0].value
  );
  const [category, setCategory] = useState<string | undefined>(
    categoryOptions[0].value
  );
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>(
    jobTypeOptions.map((option) => option.value)
  );
  const [jobTitleOrSkill, setJobTitleOrSkill] = useState<string | undefined>();
  const [inputValue, setInputValue] = useState("");

  // Handler for when the selection changes
  const handleSelectionChange = (newSelectedOptions: string[]) => {
    setSelectedJobTypes(newSelectedOptions);
    console.log(newSelectedOptions);
    console.log(location);
    console.log(category);
    console.log(jobTitleOrSkill);
  };

  const handleJobOrSkillInputKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setJobTitleOrSkill(inputValue.trim());
    }
  };

  const handleJobOrSkillInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="bg-white my-7 mx-6 shadow-md rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Find remote jobs</h3>
      <div id="job-filter-in-sidebar">
        <div id="filterform" className="flex flex-col gap-4">
          <CustomInput
            placeholder="Job title or skill"
            onKeyUp={handleJobOrSkillInputKeyPress}
            onInputChange={handleJobOrSkillInputChange}
          />
          <FilterableDropdown
            placeholder="set "
            options={locationOptions}
            selectedValue={location}
            setSelectedValue={setLocation}
          />
          <FilterableDropdown
            placeholder="Any category"
            options={categoryOptions}
            selectedValue={category}
            setSelectedValue={setCategory}
          />
          <MutliSelectboxDropdown
            placeholder="Job Type"
            options={jobTypeOptions}
            onSelectionChange={handleSelectionChange}
            selectedOptions={selectedJobTypes}
            setSelectedOptions={setSelectedJobTypes}
          />

          <label className="flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox" />
            <span>Only with salaries</span>
          </label>

          <div className="flex justify-between ">
            <CustomButton placeholder="Search" />

            {/* this has to stay a normal button */}
            <button className="w-4/12  bg-white rounded-lg hover:bg-black hover:text-white  mx-1  border border-black h-11">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
