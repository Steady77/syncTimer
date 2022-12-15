import { TURN_DURATION } from './consts';

export const calcMemberQueue = (startedAt: string, membersCount: number) => {
	const millisecNow = Date.now();
	const millisecStartedAt = new Date(startedAt).getTime();

	const totalMembersTime =
		(millisecNow - millisecStartedAt) % (TURN_DURATION * membersCount);

	const index = Math.floor(totalMembersTime / TURN_DURATION);

	const currentMember = Math.abs(index + 1);

	const memberTimeForTurn =
		TURN_DURATION - (totalMembersTime - index * TURN_DURATION);

	return {
		currentMember,
		memberTimeForTurn,
	};
};
