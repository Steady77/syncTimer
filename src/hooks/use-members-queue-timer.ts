import { useEffect, useState } from 'react';
import { calcMemberQueue } from '../utils/helpers';

export const useMembersQueueTimer = (
	membersCount: number,
	startedAt: string,
) => {
	const [memberInfo, setMemberInfo] = useState({
		currentMember: 0,
		memberTimeForTurn: 0,
	});

	useEffect(() => {
		setMemberInfo(calcMemberQueue(startedAt, membersCount));

		const intervarId = setInterval(() => {
			setMemberInfo(calcMemberQueue(startedAt, membersCount));
		}, 1000);

		return () => clearInterval(intervarId);
	}, [membersCount, startedAt]);

	return memberInfo;
};
