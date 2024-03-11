import { Substance } from "@/types/Substances";
import { getUNII } from "./getUNII";
import { UNIIRow } from "@/types/UNIIRow";
import { getMapping } from "./getMapping";



export const createUNIITable = async (ingredients: string[]) => {

  const rows: UNIIRow[] = [];
  const notFound: string[] = [];

  const promises = ingredients.map(async (ingredient) => {
    const uniiData = await getUNII(ingredient);

    if (uniiData.total > 0) {
      const unii: Substance = uniiData.substances[0];

      const fdaEntryUrl = `https://precision.fda.gov/uniisearch/srs/unii/${unii.UNII}`;

      rows.push({
        displayName: unii.DISPLAY_NAME,
        unii: unii.UNII,
        fdaEntryUrl,
      });
    } else {

    
      const mapping = await getMapping(ingredient);

      if (mapping) {
        rows.push({
          displayName: mapping.inciName,
          unii: mapping.uniiCode,
          fdaEntryUrl: "",
        });
        return
      }

      rows.push({ displayName: "", unii: "", fdaEntryUrl: "" });
      notFound.push(ingredient);
    }
  });

  await Promise.all(promises);

  return { rows, notFound };
};
