export const convertDate = (date: string | undefined) => {
	if (date) {
		return new Date(date).toLocaleString('ru-RU');
	}
	return null;
};

export const convertToTime = (ms: number | undefined) => {
	if (ms) {
		return new Date(ms).toLocaleTimeString('ru-RU', {
			minute: '2-digit',
			second: '2-digit',
		});
	}
};
