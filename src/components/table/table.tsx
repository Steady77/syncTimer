import { FC } from 'react';
import { AuctionData } from '../../types/auction.types';
import Timer from '../timer/timer';
import TableHeader from './table-header/table-header';
import TableItem from './table-item/table-item';
import styles from './table.module.css';

const Table: FC<{ data: AuctionData | undefined }> = ({ data }) => {
	if (!data) {
		return <div>Загрузка данных...</div>;
	}

	return (
		<table className={styles.table}>
			<Timer
				membersCount={data.members.length}
				startedAt={data.createdAt}
			/>
			<TableHeader
				title="Параметры и требования"
				data={data}
			/>
			<tbody>
				<TableItem
					title="Наличие комплекса мероприятий, повышающих стандарты качества изготовления"
					data={data}
					value="hasMeasures"
				/>
				<TableItem
					title="Срок изготовления лота, дней"
					data={data}
					value="productionTime"
				/>
				<TableItem
					title="Гарантийный обязательства, мес"
					data={data}
					value="warranty"
				/>
				<TableItem
					title="Условия оплаты"
					data={data}
					value="paymentTerm"
				/>
				<TableItem
					title="Стоимость изготовления лота, руб. (без НДС)"
					data={data}
					value="productionCoast"
				/>
			</tbody>
		</table>
	);
};

export default Table;
