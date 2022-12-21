export class BaseRepository {
	constructor(private db: D1Database) {}

	sql(segments: TemplateStringsArray, ...args: unknown[]) {
		let query = '';
		for (let i = 0; i < args.length; i++) {
			query += segments[i] + '?';
		}
		query += segments[segments.length - 1];

		console.info(`[SQL] ${query}` + (args.length ? `(args: ${JSON.stringify(args)})` : ''));
		const stmt = this.db.prepare(query).bind(...args);
		return new D1PreparedStatementWrapper(stmt);
	}
}

class D1PreparedStatementWrapper {
	constructor(private stmt: D1PreparedStatement) {}

	async first<T>() {
		return await this.stmt.first<T>();
	}

	async all<T>() {
		const res = await this.stmt.all<T>();
		if (!res.success) throw Error(res.error);
		return res.results as T[];
	}

	async run(): Promise<void> {
		const res = await this.stmt.run();
		if (!res.success) throw Error(res.error);
	}
}
