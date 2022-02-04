export async function requestToJson<T extends Record<string, unknown>>(
	request: Request
): Promise<T> {
	const form = await request.formData();
	const obj = {} as any;
	form.forEach((value, key) => {
		if (obj[key] === undefined) {
			obj[key] = value;
		} else if (Array.isArray(obj[key])) {
			obj[key] = [...obj[key], value];
		} else {
			obj[key] = [obj[key], value];
		}
	});

	return obj as T;
}
