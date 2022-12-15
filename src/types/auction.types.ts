export interface AuctionData {
	id: string;
	createdAt: string;
	members: Members[];
}

export interface Members {
	name: string;
	isOnline: boolean;
	warranty: number;
	productionTime: number;
	paymentTerm: string;
	productionCoast: string;
	hasMeasures: boolean;
}
