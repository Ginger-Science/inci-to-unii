# INCI to UNII

This tool converts International Nomenclature of Cosmetic Ingredients (INCI) listings for cosmetic products to the Unique Ingredient Identifier (UNII) preferred name and UNII code. The output can be downloaded to a CSV file that can be uploaded to the ingredients section when registering a cosmetic product via FDA Cosmetics Direct. 

![Main Image](/images/main.png)

## Disclaimer

**USE AT YOUR OWN RISK.**

This tool is provided as-is, and the developer(s) are not liable for any errors, inaccuracies, or issues that may arise from its use. It is essential to exercise your own due diligence and verify the results obtained through this tool. The developer(s) make no guarantees about the accuracy, completeness, or reliability of the converted data.

## Functionality

- Paste and submit an INCI listing for a cosmetic product (separated by commas) in the text field 
- Download to a .csv that can be imported to the ingredients section of an FDA registration for cosmetic ingredients in Cosmetic Direct portal. 

![An Example with Errors](/images/has-errors.png)
- If the app cannot find a UNII entry, then the INCI name is displayed in red
    - blank line is added to the csv and array to retain the cosmetic order of predominance.

![An example of the CSV](/images/csv-example.png)
- An example of the generated CSV that features:
    - Preferred ingredient name
    - UNII code
    - A link to the Precision FDA entry

## Running Locally

```bash
npm install
npm run dev
```

- Make a .env file for the FDA API endpoint = `ENDPOINT_URL`