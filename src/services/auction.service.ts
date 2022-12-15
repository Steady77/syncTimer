import axios from 'axios';
import { AuctionData } from '../types/auction.types';

export const AuctionService = {
	async getAuctionData() {
		return axios.get<AuctionData>('mock.json');
	},
};
