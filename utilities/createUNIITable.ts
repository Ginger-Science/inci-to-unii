import { Substance } from "@/types/Substances";
import { getUNII } from "./getUNII";
import { UNIIRow } from "@/types/UNIIRow";

export const createUNIITable = async (ingredients: string[]) => {
  const rows: UNIIRow[] = [];

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
      console.error(`${ingredient} was not found.`);
    }
  });

  await Promise.all(promises);

  return rows;
};
