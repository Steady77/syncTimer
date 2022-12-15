import { TURN_DURATION } from './consts';

export const calcMemberQueue = (startedAt: string, membersCount: number) => {
	const millisecNow = Date.now();
	const millisecStartedAt = new Date(startedAt).getTime();

	const totalMembersTime =
		(millisecNow - millisecStartedAt) % (TURN_DURATION * membersCount);

	const currentMember = Math.floor(totalMembersTime / TURN_DURATION);

	const memberTimeForTurn =
		TURN_DURATION - (totalMembersTime - currentMember * TURN_DURATION);

	return {
		currentMember,
		memberTimeForTurn,
	};
};
