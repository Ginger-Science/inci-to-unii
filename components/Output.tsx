import { UNIIRow } from "@/types/UNIIRow";
import { useState } from "react";

type OutputProps = {
  rows: any[];
};

const Output = ({ rows }: OutputProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const returnCSV = () => {
    const flattenedArray = rows.map((row) => [
      row.displayName,
      row.unii,
      row.fdaEntryUrl,
    ]);
    const csvContent = flattenedArray.map((row) => row.join(",")).join("\n");

    return csvContent;
  };

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(returnCSV());
      setIsCopied(true);
    } catch (err) {
      console.error("Failed to copy text to clipboard", err);
    }
  };

  const handleDownloadClick = () => {
    const csvContent = returnCSV();
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "unii-output.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (!rows) {
    return null;
  }

  return (
    <>
      <div className="flex flex-col w-full items-center gap-y-8 mt-8">
        <textarea
          className="bg-neutral-100 w-1/2 h-40"
          value={JSON.stringify(rows)}
          readOnly
        />
        <div className="flex gap-x-4">
          <button
            className="bg-emerald-950  text-white px-8 py-4 rounded-2xl"
            onClick={handleCopyClick}
          >
            {isCopied ? "Copied!" : "Copy to Clipboard"}
          </button>
          <button
            className="bg-emerald-950 text-white px-8 py-4 rounded-2xl"
            onClick={handleDownloadClick}
          >
            Download CSV
          </button>
        </div>
      </div>
    </>
  );
};

export default Output;
