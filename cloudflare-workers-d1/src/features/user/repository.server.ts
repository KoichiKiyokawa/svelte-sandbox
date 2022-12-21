import { BaseRepository } from '../core/repository.server';
import type { User } from './model';

export class UserRepository extends BaseRepository {
	async findAll(): Promise<User[]> {
		return this.sql`SELECT * FROM users;`.all<User>();
	}

	findOne(id: number) {
		return this.sql`SELECT * FROM users WHERE id = ${id};`.first<User>();
	}

	async create(user: Omit<User, 'id'>) {
		return this.sql`INSERT INTO users (name, email) VALUES (${user.email}, ${user.name});`.run();
	}

	async update(user: User) {
		return this
			.sql`UPDATE users SET name = ${user.name}, email = ${user.email} WHERE id = ${user.id};`.run();
	}
}
