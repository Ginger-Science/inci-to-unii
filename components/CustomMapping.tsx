import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import MappingDialog from "./MappingDialog";

const CustomMapping = () => {
    const [dialog, setDialog] = useState(false);
    
  return (
    <>
      <button
        className="bg-emerald-950 text-white px-8 py-4 rounded-2xl"
        onClick={() => setDialog(true)}
      >
        Custom Mapping
      </button>

      <MappingDialog dialog={dialog} setDialog={setDialog}  inciiName="" />

    </>
  );
};

export default CustomMapping;
