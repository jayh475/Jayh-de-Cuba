export interface ISuggestion {
  weergavenaam: string;
}

interface ISearchSuggestionProps<T> {
  suggestions: T[];
  selectSuggestion: (suggestion: T) => void;
  updateHighlight?: (highlight: number) => void;
  highlight: number;
  searchReturnedNoResults: boolean;
  noSearchResultsMessage?: string;
  hidden?: boolean;
}

export default function SearchbarSuggestions<T extends ISuggestion>({
  suggestions,
  selectSuggestion,
  updateHighlight,
  highlight,
  searchReturnedNoResults,
  noSearchResultsMessage = "Er zijn geen zoekresultaten gevonden",
  hidden = false,
}: ISearchSuggestionProps<T>) {
  return (
    <div
      className={`transition-all -translate-y-4 mt-1 absolute overflow-auto rounded-md bg-gray-100 w-full shadow-md max-h-0 opacity-0 min-h-8 invisible z-10 ${
        (suggestions.length === 0 && !searchReturnedNoResults) || hidden
          ? ""
          : "group-focus-within:visible group-focus-within:opacity-100 group-focus-within:transform-none group-focus-within:max-h-40"
      }`}
    >
      <div className="rows">
        {searchReturnedNoResults ? (
          <div className="px-4 py-1 opacity-50 cursor-default">
            {noSearchResultsMessage}
          </div>
        ) : (
          <></>
        )}
        {suggestions?.map((suggestion, index) => (
          <div
            key={suggestion.weergavenaam}
            // className={`flex px-4 py-1 cursor-pointer ${
            //   index === highlight
            //     ? "bg-vicrea-600 text-white"
            //     : "even:bg-gray-200"
            // }`}
            className={`flex px-4 py-1 cursor-pointer ${
              index === highlight ? " bg-sky-200" : "bg-white"
            }`}
            onMouseDown={() => selectSuggestion(suggestion)}
            onMouseEnter={() => updateHighlight && updateHighlight(index)}
          >
            {suggestion.weergavenaam}
          </div>
        ))}
      </div>
    </div>
  );
}
