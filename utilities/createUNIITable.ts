import { Substance } from "@/types/Substances";
import { getUNII } from "./getUNII";
import { UNIIRow } from "@/types/UNIIRow";
import { getMapping } from "./getMapping";

export const createUNIITable = async (ingredients: string[]) => {
  const rows: UNIIRow[] = [];
  const notFound: string[] = [];

  const promises = ingredients.map(async (ingredient) => {

    // check for custom mapping
    const mapping = await getMapping(ingredient);

    if (mapping) {
      rows.push({
        unii: mapping.uniiCode,
        displayName: mapping.preferredName,
        fdaEntryUrl: "",
      });
      return;
    }

    // no custom mapping -- use FDA API
    const uniiData = await getUNII(ingredient);

    if (uniiData.total > 0) {
      const unii: Substance = uniiData.substances[0];

      const fdaEntryUrl = `https://precision.fda.gov/uniisearch/srs/unii/${unii.UNII}`;

      rows.push({
        unii: unii.UNII,
        displayName: unii.DISPLAY_NAME,
        fdaEntryUrl,
      });
    } else {
      const mapping = await getMapping(ingredient);

      if (mapping) {
        rows.push({
          unii: mapping.uniiCode,
          displayName: mapping.preferredName,
          fdaEntryUrl: "",
        });
        return;
      }

      rows.push({ displayName: "", unii: "", fdaEntryUrl: "" });
      notFound.push(ingredient);
    }
  });

  await Promise.all(promises);

  return { rows, notFound };
};
