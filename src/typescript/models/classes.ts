/*Add classes, ONE per file.*/

export class crypto {
	id: string;
	coin_id: number;
	name: string;
	symbol: string;
	market_cap_rank: string;
	thumb: string;
	small: string;
	large: string;
	slug: string;
	price_btc: number;
	score: number;

	constructor(
		Id: string,
		Coin_id: number,
		Name: string,
		Symbol: string,
		Market_cap_rank: string,
		Thumb: string,
		Small: string,
		Large: string,
		Slug: string,
		Price_btc: number,
		Score: number
	) {
		this.id = Id;
		this.coin_id = Coin_id;
		this.name = Name;
		this.symbol = Symbol;
		this.market_cap_rank = Market_cap_rank;
		this.thumb = Thumb;
		this.small = Small;
		this.large = Large;
		this.slug = Slug;
		this.price_btc = Price_btc;
		this.score = Score;
	}
}
