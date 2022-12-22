// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const PromiseObjectAll = async (obj: any) => {
	return Object.fromEntries(
		await Promise.all(Object.entries(obj).map(async ([key, value]) => [key, await value]))
	);
};
