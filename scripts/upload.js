const { NFTStorage, File  } = require("nft.storage");
const mime = require("mime");
const fs = require("fs");
const path = require("path");

const NFT_STORAGE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDEyQjVlNjIxZTEzYzRFMWY5Njk3NDRmREQwRjFGRTg3RmMzNTc3YTIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2ODU2MTIxNjM3MSwibmFtZSI6Im5mdF9zdG9yYWdlX2tleSJ9.BxegOxHTHKf5ukIt7bL1moWJSt8NimyREWyKZSuWx3Y"

async function fileFromPath(filePath) {
    const content = await fs.promises.readFile(filePath);
    const type = mime.getType(filePath);
    return new File([content], path.basename(filePath), { type });
}

async function storageNFT(imagePath, name, description){
    const image = await fileFromPath(imagePath)
    const nftStorage = new NFTStorage({ token: NFT_STORAGE_KEY });

    return nftStorage.store({ image, name, description});
}

async function main(imagePath, name, description) {
    // console.log(await storageNFT(imagePath, name, description));
    return await storageNFT(imagePath, name, description);
}

if (require.main === module) {
    try {
    main("nft.jpeg", "rohit's first NFT","This is his road map proposed to be the First NFT");
    }catch(err){
        console.log("Error while creating the nft",err);
    }
}

module.exports = main;