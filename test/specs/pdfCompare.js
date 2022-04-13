var download = require('download');
const comparePdf = require("compare-pdf");
const chai = require("chai");
const fs = require("fs");
const request = require("request-promise-native");
const expect = chai.expect;
const path = require('path');

const config = {
    paths: {
        actualPdfRootFolder: process.cwd() + "/data/actualPdfs",
        baselinePdfRootFolder: process.cwd() + "/data/baselinePdfs",
        actualPngRootFolder: process.cwd() + "/data/actualPngs/same",
        baselinePngRootFolder: process.cwd() + "/data/baselinePngs/same",
        diffPngRootFolder: process.cwd() + "/data/diffPngs/same"
    },
    settings: {
        density: 150,
        quality: 80,
        tolerance: 0,
        threshold: 0.1
    },
}

async function downloadPDF(pdfURL, actualPdfDirectory) {
    const file_location = path.join(actualPdfDirectory, pdfURL.split("/").pop());
    let pdfBuffer = await request.get({uri: pdfURL, encoding: null});
    console.log("Writing downloaded PDF file to " + file_location + "...");
    fs.writeFileSync(file_location, pdfBuffer);
}

const actualPdfLocation = "data//actualPdfs"
const pdf_links = ["https://www.ieee.org/content/dam/ieee-org/ieee/web/org/pubs/ecf_faq.pdf"];

pdf_links.forEach(async (pdf_link) => {
    await downloadPDF(pdf_link, actualPdfLocation);
});

describe("Compare Pdf Tests", () => {

    it("Should be able to compare pdfs by image", async () => {
        let comparisonResults = await new comparePdf(config)
            .actualPdfFile("ecf_faq")
            .baselinePdfFile("baseline")
            .compare();
        expect(comparisonResults.status).to.equal("failed");
    });

    it("Should be able to compare pdfs by image", async () => {
        let comparisonResults = await new comparePdf(config)
            .actualPdfFile("same")
            .baselinePdfFile("baseline")
            .compare();
        expect(comparisonResults.status).to.equal("passed");
    });
});