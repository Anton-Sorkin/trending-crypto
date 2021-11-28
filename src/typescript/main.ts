// import { Icoins } from "./models/Icoins";
// import { Iitem } from "./models/Iitem";

window.onload = function () {
	/*Write normal typescript*/

	// getTrending();
	fetchApi();
};

// function getTrending() {
// 	let itemContainer: HTMLDivElement = document.createElement("div");
// 	itemContainer.className = "item-container";

// 	fetch("https://api.coingecko.com/api/v3/search/trending")
// 		.then((response: Response) => response.json())

// 		.then((result: Icoins) => {
// 			result.coins.map((query: Iitem) => {
// 				let item: HTMLUListElement = document.createElement("ul");
// 				let name: HTMLLIElement = document.createElement("li");

// 				item.className = "item";
// 				name.className = "name";

// 				name.innerHTML = query.name;

// 				item.appendChild(name);
// 				itemContainer.appendChild(item);
// 				document.body.appendChild(itemContainer);

// 				console.log(query);
// 			});
// 		});
// }

interface Icoins {
	coins: Iitem[];
}
interface Iitem {
	item: Iitem;
	name: string;
	market_cap_rank: string;
	large: string;
	price_btc: string;
}

let fetchApi = async () => {
	let response: Response = await fetch("https://api.coingecko.com/api/v3/search/trending");
	let data: Icoins = await response.json();

	data.coins.map((query: Iitem) => {
		console.log(query.item.name);
	});
};
