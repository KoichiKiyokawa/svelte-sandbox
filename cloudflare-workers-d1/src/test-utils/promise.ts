export const PromiseObjectAll = async (obj: any) => {
	const keys = Object.keys(obj);
	const promises = keys.map((key) => obj[key]);
	const values = await Promise.all(promises);
	const result = {} as any;
	for (let i = 0; i < keys.length; i++) {
		result[keys[i]] = values[i];
	}
	return result;
};
