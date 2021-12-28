import type { RequestHandler } from '@sveltejs/kit';

interface Base {
	Body?: Record<string, unknown>;
	Resp?: any;
}

export const useHandler =
	<T extends Base = Base>(
		callback: (req: { body: T['Body'] }) => T['Resp'] | Promise<T['Resp']>,
		successOptions?: { status?: number; headers?: Record<string, string> },
		errorOptions?: { status?: number; headers?: Record<string, string> }
	): RequestHandler<null, T['Body'], T['Resp']> =>
	async (req: { body: T['Body'] }) => {
		try {
			return {
				status: successOptions?.status ?? 200,
				body: await callback(req),
				headers: successOptions?.headers
			};
		} catch (err: any) {
			console.log(err);
			return {
				status: errorOptions?.status ?? 500,
				body: { message: err.message ?? 'Internal Server Error' },
				headers: errorOptions?.headers
			};
		}
	};
