import type { User } from 'src/models/user';

export class UserService {
	constructor(private db: D1Database) {}

	async findAll(): Promise<User[]> {
		const res = await this.db.prepare('SELECT * FROM users;').all<User>();
		if (res.success) return res.results ?? [];
		throw Error('services.getUsers(): failed');
	}

	findOne(id: number) {
		return this.db.prepare('SELECT * FROM users WHERE id = ?;').bind(id).first<User>();
	}

	async create(user: Omit<User, 'id'>) {
		const res = await this.db
			.prepare('INSERT INTO users (name, email) VALUES (?, ?);')
			.bind(user.name, user.email)
			.run();

		if (!res.success) throw Error('services.createUser(): failed');
	}

	async update(user: User) {
		const res = await this.db
			.prepare('UPDATE users SET name = ?, email = ? WHERE id = ?;')
			.bind(user.name, user.email, user.id)
			.run();

		if (!res.success) throw Error('services.updateUser(): failed');
	}
}
