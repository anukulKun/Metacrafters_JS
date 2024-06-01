// create a variable to hold your NFT's
let nfts = [];

// this function will take in some values as parameters, create an NFT object using the parameters passed to it for its metadata and store it in the variable above.
function mintNFT(Name, Token, Type, Chain) 
{
    let newNFT = {
        Name: Kwala,
        Token:ERC721 ,
        Type: APE,
        Chain: ETH
    };
    // pushing into the array
    nfts.push(newNFT);
}

// funcution used for printing NFT's
function listNFTs() 
{
    // create a "loop" that will go through an "array" of NFT's
    // and print their metadata with console.log()
    nfts.forEach((nft, index) => 
    {
        console.log("NFT" + (index + 1));
        console.log("Name:"+ nft.Name);
        console.log("Token:"+ nft.Token);
        console.log("Type:"+ nft.Type);
        console.log("Chain:"+ nft.Chain);

        console.log("-----------------------");
    }
);
}

// print the total number of NFTs we have minted to the console
function getTotalSupply()
{    
    return nfts.length;
}

//pushing into the the funcution mintNFT
mintNFT("Cool NFT", "blue", "t-shirt", "diamond necklace");
mintNFT("Awesome NFT", "green", "hoodie", "gold watch");

// call your functions below this line
listNFTs();

// Print Total no. of NFT's
console.log("Total No. Of NFT's:"+ getTotalSupply());
