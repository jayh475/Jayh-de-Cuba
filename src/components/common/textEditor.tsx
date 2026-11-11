import { useRef, useEffect } from "react";

export default function TextEditor({
  content,
  setContent,
  description,
}: {
  description: string;
  content: string;
  setContent: (content: string) => void;
}) {
  const editorRef = useRef<HTMLDivElement>(null);

  const handleInput = () => {
    const currentContent = editorRef.current?.innerHTML;
    if (currentContent !== content) {
      setContent(currentContent || "");
    }
  };

  const execCommand = (command: string) => {
    document.execCommand(command, false);
    editorRef.current?.focus();
  };

  // Synchronize the innerHTML when external content changes
  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== content) {
      editorRef.current.innerHTML = content;
    }
  }, [content]);

  return (
    <div className="flex flex-col border   rounded-b-lg border-gray-300 rounded-t-lg">
      {description && (
        <label className="ml-1 block text-xs font-medium text-gray-700">
          {description}
        </label>
      )}
      <div className="flex justify-start space-x-2 p-2  border-b">
        <button
          type="button"
          onClick={() => execCommand("bold")}
          className="px-2 py-1 bg-white rounded shadow text-sm font-bold text-gray-700 hover:bg-gray-50"
        >
          B
        </button>
        <button
          type="button"
          onClick={() => execCommand("italic")}
          className="px-2 py-1 bg-white rounded shadow text-sm italic text-gray-700 hover:bg-gray-50"
        >
          I
        </button>
      </div>
      <div
        ref={editorRef}
        className="editor p-2 bg-white min-h-[150px]  shadow focus:outline-none focus:ring focus:ring-sky-500"
        contentEditable
        onInput={handleInput}
      ></div>
    </div>
  );
}
