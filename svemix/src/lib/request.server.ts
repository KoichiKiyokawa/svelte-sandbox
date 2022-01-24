export const parseRequest = async <T>(req: Request): Promise<T> => {
	const body = await req.formData();
	const res = {} as T;
	body.forEach((value, key) => {
		res[key] = value;
	});
	return res;
};
