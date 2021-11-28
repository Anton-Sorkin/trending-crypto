import { Icoins } from "./models/Icoins";
import { Iitem } from "./models/Iitem";

window.onload = function () {
	createTrending();
};

function createTrending() {
	let itemContainer: HTMLDivElement = document.createElement("div");
	itemContainer.className = "item-container";

	fetch("https://api.coingecko.com/api/v3/search/trending")
		.then((response: Response) => response.json())
		.then((result: Icoins) => {
			console.log(result);
			result.coins.map((query: Iitem) => {
				let item: HTMLDivElement = document.createElement("div");
				let name: HTMLHeadingElement = document.createElement("h2");
				let symbol: HTMLHeadingElement = document.createElement("h5");
				let market_cap_rank: HTMLParagraphElement = document.createElement("p");
				// let thumb: HTMLImageElement = document.createElement("img");
				let large: HTMLImageElement = document.createElement("img");
				let price_btc: HTMLParagraphElement = document.createElement("p");

				item.className = "item";
				name.className = "name";
				symbol.className = "symbol";
				market_cap_rank.className = "market_cap_rank";
				// thumb.className = "thumb";
				large.className = "large";
				price_btc.className = "price_btc";

				name.innerHTML = query.item.name;
				symbol.innerHTML = query.item.symbol;
				market_cap_rank.innerHTML = query.item.market_cap_rank;
				// thumb.src = query.item.thumb;
				large.src = query.item.large;
				price_btc.innerHTML = query.item.price_btc;

				item.appendChild(name);
				item.appendChild(symbol);
				item.appendChild(market_cap_rank);
				// item.appendChild(thumb);

				item.appendChild(large);
				item.appendChild(price_btc);
				itemContainer.appendChild(item);
				document.body.appendChild(itemContainer);
			});
		});
}

// let fetchApi = async () => {
// 	let response: Response = await fetch("https://api.coingecko.com/api/v3/search/trending");
// 	let data: Icoins = await response.json();

// 	data.coins.map((query: Iitem) => {
// 		console.log(query.item.name);
// 	});
// };
