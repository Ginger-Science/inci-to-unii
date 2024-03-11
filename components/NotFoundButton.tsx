import { createMapping } from "@/utilities/createMapping";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

const NotFoundButton = ({ ingredient }: { ingredient: string }) => {
  const [dialog, setDialog] = useState(false);
  const [uniiCode, setUniiCode] = useState("");

  const handleClick = () => {
    setDialog(true);
  };

  const handleSubmit = () => {
    setDialog(false);
    createMapping(ingredient, uniiCode);
  }

  return (
    <>
      <div
        onClick={handleClick}
        className="px-4 py-2 bg-white border-2 border-rose-800 rounded-xl hover:cursor-pointer"
      >
        <h1 className="text-lg text-rose-800">{ingredient} not found</h1>
      </div>

      <Dialog.Root open={dialog} onOpenChange={setDialog}>
        <Dialog.Portal>
          <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0">
            <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
              <div className="flex flex-col gap-y-6">
                <h1 className="font-bold text-emerald-950 text-lg">
                  Enter UNII Code
                </h1>
                <input
                    value={uniiCode}
                    onChange={(event) => setUniiCode(event.target.value)}
                  className="border-emerald-950 border-2 rounded-lg px-4 py-4 w-full text-lg"
                  type="text"
                />
                <div className="flex flex-row justify-end gap-x-2">
                  <button onClick={() => {
                    setDialog(false);
                    setUniiCode("");
                  }}className="bg-neutral-200 text-black rounded-lg px-4 py-2 ">
                    Cancel
                  </button>
                  <button onClick={handleSubmit} className="bg-emerald-950 text-white rounded-lg px-4 py-2 ">
                    Commit
                  </button>
                </div>
              </div>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default NotFoundButton;
