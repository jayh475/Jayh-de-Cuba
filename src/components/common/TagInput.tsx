import type { ChangeEvent, KeyboardEvent } from "react";
import { useState, useRef } from "react";
import { IoMdClose } from "react-icons/io";

import CustomInput from "./customInput";
import SearchBarSuggestions from "./searchBarSuggestions";
import type { ISuggestion } from "./searchBarSuggestions";

export default function TagInput({
  tags: selectedTags,
  setTags,
  createNewTagsOnUnmatchedInput,
  getAllOptions,
  tagsChangedTo,
  placeholder,
  tagInputId,
  label,
}: {
  tags: string[];
  setTags: (tags: any) => void;
  createNewTagsOnUnmatchedInput: boolean;
  getAllOptions: () => Promise<string[]> | string[];
  tagsChangedTo: (suggestion: any) => void;
  placeholder: string;
  tagInputId: string;
  suggestionsShown?: number;
  label?: string;
}) {
  const [inputValue, setInputValue] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const [suggestions, setSuggestions] = useState<ISuggestion[]>([]);
  const [searchReturnedNoResults, setShowNoResultsMessage] =
    useState<boolean>(false);
  const [highlight, setHighlight] = useState<number>(-1);
  const [cooldownTimeout, setCooldownTimeout] = useState<ReturnType<typeof setTimeout> | null>(
    null
  );

  const handleDivClick = () => {
    fetchAndSetSuggestions(inputRef.current?.value || "");

    inputRef.current?.focus();
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (cooldownTimeout) {
      clearTimeout(cooldownTimeout);
    }

    setInputValue(inputValue);

    if (!inputValue) {
      setShowNoResultsMessage(false);
    }

    const timeoutValue = setTimeout(async () => {
      setHighlight(-1);

      fetchAndSetSuggestions(inputValue);
    }, 200);

    setCooldownTimeout(timeoutValue);
  };

  const clearSearch = () => {
    setInputValue("");
    setSuggestions([]);
    setShowNoResultsMessage(false);
    setHighlight(-1);
  };

  const addTag = (newTag: string) => {
    const updatedTags = [...selectedTags, newTag];
    setTags(updatedTags);
    tagsChangedTo(updatedTags);
    clearSearch();
  };

  const selectSuggestion = (selection: ISuggestion) => {
    addTag(selection.weergavenaam);
  };

  const fetchAndSetSuggestions = async (input: string) => {
    const options = await getAllOptions();

    if (options.length === 0) {
      setShowNoResultsMessage(true);
    }

    const filteredSuggestions = options
      .filter(suggestion =>
        suggestion.toLowerCase().includes(input.toLowerCase())
      )
      .filter(r =>
        selectedTags.every(tag => tag.toLowerCase() !== r.toLowerCase())
      )
      //   .slice(0, suggestionsShown)
      .map(r => ({ weergavenaam: r }));

    setSuggestions(filteredSuggestions);
    setShowNoResultsMessage(filteredSuggestions.length === 0 && input != "");
  };

  const handleInputKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      trySelectCurrentValue(inputValue);
    }

    if (event.key === "Escape") {
      clearSearch();
    }

    if (event.key === "ArrowDown") {
      if (highlight >= suggestions.length - 1) {
        return;
      }

      setHighlight(highlight + 1);
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      if (highlight < 0) {
        return;
      }

      setHighlight(highlight - 1);
    }
  };

  const trySelectCurrentValue = async (input: string) => {
    if (createNewTagsOnUnmatchedInput && highlight === -1) {
      input = input.trim();

      if (input === "") {
        return;
      }

      const matchedTagInSuggestions = suggestions.find(
        item => item.weergavenaam.toLowerCase() === input.toLowerCase()
      );

      if (matchedTagInSuggestions) {
        selectSuggestion(matchedTagInSuggestions);
        return;
      }

      createFromInput(input);
      return;
    }

    if (suggestions.length > 0) {
      selectHighlighted(!createNewTagsOnUnmatchedInput);
      return;
    }
  };

  const createFromInput = async (input: string) => {
    const fullList = await getAllOptions();
    const tagAlreadyExists = fullList.some(
      oorzaak => oorzaak.toLowerCase() == input.toLowerCase()
    );

    if (!tagAlreadyExists) {
      addTag(input);
      return;
    }
  };

  const selectHighlighted = (selectFirstOnNoHighlight: boolean) => {
    if (highlight > -1) {
      selectSuggestion(suggestions[highlight]);
      setHighlight(-1);
      clearSearch();
      return;
    }

    if (selectFirstOnNoHighlight) {
      selectSuggestion(suggestions[0]);
      clearSearch();
      return;
    }
  };

  const removeTag = (tagToRemove: string) => {
    const updatedTags = selectedTags.filter(tag => tag !== tagToRemove);
    setTags(updatedTags);
    tagsChangedTo(updatedTags);
    clearSearch();
  };

  const RemoveAllTags = () => {
    setTags([]);
    setShowNoResultsMessage(false);
    tagsChangedTo([]);
    clearSearch();
  };

  const getNoResultsMessage = (): string => {
    if (createNewTagsOnUnmatchedInput) {
      return "Druk op enter om als tag toe te voegen";
    }

    return "Geen overeenkomende tags gevonden";
  };

  const borderAndFocus =
    "border-gray-300 border border-solid rounded-md focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-opacity-50";

  const height = label ? "h-13" : "h-12";
  const marginInputInsideDiv = label ? "" : "mt-2";

  return (
    <div
      style={{ width: "100%" }}
      className={`bg-white relative group ${height}  ${borderAndFocus} `}
    >
      {label && (
        <label className="ml-1 block text-xs font-medium text-gray-700">
          {label}
        </label>
      )}

      <div
        id={tagInputId}
        className={`flex justify-between bg-white cursor-pointer overflow-hidden`}
        onClick={handleDivClick}
        onFocus={handleDivClick}
      >
        <div
          className={`flex flex-wrap ${marginInputInsideDiv} items-center  cursor-text w-full h-full gap-1`}
        >
          {selectedTags.map((tag, index) => (
            <div
              key={index}
              className="bg-gray-100 m-1  rounded-full text-xs flex items-center overflow-hidden"
            >
              <span className="pl-2">{tag}</span>
              <div
                className=" cursor-pointer w-6 h-6"
                onClick={e => {
                  e.stopPropagation();
                  removeTag(tag);
                }}
              >
                <IoMdClose
                  size={18}
                  className="md:size-14 ml-1 mt-1 hover:bg-blue-200 hover:text-white rounded"
                ></IoMdClose>
              </div>
            </div>
          ))}

          <CustomInput
            type={"text"}
            placeholder={selectedTags.length === 0 ? placeholder : ""}
            value={inputValue}
            onInputChange={handleInputChange}
            onKeyUp={handleInputKeyPress}
            ref={inputRef}
            maxLength={30}
            BorderAndHighlight={false}
            width={
              selectedTags.length === 0
                ? "50ch"
                : `${Math.max(inputValue.length + 2, 1)}ch`
            }
          />
        </div>
        {selectedTags.length > 2 ? (
          <div className={`ml-0 w-1/24 flex items-center `}>
            <div
              onClick={() => RemoveAllTags()}
              className={`hover:text-white place-content-center hover:bg-sky-50 cursor-pointer rounded-full h-6 w-6 ${
                selectedTags.length > 0 ? "visible" : "invisible"
              }`}
            >
              <IoMdClose
                size={22}
                className="md:size-20  hover:bg-blue-200 "
              ></IoMdClose>
            </div>{" "}
          </div>
        ) : (
          <></>
        )}
      </div>

      <SearchBarSuggestions
        searchReturnedNoResults={searchReturnedNoResults}
        highlight={highlight}
        suggestions={suggestions}
        selectSuggestion={selectSuggestion}
        updateHighlight={setHighlight}
        noSearchResultsMessage={getNoResultsMessage()}
      ></SearchBarSuggestions>
    </div>
  );
}
