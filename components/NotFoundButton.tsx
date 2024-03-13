import { createMapping } from "@/utilities/createMapping";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import MappingDialog from "./MappingDialog";

const NotFoundButton = ({ ingredient }: { ingredient: string }) => {
  const [dialog, setDialog] = useState(false);

  return (
    <>
      <div
        onClick={() => setDialog(true)}
        className="px-4 py-2 bg-white border-2 border-rose-800 rounded-xl hover:cursor-pointer"
      >
        <h1 className="text-lg text-rose-800">{ingredient} not found</h1>
      </div>

      <MappingDialog dialog={dialog} setDialog={setDialog} inciiName={ingredient} />
    </>
  );
};

export default NotFoundButton;
