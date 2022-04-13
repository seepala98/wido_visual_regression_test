var download = require('download');v
const comparePdf = require("compare-pdf");
const chai = require("chai");
const expect = chai.expect;

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

describe("Compare Pdf Tests", () => {

    it("Should be able to compare pdfs by image", async () => {
        let comparisonResults = await new comparePdf(config)
            .actualPdfFile("COMP8117_individual_report")
            .baselinePdfFile("baseline")
            .compare();
        console.log("comparisonResults.status: ", comparisonResults.status);
        expect(comparisonResults.status).to.equal("failed");
    });

    it("Should be able to compare pdfs by image", async () => {
        let comparisonResults = await new comparePdf(config)
            .actualPdfFile("same")
            .baselinePdfFile("baseline")
            .compare();
        console.log("comparisonResults.status: ", comparisonResults.status);
        expect(comparisonResults.status).to.equal("passed");
    });
});