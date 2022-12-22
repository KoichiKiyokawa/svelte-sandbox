type MayBePromise<T> = T | Promise<T>;
type MayBePromiseObject = {
	[key: string]: MayBePromise<unknown>;
};
type ObjectAwaited<T extends MayBePromiseObject> = {
	[K in keyof T]: Awaited<T[K]>;
};

export const PromiseObjectAll = async <T extends MayBePromiseObject>(
	obj: T
): Promise<ObjectAwaited<T>> => {
	return Object.fromEntries(
		await Promise.all(Object.entries(obj).map(async ([key, value]) => [key, await value]))
	);
};
