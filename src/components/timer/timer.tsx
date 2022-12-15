import { FC } from 'react';
import { useMembersQueueTimer } from '../../hooks/use-members-queue-timer';
import { convertToTime } from '../../utils/date';

interface TimerProps {
	membersCount: number;
	startedAt: string;
}

const Timer: FC<TimerProps> = ({ membersCount, startedAt }) => {
	const { currentMember, memberTimeForTurn } = useMembersQueueTimer(
		membersCount,
		startedAt,
	);
	const membersQuantity = new Array(membersCount).fill(0);

	return (
		<thead>
			<tr>
				<th>ХОД</th>
				{membersQuantity.map((_, idx) =>
					currentMember === idx ? (
						<th
							key={idx}
							style={{ backgroundColor: 'pink' }}
						>
							{convertToTime(memberTimeForTurn)}
						</th>
					) : (
						<th key={idx}></th>
					),
				)}
			</tr>
		</thead>
	);
};

export default Timer;
