// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const PromiseObjectAll = async (obj: any) => {
	const keys = Object.keys(obj);
	const promises = keys.map((key) => obj[key]);
	const values = await Promise.all(promises);
	const result = {} as Record<string, unknown>;
	for (let i = 0; i < keys.length; i++) {
		result[keys[i]] = values[i];
	}
	return result;
};
