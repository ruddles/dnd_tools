export const formatCr = (cr: number) => {
	if (cr == 0 || cr >= 1) {
		return cr.toString();
	}

	const dnom = 1 / cr;
	return `1/${dnom}`;
};
