"use client";

import { createUNIITable } from "@/utilities/createUNIITable";
import { getUNII } from "@/utilities/getUNII";
import { splitIngredients } from "@/utilities/splitIngredients";
import { ChangeEvent, useState } from "react";
import Output from "./Output";
import { UNIIRow } from "@/types/UNIIRow";
import { json } from "stream/consumers";
import CustomMapping from "./CustomMapping";

const INCIListing = () => {
  const [value, setValue] = useState("");
 const [tableRows, setTableRows] = useState<UNIIRow[] | null>();
 const [notFound, setNotFound] = useState<string[]>([])

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = async () => {
    const ingredients = splitIngredients(value);
    const results = await createUNIITable(ingredients);
    setTableRows(results.rows)
    setNotFound(results.notFound)
  };

  return (
    <>
      <div className="flex flex-col w-full items-center gap-y-8">
        <textarea
          className="bg-neutral-100 w-1/2 h-40 rounded-2xl p-4"
          value={value}
          onChange={handleChange}
        />
        <span className="flex flex-row gap-x-4">
            <button
          className="bg-emerald-950 text-white px-8 py-4 rounded-2xl"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button
          className="bg-emerald-950 text-white px-8 py-4 rounded-2xl"
          onClick={() => setTableRows(null)}
        >
          Clear
        </button>
        <CustomMapping />
        </span>
      
      </div>

       <Output rows={tableRows} notFound={notFound}/>


      
    </>
  );
};

export default INCIListing;
