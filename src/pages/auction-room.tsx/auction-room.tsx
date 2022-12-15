import { FC } from 'react';
import styles from './auction-room.module.css';
import Table from '../../components/table/table';
import { useAuction } from '../../hooks/use-auction';
import { convertDate } from '../../utils/date';

const AuctionRoom: FC = () => {
	const { data } = useAuction();

	return (
		<section>
			<h2 className={styles.heading}>
				Тестовые торги на аппарат ЛОТОС № 32455645 (
				{convertDate(data?.createdAt)})
			</h2>
			<span className={styles.subHeading}>
				Уважаемые участники, во время вашего хода вы можете изменить параметры
				торгов, указанных в таблице:
			</span>
			<Table data={data} />
		</section>
	);
};

export default AuctionRoom;
