import { useQuery } from '@tanstack/react-query';
import { AuctionService } from '../services/auction.service';

export const useAuction = () => {
  const { isLoading, data } = useQuery(['auction data'], () => AuctionService.getAuctionData(), {
    select: ({ data }) => data,
  });

  return { isLoading, data };
};
