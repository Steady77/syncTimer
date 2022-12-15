import { FC } from 'react';
import { AuctionData } from '../../../types/auction.types';
import styles from './table-header.module.css';

interface TableHeaderProps {
	data: AuctionData;
	title: string;
}

const TableHeader: FC<TableHeaderProps> = ({ data, title }) => {
	return (
		<thead>
			<tr className={styles.header}>
				<th>{title}</th>
				{data.members.map((member) => (
					<th key={member.name}>{member.name}</th>
				))}
			</tr>
		</thead>
	);
};

export default TableHeader;
