export type TCart = {
	productName: string;
	price: number;
	amount: number;
};

export class CartRepository {
	async all(): Promise<TCart[]> {
		return [
			{ amount: 1, price: 200, productName: 'product1' },
			{ amount: 1, price: 400, productName: 'product2' },
			{ amount: 1, price: 600, productName: 'product3' }
		];
	}
}
