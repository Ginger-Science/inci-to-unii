"use server"
import { s3 } from "@/configs/s3";
import { DateTime } from "luxon";
import * as XLSX from "xlsx"


export const uploadtoMinio = async (csvContent:any) => {
    const timestamp = DateTime.now().toFormat("y-LLL-dd-hh-mm");
    // Convert CSV data to XLSX object
    const workbook = XLSX.utils.book_new();  // Create a new workbook
    const worksheet = XLSX.utils.json_to_sheet(csvContent);  // Convert CSV to worksheet
    
    // Add the worksheet to the workbook (assuming a specific sheet name)
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');  // Replace 'Sheet1' with your desired name
    
    // Generate XLSX buffer
    const xlsxBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    const bucket = process.env.S3_BUCKET as string;
    const filename = `${timestamp}.xlsx`;
    const metaData = {
      "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    };
  
 
    try {
      const reponse = await s3.putObject(bucket, filename, xlsxBuffer, metaData);
      console.log(reponse);
    } catch (err) {
      console.error('Error uploading XLSX data:', err);
    }
  };