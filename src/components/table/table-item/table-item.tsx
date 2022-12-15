import { FC } from 'react';
import { AuctionData, Members } from '../../../types/auction.types';
import styles from './table-item.module.css';

interface TableItemProp {
	data: AuctionData;
	title: string;
	value: keyof Members;
}

const TableItem: FC<TableItemProp> = ({ data, title, value }) => {
	return (
		<tr>
			<td className={styles.title}>{title}</td>
			{data.members.map((member) => (
				<td
					className={styles.cell}
					key={member.name}
				>
					{member[value] || '-'}
				</td>
			))}
		</tr>
	);
};

export default TableItem;
