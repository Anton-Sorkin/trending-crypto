window.onload = function() {
    /*Write normal typescript*/ getTrending();
};
function getTrending() {
    fetch("https://api.coingecko.com/api/v3/search/trending").then((response)=>response.json()
    ).then((result)=>{
        console.log(result);
    });
} // const trending = async

//# sourceMappingURL=index.6faddce7.js.map
