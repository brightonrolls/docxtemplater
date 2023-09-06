const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");
const fs = require("fs");
const path = require("path");

// Load the docx file from the local path
const templateContent = fs.readFileSync(
    path.resolve(__dirname, "C:/Users/DarrenBeckinsale/Becks Insurance/FormHub - Documents/Branded Documents/CompanyTemplate2.docx"),
    "binary"
);

const zip = new PizZip(templateContent);

const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
});

// Function to generate the docx file from dynamic data
function generateDocx(data) {
    // Render the document with the data
    doc.render(data);

    const buf = doc.getZip().generate({
        type: "nodebuffer",
        compression: "DEFLATE",
    });

    // Save the generated document
    fs.writeFileSync(path.resolve(__dirname, "output.docx"), buf);
}

// Replace n8nData with the actual JSON data you receive from your n8n workflow
const n8nData = {
    companyName: "Company Name",
    companyNumber: "Company Number",
    dateOfCreation: "Date of Creation",
    companyStatus: "Company Status",
    companyStatusDetail: "Company Status Detail",
    companySize: "Company Size",
    companySizeDescription1: "Description 1",
    companySizeDescription2: "Description 2",
    companySizeDescription3: "Description 3",
    companySize: "Company Size",
    jurisdiction: "Jurisdiction Value",
    type: "Company Type Value",
    sicCodes: "SIC Codes Value",
    premises: "Premises Value",
    addressLine1: "Address Line 1 Value",
    addressLine2: "Address Line 2 Value",
    locality: "Locality Value",
    region: "Region Value",
    country: "Country Value",
    postalCode: "Postal Code Value",
    accountingReferenceDay: "Accounting Reference Day Value",
    accountingReferenceMonth: "Accounting Reference Month Value",
    lastAccountsMadeUpTo: "Last Accounts Made Up To Value",
    lastAccountsPeriodStartOn: "Last Accounts Period Start On Value",
    lastAccountsPeriodEndOn: "Last Accounts Period End On Value",
    lastAccountsType: "Last Accounts Type Value",
    nextAccountsDueOn: "Next Accounts Due On Value",
    nextAccountsPeriodStartOn: "Next Accounts Period Start On Value",
    nextAccountsPeriodEndOn: "Next Accounts Period End On Value",
    confirmationLastMadeUpTo: "Confirmation Last Made Up To Value",
    confirmationNextDue: "Confirmation Next Due Value",
    confirmationNextMadeUpTo: "Confirmation Next Made Up To Value",
    hasBeenLiquidated: "Has Been Liquidated Value",
    registeredOfficeIsInDispute: "Registered Office Is In Dispute Value",
    undeliverableRegisteredOfficeAddress: "Undeliverable Registered Office Address Value"
    dateOf Creation: "Date of Creation",
    // Add more data fields here...
};

generateDocx(n8nData);